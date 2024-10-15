import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import { FC, ReactNode } from "react";

interface Props {
  headerArea?: ReactNode;
  filterArea?: ReactNode;
  contentArea?: ReactNode;
}

export const AppLayout: FC<Props> = ({ headerArea, contentArea, filterArea }) => {
  const renadomDelayes = Array.from(
    { length: 9 },
    () => 100 + 100 * Math.random()
  ).map((n, i, arr) => n + (arr[i - 1] || 0));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Slide direction="down" mountOnEnter in timeout={renadomDelayes[0]}>
            <Box height="100%">
              <Grow mountOnEnter in timeout={renadomDelayes[0]}>
                <Box>
                  <Box>{headerArea}</Box>
                  <Slide direction="up" mountOnEnter in timeout={renadomDelayes[1]}>
                    <Box>{filterArea}</Box>
                  </Slide>
                </Box>
              </Grow>
            </Box>
          </Slide>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Slide direction="up" mountOnEnter in timeout={renadomDelayes[2]}>
            <Box height="100%">
              <Grow mountOnEnter in timeout={renadomDelayes[0]}>
                <Box height="100%">{contentArea}</Box>
              </Grow>
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
};
