import {
  Box,
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import './App.css';
import AnimationCardsGrid from './components/animation-cards-grid/animation-cards-grid';
import CustomAppBar from './components/app-bar/custom-app-bar';

export const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar />
      <Container>
        <Box pt={3} pb={3}>
          <AnimationCardsGrid />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
