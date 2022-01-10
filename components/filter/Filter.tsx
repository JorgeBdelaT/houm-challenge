/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Slider,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Info } from "@mui/icons-material";
import {
  MAX_IBU,
  MIN_IBU,
  MAX_ABV,
  MIN_ABV,
  IBU_INFO_URL,
  ABV_INFO_URL,
} from "../../constants";
import { FiltersOptions } from "../../types";
import { parseRangeValueToArray } from "../../utils";
import styles from "./styles";

import { ExpandMore } from "@mui/icons-material";

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
    <Accordion sx={styles.accordeon}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="filters-content"
        id="filters-header"
      >
        <Typography>Filters</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          component="form"
          onSubmit={handleSubmit(onFiltersChange)}
          sx={styles.form}
        >
          <TextField
            label="Beer name"
            variant="outlined"
            placeholder="Search by name"
            sx={styles.nameInput}
            {...register("name")}
          />
          <Box sx={styles.rangeInputBox}>
            IBU: {watchedIbu?.gt ?? "0"} - {watchedIbu?.lt ?? "0"}
            <Tooltip arrow placeholder="bottom" title="What is IBU?">
              <IconButton onClick={() => window.open(IBU_INFO_URL, "_blank")}>
                <Info />
              </IconButton>
            </Tooltip>
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
          <Box sx={styles.rangeInputBox}>
            ABV: {watchedAbv?.gt ?? "0"} - {watchedAbv?.lt ?? "0"}
            <Tooltip arrow placeholder="bottom" title="What is ABV?">
              <IconButton onClick={() => window.open(ABV_INFO_URL, "_blank")}>
                <Info />
              </IconButton>
            </Tooltip>
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
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Filter;
