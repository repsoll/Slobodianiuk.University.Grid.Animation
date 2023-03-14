import { Box, Card, Collapse, Grid } from '@mui/material';
import { theme } from '../../App';
import Constants from '../../constants/constants';
import AnimatedPixelGrid from '../animated-pixel-grid/animated-pixel-grid';
import IAnimationConfig from '../../models/animation-config';
import ProjectInfo from '../project-info/project-info';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  removeHover,
  selectIsHovering,
  updateHover,
} from '../../store/grid-hover-slice';

interface IProps {
  config: IAnimationConfig;
}

export default function GridItem(props: IProps) {
  const isHovering = useAppSelector((state) =>
    selectIsHovering(state, props?.config?.id)
  );
  const dispatch = useAppDispatch();

  const handleOnHover = () => dispatch(updateHover(props?.config?.id));
  const handleRemoveHover = () => dispatch(removeHover());

  return (
    <Card
      className='grid-item-card'
      onMouseEnter={() => handleOnHover()}
      onMouseLeave={() => handleRemoveHover()}
      elevation={2}
      onClick={() => window.open(props?.config?.personalProjectLink, '_blank')}
      sx={{
        height: Constants.PixelHeight * Constants.GridColumns + 'px',
        width: Constants.PixelWidth * Constants.GridRows + 'px',
        maxHeight: Constants.PixelHeight * Constants.GridColumns + 'px',
        maxWidth: Constants.PixelWidth * Constants.GridRows + 'px',
        ':hover': {
          cursor: 'pointer',
          boxShadow: theme.shadows[5],
        },
      }}
    >
      <Collapse
        orientation='vertical'
        in={isHovering}
        collapsedSize={Constants.HeaderRows * Constants.PixelHeight}
      >
        <AnimatedPixelGrid config={props?.config} animate={isHovering} />
      </Collapse>

      <Box
        sx={{
          position: 'relative',
          bottom: 0,
        }}
        pl={1.2}
        pr={1.2}
        pt={0.8}
      >
        <ProjectInfo config={props?.config} />
      </Box>
    </Card>
  );
}
