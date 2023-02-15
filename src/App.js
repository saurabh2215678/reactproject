
import './App.css';
import TestOne from './components/test-one';
import TestTwo from './components/test-two';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  palette: {
      secondary: {
        light: "#ffbd9d",
        main: '#bbffb3',
      },
      neutral: {
        main: '#000',
        contrastText: '#fff'
      }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TestOne/>
        <TestTwo/>
      </div>
    </ThemeProvider>
  );
}

export default App;
