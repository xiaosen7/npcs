import { configuration, Upload } from "@next.js-practical-cases/upload";
import { uploadActions } from "@next.js-practical-cases/upload/actions";
import { FileSystemStorage } from "@next.js-practical-cases/upload/upload/models/storages/file-system";
import path from "path";

configuration.set({
  storage: new FileSystemStorage(
    path.resolve("node_modules", ".cache", "upload")
  ),
  webSocketPort: 9999,
});

export default function Home() {
  return (
    <div className="m-auto w-2/3 min-w-96">
      <Upload actions={uploadActions} />
    </div>
  );
}
