import { Box, TextField } from '@mui/material';
import { FC } from 'react';

const App: FC = () => (
  <Box
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    <TextField id="standard-basic" label="Логин" variant="standard" />
    <TextField id="standard-basic" label="Пароль" variant="standard" />
  </Box>
);

export default App;
