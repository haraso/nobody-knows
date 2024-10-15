import Filter from "@mui/icons-material/FilterAlt";
import FilterAltOff from "@mui/icons-material/FilterAltOff";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FC } from "react";
import { useAppService } from "../../../providers/AppService";

export const FilterBar: FC = () => {
  const { categories } = useAppService();
  return (
    <Box marginX={2}>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          borderTop: "0",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
          padding: 1,
        }}
      >
        <Box width={200}>
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="category-label" size="small">
              Category
            </InputLabel>
            {categories(({ loading, selected, list }) => {
              return (
                !loading && (
                  <Select
                    size="small"
                    labelId="category-label"
                    value={selected}
                    label="Category"
                    IconComponent={
                      selected === "No filter" ? FilterAltOff : Filter
                    }
                    onChange={(ev) =>
                      categories.mutate((c) => (c.selected = ev.target.value))
                    }
                  >
                    {list.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                )
              );
            })}
          </FormControl>
        </Box>
      </Card>
    </Box>
  );
};
