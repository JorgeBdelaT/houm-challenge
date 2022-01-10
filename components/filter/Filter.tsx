/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from "react";
import { Box, Button, Slider, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { MAX_IBU, MIN_IBU, MAX_ABV, MIN_ABV } from "../../constants";
import { FiltersOptions } from "../../types";
import { parseRangeValueToArray } from "../../utils";

const getDefaultValues = (value?: FiltersOptions) => {
  if (!value)
    return {
      abv: { gt: undefined, lt: undefined },
      ibu: { gt: undefined, lt: undefined },
      name: "",
    };
  return value;
};

interface FilterProps {
  // eslint-disable-next-line no-unused-vars
  onFiltersChange: (newFilters: FiltersOptions) => void;
  loading: boolean;
  selectedFilters?: FiltersOptions;
}

const Filter: React.FC<FilterProps> = ({
  selectedFilters,
  onFiltersChange,
  loading,
}) => {
  const { register, handleSubmit, control, setValue, watch } =
    useForm<FiltersOptions>({
      defaultValues: getDefaultValues(selectedFilters),
    });

  const watchedIbu = watch("ibu");
  const watchedAbv = watch("abv");

  // FIX
  const handleSliderChange = (event: Event, type: "ibu" | "abv") => {
    const { target } = event;
    if (target) {
      // @ts-ignore
      const [gt, lt] = target?.value;
      setValue(`${type}.gt`, gt);
      setValue(`${type}.lt`, lt);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        p: 2,
        backgroundColor: "white",
        borderRadius: 1,
        boxShadow: 1,
        position: "sticky",
        top: { xs: 76, md: 84 },
        marginBottom: 2,
        left: 0,
        zIndex: 1,
      }}
    >
      <form onSubmit={handleSubmit(onFiltersChange)}>
        <TextField
          label="Beer name"
          variant="outlined"
          placeholder="Search by name"
          {...register("name")}
        />
        <Box>
          IBU: {watchedIbu?.gt ?? "0"} - {watchedIbu?.lt ?? "0"}
          <Controller
            control={control}
            name="ibu"
            render={() => (
              <Slider
                disableSwap
                max={MAX_IBU}
                min={MIN_IBU}
                onChange={(e) => handleSliderChange(e, "ibu")}
                value={parseRangeValueToArray(watchedIbu)}
                valueLabelDisplay="auto"
              />
            )}
          />
        </Box>
        <Box>
          ABV: {watchedAbv?.gt ?? "0"} - {watchedAbv?.lt ?? "0"}
          <Controller
            control={control}
            name="abv"
            render={() => (
              <Slider
                max={MAX_ABV}
                min={MIN_ABV}
                onChange={(e) => handleSliderChange(e, "abv")}
                value={parseRangeValueToArray(watchedAbv)}
                valueLabelDisplay="auto"
                disableSwap
              />
            )}
          />
        </Box>
        <Button type="submit" disabled={loading} variant="contained">
          Apply filters
        </Button>
      </form>
    </Box>
  );
};

export default Filter;
