import {
  IComponentBaseProps,
  IListProps,
  IQuestion,
  ITag,
  IUser,
  List,
  mp,
} from "@/shared";
import { QuestionCard } from "./card";

export interface IQuestionListProps<TQuestion extends IQuestion>
  extends IComponentBaseProps,
    Omit<IListProps<TQuestion>, "items" | "direction" | "renderItem"> {
  questions: TQuestion[];
  getAuthor: (question: TQuestion) => IUser;
  getTags: (question: TQuestion) => ITag[];
  getVotes: (question: TQuestion) => IUser[];
  total: number;
}

export const QuestionList = <TQuestion extends IQuestion>(
  props: IQuestionListProps<TQuestion>,
) => {
  const { questions, getAuthor, getTags, getVotes, ...listProps } = props;

  return mp(
    props,
    <List
      {...listProps}
      direction="column"
      items={questions}
      renderItem={(question) => (
        <QuestionCard
          creator={getAuthor(question)}
          question={question}
          tags={getTags(question)}
          votes={getVotes(question).length}
        />
      )}
    />,
  );
};
