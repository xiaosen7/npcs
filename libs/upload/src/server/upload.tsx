import React from "react";

import { UploadClientSide } from "../client/ui/upload-client-side";
import { uploadActions } from "./actions";

export interface IUploadProps {}

export const Upload: React.FC<IUploadProps> = () => {
  return <UploadClientSide actions={uploadActions} />;
};
