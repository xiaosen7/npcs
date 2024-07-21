export interface IComponentBaseProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface IControllableComponentProps<TValue> {
  value?: TValue;
  defaultValue?: TValue;
  onChange?: (value: TValue) => void;
  disabled?: boolean;
}

export interface IPageProps<TParams = {}, TSearchParams = {}> {
  params: TParams;
  searchParams: TSearchParams;
}
