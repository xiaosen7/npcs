import { IconInfo } from "@/assets/icon/info";
import { IconPlus } from "@/assets/icon/plus";
import { IconSearch } from "@/assets/icon/search";
import { ImageFirstNote } from "@/assets/image/first-note";
import { ButtonFixed } from "@/button/float";
import { ButtonIcon } from "@/button/icon";
import { prisma } from "@/prisma/client";
import { IPageProps } from "@npc/shared/react-helpers";
import Link from "next/link";
import React from "react";

const Page: React.FC<IPageProps> = async (props) => {
  const notes = await prisma.note.findMany();

  return (
    <div>
      <header className="bg-primary flex items-center justify-between pb-9">
        <h1 className="text-3xl font-semibold">Notes</h1>
        <div className="flex gap-5">
          <ButtonIcon>
            <IconSearch alt="search" />
          </ButtonIcon>

          <ButtonIcon>
            <IconInfo alt="info" />
          </ButtonIcon>
        </div>
      </header>

      {notes.map(({ color, content, title, id }, index) => {
        return (
          <Link key={index} href={`/view/${id}`}>
            <div
              className="mb-7 rounded-md px-11 py-7 text-xl text-black"
              style={{ background: color }}
            >
              {title}
            </div>
          </Link>
        );
      })}

      {notes.length === 0 && (
        <div
          className="fixed inset-0 m-auto -mt-[10px] flex flex-col justify-center"
          hidden={notes.length > 0}
        >
          <ImageFirstNote
            alt="background first note"
            className="mx-auto"
            height={286}
            width={350}
          />
          <div className="text-center text-lg">Create your first note !</div>
        </div>
      )}

      <Link className="fixed bottom-[60px] right-[46px]" href={"/add"}>
        <ButtonFixed>
          <IconPlus alt="add new note" size="xxl" />
        </ButtonFixed>
      </Link>
    </div>
  );
};

export default Page;
