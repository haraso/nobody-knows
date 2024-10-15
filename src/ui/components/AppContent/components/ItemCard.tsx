import { Card, CardContent, CardHeader } from "@mui/material";
import { FC } from "react";
import { ProductState } from "../../../../types/appTypes";

export const ItemCard: FC<ProductState> = ({
  title,
  category,
  description,
  image,
  price,
}) => {
  return (
    <Card
      sx={{
        height: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardHeader title={title} />
      <CardContent
        sx={{
          width: "100%",
          height: 400,
          backgroundImage: `url(${image})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      ></CardContent>
      <CardHeader
        title={price}
        subheader={`Category: ${category}`}
        sx={{ alignSelf: "start" }}
      />
    </Card>
  );
};
