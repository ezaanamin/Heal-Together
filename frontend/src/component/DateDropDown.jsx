import React, { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import { FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import styled from 'styled-components';
import * as yup from 'yup';
import { UserContext } from '../Context/context';
import { useContext } from 'react';


const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropdownContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const DateDropdown = () => {
  const {  date, setDate,
    day, setDay,
    month, setMonth,
    year, setYear,    dateError,setDateError}=useContext(UserContext)

  const validationSchema = yup.object().shape({
    day: yup.string().required('Day is required'),
    month: yup.string().required('Month is required'),
    year: yup.string().required('Year is required'),
  });

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setDay(newDate.getDate());
    setMonth(newDate.toLocaleString('default', { month: 'long' }));
    setYear(newDate.getFullYear());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate({ day, month, year });
      const selectedDate = new Date(`${month} ${day}, ${year}`);
      const currentDate = new Date();

      if (currentDate.getFullYear() - selectedDate.getFullYear() < 13) {
        console.log('Age must be greater than or equal to 13');
        return;
      }

      // Continue with your logic if the age is valid
      console.log(day, month, year);
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(()=>{
    const selectedDate = new Date(`${month} ${day}, ${year}`);
    const currentDate = new Date();

    if (currentDate.getFullYear() - selectedDate.getFullYear() < 13) {
      setDateError(true)
      return;
    }
    if (currentDate.getFullYear() - selectedDate.getFullYear() > 13) {
      setDateError(false)
      return;
    }
  


    

  },[year])

  return (
    <FormContainer onSubmit={handleSubmit}>

      <DropdownContainer>
        <FormControl variant="outlined">
          <InputLabel htmlFor="day-select">Day</InputLabel>
          <Select 
       error={dateError}
          style={{width:100}}
            value={day}
            onChange={(e) => setDay(e.target.value)}
            labelId="day-select"
            label="Day"
          >
            <MenuItem value="">-- Select Day --</MenuItem>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((dayOption) => (
              <MenuItem key={dayOption} value={dayOption}>
                {dayOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="month-select">Month</InputLabel>
          <Select
                error={dateError}
                style={{width:100}}
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            labelId="month-select"
            label="Month"
          >
            <MenuItem value="">-- Select Month --</MenuItem>
            {Array.from({ length: 12 }, (_, i) => i).map((monthIndex) => {
              const monthDate = new Date();
              monthDate.setMonth(monthIndex);
              const monthName = monthDate.toLocaleString('default', { month: 'long' });
              return (
                <MenuItem key={monthIndex} value={monthName}>
                  {monthName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="year-select">Year</InputLabel>
          <Select
                   error={dateError}

                style={{width:100}}
            value={year}
            onChange={(e) => setYear(e.target.value)}
            labelId="year-select"
            label="Year"
          >
            <MenuItem value="">-- Select Year --</MenuItem>
            {Array.from({ length: 120 }, (_, i) => 2023 - i).map((yearOption) => (
              <MenuItem key={yearOption} value={yearOption}>
                {yearOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DropdownContainer>


    </FormContainer>
  );
};

export default DateDropdown;
