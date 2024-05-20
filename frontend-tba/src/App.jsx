import { useMemo, useState } from 'react'
import { createTheme } from "@mui/material/styles";
import { CssBaseline,ThemeProvider } from '@mui/material'
import { themeSettings } from "./theme"
import './App.css'
import { useSelector } from 'react-redux'
import { Route, Routes,Navigate, BrowserRouter } from 'react-router-dom'
import Dashboard from './scenes/dashboard';
import Layout from './scenes/Layout';
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode),[mode]))
  return <div className='app'>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </div>
}

export default App

