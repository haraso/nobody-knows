import AppLogo from "@mui/icons-material/ShoppingBag";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <Card sx={{ display: "flex", alignItems: "center", gap: 2 }} square>
      <AppLogo
        sx={{
          width: 50,
          height: 50,
        }}
      />
      <Typography
        variant="h2"
        sx={{
          backgroundSize: "100%",
          backgroundImage: (theme) =>
            `linear-gradient(0deg, ${theme.palette.text.primary}, transparent)`,
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        App name
      </Typography>
    </Card>
  );
};
