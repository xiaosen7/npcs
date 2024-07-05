import {
  Badge,
  IComponentBaseProps,
  IFilterOption,
  Input,
  InputProps,
  mp,
} from "@/shared";
import React from "react";

export interface IMultipleSelectProps<TItem> extends IComponentBaseProps {
  items: TItem[];
  renderSelection: (item: TItem) => React.ReactNode;
  input: InputProps;
  onSearchItems: (keyword: string) => Promise<IFilterOption[]>;
  getLabel: (item: TItem) => React.ReactNode;
  value: TItem[];
  onChange?: (items: TItem[]) => void;
}

export const MultipleSelect = <TItem extends { id: string }>(
  props: IMultipleSelectProps<TItem>
) => {
  const { items, getLabel, input } = props;

  return mp(
    props,
    <div>
      <div className="light-border-2 text-dark300_light700 background-light900_dark300 paragraph-regular flex border pl-3">
        <div className="flex items-center justify-center gap-2 ">
          {items.map((item) => (
            <Badge key={item.id}>{getLabel(item)}</Badge>
          ))}
        </div>

        {mp(input, <Input {...input} />)}
      </div>
    </div>
  );
};
