import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import "./taskViwer.css"


export default function BasicDatePicker() {
  const [task, setTask] = useState(null);
  const [Description, setDescription] = useState(null);
  const [date, setdate] = useState(null);
  const [time, settime] = useState(null);
  function func(){
    console.log("date=",date, "time=" ,time)
  }

  return (
    <>
    <Grid container direction="column" alignItems="center" justifyContent="center">
    <Typography variant='h5'> Task Creator </Typography>
    <form onSubmi={func}>
        <label forclass="taskname">Task Name</label><br />
        <TextField id="taskname" 
                  variant="outlined" 
                  size="small"
                  required
                  style={{width:520}}   
                  className='common-css-for-input-fields'
                  onChange={(event) => {
                  setTask(event.target.value)}} /> <br /><br />
        <label forclass="taskDescriptiin">Task Description (optional)</label><br />
        <TextField
                  id="taskDescriptiin"
                  variant="outlined" 
                  size="small"
                  style={{width:520}}  
                  className='common-css-for-input-fields' 
                  onChange={(event) => {
                  setDescription(event.target.value)}} /> <br /> <br />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                    value={date}
                    size="small"
                    id="date"
                    style={{width:500}} 
                    onChange={(newValue) => {
                      setdate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />} />
              <TimePicker
                    size="small"
                    value={time}
                    id="time"
                    onChange={(newValue) => {
                      settime(newValue)
                    }}
                    renderInput={(params) => <TextField {...params} />} />
        </LocalizationProvider>
        <br /><br /> <br />
          <Button 
                    variant='contained' 
                    size="large"
                    color="secondary"
                    style={{width:200}} 
                    >
                    Add Task
          </Button>
    </form>
    </Grid>
    </>
  );
}
