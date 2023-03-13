import { Grid } from '@mui/material';
import { theme } from '../../App';
import { Colour } from '../../models/colour';
import IFrame from '../../models/frame';
import Pixel from '../pixel/pixel';

interface IProps {
  frame?: IFrame;
  rows: number;
  columns: number;
}

export default function PixelGrid(props: IProps) {
  const colourSwitcher = (colour?: Colour): string => {
    switch (colour) {
      case Colour.Black:
        return theme.palette.primary.main;

      case Colour.White:
        return theme.palette.background.paper;

      default:
        return theme.palette.primary.main;
    }
  };

  const getPixelColour = (rowIndex: number, colIndex: number) => {
    const pixel = props?.frame?.pixels?.find(
      (p) => p.x === rowIndex && p.y === colIndex
    );
    return colourSwitcher(pixel?.color);
  };

  return (
    <>
      {Array.from({ length: props?.rows }, (_, rowIndex) => (
        <Grid container spacing={0} direction='row' key={rowIndex}>
          {Array.from({ length: props?.columns }, (_, colIndex) => (
            <Grid item key={`${rowIndex}-${colIndex}`}>
              <Pixel colour={getPixelColour(rowIndex, colIndex)}></Pixel>
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  );
}
