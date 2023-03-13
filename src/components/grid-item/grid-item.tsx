import { Card } from '@mui/material';
import { theme } from '../../App';
import Constants from '../../constants/constants';
import AnimatedPixelGrid from '../animated-pixel-grid/animated-pixel-grid';
import IAnimationConfig from '../../models/animation-config';
import ProjectInfo from '../project-info/project-info';
import { useContext, useEffect, useMemo } from 'react';
import { GridHoverContext } from '../../contexts/grid-hover-context';

interface IProps {
  config: IAnimationConfig;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function GridItem(props: IProps) {

  const { hoverState } = useContext(GridHoverContext);
  const isHovering = useMemo(() => hoverState?.find(x => x.key === props?.config?.id)?.isHovering ?? false, [hoverState?.find(x => x.key === props?.config?.id)?.isHovering]);

  return (
    <Card
      className='grid-item-card'
      onMouseEnter={() => props.onMouseEnter()}
      onMouseLeave={() => props.onMouseLeave()}
      elevation={2}
      onClick={() =>
        window.open(props?.config?.personalProjectLink, '_blank')
      }
      sx={{
        height: Constants.PixelHeight * Constants.GridColumns + 'px',
        width: Constants.PixelWidth * Constants.GridRows + 'px',
        maxHeight: Constants.PixelHeight * Constants.GridColumns + 'px',
        maxWidth: Constants.PixelWidth * Constants.GridRows + 'px',
        ":hover": {
            cursor: 'pointer',
            boxShadow: theme.shadows[5]
        }
      }}
    >
      {isHovering === false ? (
        <ProjectInfo config={Constants.DefaultConfig} />
      ) : (
        <AnimatedPixelGrid frames={props?.config?.frames} />
      )}
    </Card>
  );
}
