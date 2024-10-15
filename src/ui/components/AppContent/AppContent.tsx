import { FC } from "react";
import { AppContentLayout } from "./layouts/AppContentLayout";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { ItemCards } from "./components/ItemCards";

export const AppContent: FC = () => {
  return (
    <AppContentLayout
      contentArea={<ItemCards />}
      loadingIndicator={<LoadingIndicator />}
    />
  );
};
