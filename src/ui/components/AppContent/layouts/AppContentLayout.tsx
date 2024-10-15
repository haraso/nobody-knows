import Grid from "@mui/material/Grid2";
import { FC, ReactNode } from "react";

interface Props {
  contentArea?: ReactNode
  loadingIndicator?: ReactNode
}

export const AppContentLayout: FC<Props> = ({
  contentArea,
  loadingIndicator
})=>{
  return (
    <Grid container gap={2} justifyContent="center">
      <Grid size={{ xs: 12 }}>
        {contentArea}
      </Grid>
      <Grid size={{ xs: 6, md: 9.2 }}>
        {loadingIndicator}
      </Grid>
    </Grid>
  )
}