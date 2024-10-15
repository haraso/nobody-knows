import { createContext, FC, ReactNode, useContext } from "react";

export function createService<
  Props extends Record<any, any> = {},
  R extends Record<any, any> = {}
>(providerFactory: (props: Props) => R) {
  const ctx = createContext(null! as R);
  const Service: FC<Props & { children: ReactNode }> = ({
    children,
    ...props
  }) => {
    return (
      <ctx.Provider value={providerFactory(props as unknown as Props)}>
        {children}
      </ctx.Provider>
    );
  };
  const useService = () => useContext(ctx);
  return { Service, useService } as const;
}
