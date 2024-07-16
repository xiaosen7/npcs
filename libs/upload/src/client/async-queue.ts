import { queue } from "async";
import { BehaviorSubject, Subject } from "rxjs";

type ITask = () => Promise<void>;

const defaultOptions: Required<IAsyncQueueOptions> = {
  concurrency: 3,
};

export interface IAsyncQueueOptions {
  /**
   * @default 3
   */
  concurrency?: number;
}

export class AsyncQueue {
  finishedCount = 0;
  startedCount = 0;

  progress$ = new BehaviorSubject<number>(0);
  error$ = new Subject();

  /**
   * The time of resuming
   */
  resumingTime = Date.now();
  /**
   * The accumulative time before the resume
   */
  accumulativeTimeBeforeResuming = 0;

  #queue: ReturnType<typeof queue<ITask>>;

  options: Required<IAsyncQueueOptions>;

  constructor(
    options: IAsyncQueueOptions = {
      concurrency: 3,
    }
  ) {
    this.options = { ...defaultOptions, ...options };

    this.#queue = queue<ITask>((task, done) => {
      this.startedCount++;
      this.progress$.next((this.startedCount / this.#queue.length()) * 100);
      task()
        .then(() => done())
        .catch(done)
        .finally(() => {
          this.finishedCount += 1;
        });
    }, this.options.concurrency);

    this.#queue.error((error) => {
      this.error$.next(error);
    });

    this.#queue.drain(() => {
      this.accumulativeTimeBeforeResuming += Date.now() - this.resumingTime;
    });
  }

  push(task: ITask) {
    return this.#queue.push(task);
  }

  length() {
    return this.#queue.length();
  }

  resume() {
    if (!this.#queue.paused) {
      return;
    }

    this.#queue.resume();
    this.resumingTime = Date.now();
  }

  pause() {
    if (this.#queue.paused) {
      return;
    }

    this.#queue.pause();
    this.accumulativeTimeBeforeResuming += Date.now() - this.resumingTime;
  }

  drain() {
    return this.#queue.drain();
  }

  kill() {
    this.error$.complete();
    this.progress$.complete();
    return this.#queue.kill();
  }

  get runningTime() {
    if (this.#queue.paused) {
      return this.accumulativeTimeBeforeResuming;
    }

    return this.accumulativeTimeBeforeResuming + Date.now() - this.resumingTime;
  }
}
