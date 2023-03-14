import { Card } from '@mui/material';
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
      {isHovering === false ? (
        <ProjectInfo config={props?.config} />
      ) : (
        <AnimatedPixelGrid frames={props?.config?.frames} />
      )}
    </Card>
  );
}
