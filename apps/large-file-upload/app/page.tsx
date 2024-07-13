import { uploadActions } from "@/actions/upload";
import { Upload } from "@/upload/components/upload";

export default function Home() {
  return (
    <div className="m-auto w-2/3 min-w-96">
      <Upload actions={uploadActions} />
    </div>
  );
}
