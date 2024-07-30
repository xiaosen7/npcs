import {
  configuration,
  FileSystemStorage,
  startWebsocketServer,
  Upload,
} from "@npcs/upload";
import path from "path";

configuration.set({
  storage: new FileSystemStorage(
    path.resolve("node_modules", ".cache", "upload"),
  ),
  webSocketPort: 9999,
});

if (process.env.NEXT_PHASE !== "phase-production-build") {
  startWebsocketServer();
}

export default function Home() {
  return (
    <div className="m-auto w-2/3 min-w-96">
      <Upload />
    </div>
  );
}
