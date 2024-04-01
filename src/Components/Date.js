import * as React from 'react';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CenteredBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40vh', // Adjust as needed
});

const BorderedBox = styled('div')({
  border: '5px solid #ccc',
  padding: '15px',
  borderRadius: '8px',
});

export default function DatePickerSection() {
  return (
    <CenteredBox>
      <BorderedBox>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DemoItem>
              <DatePicker />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </BorderedBox>
    </CenteredBox>
  );
}
//