import Grid from "@mui/material/Grid2";
import { FC } from "react";
import { ItemCard } from "./ItemCard";
import { useAppService } from "../../../../providers/AppService";
import Box from "@mui/material/Box";

export const ItemCards: FC = () => {
  const {filteredProducts} = useAppService();
  return (
    <Box display="flex" justifyContent="center">
      <Grid container gap={2} justifyContent="center">
        {filteredProducts(({list})=>(
          list.map((productState)=>(
            <Grid key={productState.id} size={{ xs: 6, md: 3  }}>
              <ItemCard {...productState}/>
            </Grid>
          ))
        ))}
      </Grid>
    </Box>
  );
};
