import { Box, Grid, Tooltip, Typography } from '@mui/material';
import Constants from '../../constants/constants';
import PixelGrid from '../pixel-grid/pixel-grid';
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
      sx={{
        height: '100%',
      }}
    >
      <Grid item>
        <PixelGrid
          frame={props?.config?.header}
          rows={Constants.HeaderRows}
          columns={Constants.HeaderColumns}
        />
      </Grid>
      <Grid item pl={1.2} pr={1.2} pt={0.8}>
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
            <Tooltip title={props?.config?.email} arrow>
              <Typography fontSize='10px' fontWeight='inherit' noWrap>
                {`by ${props?.config?.name} ${props?.config?.surname}`}
              </Typography>
            </Tooltip>
          </StyledGridItem>
        </Grid>
      </Grid>
    </Grid>
  );
}
