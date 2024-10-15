import { FC } from "react";

export function overrideProps<Props>(
  Component: FC<Props>,
  defaultProps: Partial<Props>
): FC<Props> {
  return (props) => <Component {...defaultProps} {...props} />;
}
