import React from 'react'
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {Stack, TextField} from "@mui/material";
import {MobileDatePicker} from "@mui/x-date-pickers/MobileDatePicker";
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";

const DatePicker = ({startDate, endDate, handleStartDate, handleEndDate, fetchFilteredResults}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={7}
                   divider={<Divider orientation="vertical" flexItem/>}>
                <MobileDatePicker
                    label="Pick Start Date"
                    inputFormat="MM/dd/yyyy"
                    value={startDate}
                    onChange={handleStartDate}
                    renderInput={(params) => <TextField {...params} />}
                />
                <MobileDatePicker
                    label="Pick End Date"
                    inputFormat="MM/dd/yyyy"
                    value={endDate}
                    onChange={handleEndDate}
                    renderInput={(params) => <TextField {...params} />}
                />
                <Button onClick={fetchFilteredResults}>Filter</Button>
            </Stack>
        </LocalizationProvider>
    )
}
export default DatePicker