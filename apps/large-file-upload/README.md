This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
pnpm dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

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
