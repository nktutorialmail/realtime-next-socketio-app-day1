import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function AppAlert() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="info"> 
    {/* success error info */}
    ยินดีต้อนรับทุกคน
  </Alert>
  )
}