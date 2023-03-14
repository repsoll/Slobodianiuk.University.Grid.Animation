import { Box, Grid, Typography } from '@mui/material';
import Constants from '../../constants/constants';
import IAnimationConfig from '../../models/animation-config';

interface IProps {
  config: IAnimationConfig;
}

function StyledGridItem(props: React.PropsWithChildren) {
  return (
    <Grid item xs>
      <Box
        sx={{
          maxWidth: Constants.PixelWidth * Constants.GridRows + -24 + 'px',
        }}
      >
        {props?.children}
      </Box>
    </Grid>
  );
}

export default function ProjectInfo(props: IProps) {
  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='flex-start'
    >
      <StyledGridItem>
        <Typography fontSize='13px' noWrap>
          {props?.config?.projectName}
        </Typography>
      </StyledGridItem>

      <StyledGridItem>
        <Typography fontSize='10px' fontWeight='inherit' noWrap>
          {`by ${props?.config?.name} ${props?.config?.surname}`}
        </Typography>
      </StyledGridItem>
    </Grid>
  );
}
