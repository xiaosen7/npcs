This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
pnpm dev
```

## Implementated

- Upload chunks instead of upload the whole file.
- Upload by stream.
- If file has been uploaded, do not need to upload again.
- Restore the progress.
- Stop and continue the progress.
- Upload multiple files.
- Chunks hash cache in client.
- Delete chunks after uploaded in server.
- Hash validation in merging.
- Delete chunks when merge failed.
- Show error from server action in client side.
- Support Websocket.

## TODO

- Concurrency number should be determined by the performance of server and browser.
- Do not to store all chunks of a file in memory in the same time to save memory.
- Concurrency in multiple uploading.
- Show uploading count in progress.
- Support download.

## Record of problems

### client.destroy()

In the old version of `Client` model, `start()` method is asynchronous and there is a promise chain inside it. When I call `destroy()` method I want to stop the chain which may be running at that time, I need to create a condition determining
that current state is destroyed or not for each micro task. Because if `client` has been destroyed, it should not go to next chain. So the code becomes bad.

Finally I found a solution using `RxJS`, I turn the promise chain to stream with `operators`, create a `subscription` property which store all subscriptions, call the `subscription.unsubscribe()` inside the `destroy()`. So when call `destroy()`, all the subscriptions would be unsubscribed and the stream will be stopped.
