import { imageHomeSrc } from "@/shared/assets/icons/home";
import { imageQuestionSrc } from "@/shared/assets/icons/question";
import { imageStarSrc } from "@/shared/assets/icons/star";
import { imageSuitcaseSrc } from "@/shared/assets/icons/suitcase";
import { imageTagSrc } from "@/shared/assets/icons/tag";
import { imageUserSrc } from "@/shared/assets/icons/user";
import { imageUsersSrc } from "@/shared/assets/icons/users";
import { ISidebarLink } from "../types";

export const NAV_LINKS: ISidebarLink[] = [
  {
    imgURL: imageHomeSrc,
    route: "/",
    label: "Home",
  },
  {
    imgURL: imageUsersSrc,
    route: "/community",
    label: "Community",
  },
  {
    imgURL: imageStarSrc,
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: imageSuitcaseSrc,
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: imageTagSrc,
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: imageUserSrc,
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: imageQuestionSrc,
    route: "/ask-question",
    label: "Ask a question",
  },
];
