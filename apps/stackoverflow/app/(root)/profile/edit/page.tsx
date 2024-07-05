import { ac, actions } from "@/actions";
import { prisma } from "@/prisma";
import { ProfileForm } from "@/profile";
import { PROFILE_SCHEMA } from "@/profile/constants";
import { EFormType, IPageProps, IUser } from "@/shared";
import { redirect } from "next/navigation";
import React from "react";
import { z } from "zod";

const onSubmit = async (user: IUser, data: z.infer<typeof PROFILE_SCHEMA>) => {
  "use server";
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data,
  });

  redirect("/profile");
};

const ProfileEditPage: React.FC<IPageProps> = async () => {
  const user = await actions.user.getCurrentOrRedirectSignIn();

  return (
    <ProfileForm
      defaultValues={user}
      type={EFormType.Edit}
      onSubmit={ac(onSubmit).bindArgs(user)}
    />
  );
};

export default ProfileEditPage;
