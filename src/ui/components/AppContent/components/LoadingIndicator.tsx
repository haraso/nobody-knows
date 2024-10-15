import { Skeleton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FC } from "react";

export const LoadingIndicator: FC = ()=>{
  return (
    <Box display="flex" gap={1} justifyContent="center" alignItems="center" width="100%">
      <Skeleton sx={{width: 1, height: 30}}></Skeleton>
    </Box>
  )
}