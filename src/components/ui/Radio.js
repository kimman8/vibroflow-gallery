import React from "react";
// import FormControl from "@material-ui/core/FormControl";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@material-ui/core";

const Radio = () => {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Drive Type</FormLabel>
        <RadioGroup
          aria-label="drivetype"
          name="drive"
          // value={value}
          // onChange={handleChange}
        >
          <FormControlLabel
            value="direct drive"
            control={<Radio />}
            label="Direct Drive"
          />
          <FormControlLabel
            value="sub resonant"
            control={<Radio />}
            label="Sub Resonant"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Radio;
