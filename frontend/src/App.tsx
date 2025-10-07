// frontend/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ruRU } from '@mui/material/locale';

// Импорт страниц
import HomePage from './pages/HomePage';
import ReportProblemPage from './pages/ReportProblemPage';
import ProblemsMapPage from './pages/ProblemsMapPage';
import LoginPage from './pages/LoginPage';

// Создаем тему
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
}, ruRU);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/report" element={<ReportProblemPage />} />
            <Route path="/map" element={<ProblemsMapPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;