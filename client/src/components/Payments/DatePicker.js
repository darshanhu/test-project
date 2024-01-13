import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function MaterialUIPickers({ setSelectedDate, selectedDate }) {
  const handleDateChange = (date) => {
    setSelectedDate(dayjs(date).valueOf());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid
        container
        justifyContent="space-around"
        style={{ width: "97%", paddingLeft: "10px", paddingBottom: "15px" }}
      >
        <DesktopDatePicker
          fullWidth
          disableToolbar
          variant="outline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date paid"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </LocalizationProvider>
  );
}
