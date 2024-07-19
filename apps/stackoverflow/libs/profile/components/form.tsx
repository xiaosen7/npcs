"use client";

import {
  EFormTopic,
  EFormType,
  FormBuilder,
  IFormComponentProps,
  IFormItems,
  mp,
} from "@/shared";
import { merge } from "lodash-es";
import React from "react";
import { z } from "zod";
import { PROFILE_SCHEMA } from "../constants";

const items: IFormItems<z.infer<typeof PROFILE_SCHEMA>> = [
  {
    name: "fullName",
    label: "Name",
    description: "Your name",
  },
  {
    name: "username",
    label: "Username",
    description: "Your username",
  },
  {
    name: "portfolioWebsite",
    label: "Portfolio Link",
    description: "Your portfolio url",
  },
  {
    name: "location",
    label: "Location",
    description: "Your location",
  },
  {
    name: "bio",
    label: "Bio",
    description: "Tell us about yourself",
  },
];

export interface IProfileFormProps
  extends IFormComponentProps<typeof PROFILE_SCHEMA> {}

export const ProfileForm: React.FC<IProfileFormProps> = (props) => {
  return mp(
    props,
    <FormBuilder
      items={items}
      schema={PROFILE_SCHEMA}
      submitAlign="right"
      topic={EFormTopic.Profile}
      type={EFormType.Edit}
      {...props}
      defaultValues={merge(
        {
          bio: "",
          fullName: "",
          location: "",
          portfolioWebsite: "",
          username: "",
        },
        props.defaultValues
      )}
    />
  );
};
