import {
  Box,
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import './App.css';
import AnimationsGrid from './components/animations-grid/animations-grid';
import CustomAppBar from './components/app-bar/custom-app-bar';
import GridHoverContextProvider from './contexts/grid-hover-context';

export const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar />
      <Container>
        <Box pt={3} pb={3}>
          <GridHoverContextProvider>
            <AnimationsGrid />
          </GridHoverContextProvider>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
