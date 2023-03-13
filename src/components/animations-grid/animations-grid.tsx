import Grid from '@mui/material/Grid';
import { useContext, useEffect, useState } from 'react';
import GridHoverContextProvider, {
  GridHoverContext,
} from '../../contexts/grid-hover-context';
import IAnimationConfig from '../../models/animation-config';
import { MainConfigLoaderService } from '../../services/config-loader';
import GridItem from '../grid-item/grid-item';

export default function AnimationsGrid() {
  const { hoverState, updateHover, updateState } = useContext(GridHoverContext);

  const [animationConfigs, setAnimationConfigs] = useState<IAnimationConfig[]>(
    []
  );

  useEffect(() => {
    const configLoaderService = new MainConfigLoaderService();
    const configs = configLoaderService.loadAllConfigs();

    updateState(configs);
    setAnimationConfigs(configs);
  }, []);

  const updateHoverForConfig = (value: boolean, config: IAnimationConfig) => {
    updateHover(value, config.id!);
  };

  const isHovering = (config: IAnimationConfig): boolean => {
    return hoverState?.find((x) => x.key === config.id)?.isHovering ?? false;
  };

  return (
    <Grid container spacing={2}>
      {animationConfigs.map((config) => (
        <Grid item key={config?.id}>
          <GridItem
            config={config}
            onMouseEnter={() => updateHoverForConfig(true, config)}
            onMouseLeave={() => updateHoverForConfig(false, config)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
