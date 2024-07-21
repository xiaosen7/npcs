"use client";

import { IconBack } from "@/assets/icon/back";
import { IComponentBaseProps, mp } from "@npc/shared/react-helpers";
import { useRouter } from "next/navigation";
import React from "react";
import { ButtonIcon } from "../button/icon";

export interface IBackProps extends IComponentBaseProps {}

export const Back: React.FC<IBackProps> = (props) => {
  try {
    const router = useRouter();
    return mp(
      props,
      <ButtonIcon onClick={() => router.back()}>
        <IconBack alt="back" size="sm" />
      </ButtonIcon>,
    );
  } catch (error) {
    // for without next router provider
    return mp(
      props,
      <ButtonIcon>
        <IconBack alt="back" size="sm" />
      </ButtonIcon>,
    );
  }
};
