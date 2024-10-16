import './index.module.scss';
import { Box, Button, TextField, Typography } from '@mui/material';
import { FC } from 'react';

const App: FC = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBasicApi();
  };

  const fetchBasicApi = async () => {
    try {
      const res = await fetch('http://localhost:3001');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="div"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#518ab1',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        sx={{
          width: '20%',
          display: 'flex',
          flexDirection: 'column',
          padding: 5,
          backgroundColor: 'white',
          borderRadius: 5,
        }}
      >
        <Typography variant="h3" textAlign="center" color="#518ab1">
          TRYGRAM
        </Typography>
        <TextField
          id="standard-basic"
          label="Логин"
          variant="standard"
          sx={{ margin: '10px 0' }}
        />
        <TextField
          id="standard-basic"
          label="Пароль"
          variant="standard"
          sx={{ margin: '10px 0' }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: '45px', backgroundColor: '#518ab1' }}
        >
          Вход
        </Button>
      </Box>
    </Box>
  );
};

export default App;
