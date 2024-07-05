"use client";
import { IComponentBaseProps, mp } from "@/shared";
import React from "react";
import { ImageEdit } from "../assets/icons/edit";
import { ImageTrash } from "../assets/icons/trash";

export interface IEditAndDeleteProps extends IComponentBaseProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export const EditAndDelete: React.FC<IEditAndDeleteProps> = (props) => {
  const { onEdit, onDelete } = props;
  return mp(
    props,
    <div className="flex gap-3">
      <ImageEdit
        alt="Edit"
        className="cursor-pointer"
        height={14}
        width={14}
        onClick={() => onEdit?.()}
      />

      <ImageTrash
        alt="Delete"
        className="cursor-pointer"
        height={14}
        width={14}
        onClick={() => onDelete?.()}
      />
    </div>
  );
};
