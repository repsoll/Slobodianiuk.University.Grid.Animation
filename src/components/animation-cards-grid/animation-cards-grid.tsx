import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import IAnimationConfig from '../../models/animation-config';
import { MainConfigLoaderService } from '../../services/config-loader';
import { removeHover } from '../../store/grid-hover-slice';
import GridItem from '../grid-item/grid-item';

export default function AnimationCardsGrid() {
  const dispatch = useAppDispatch();
  const handleRemoveHover = () => dispatch(removeHover());

  const [animationConfigs, setAnimationConfigs] = useState<IAnimationConfig[]>(
    []
  );

  useEffect(() => {
    const configLoaderService = new MainConfigLoaderService();
    const configs = configLoaderService.loadAllConfigs();

    setAnimationConfigs(configs);
  }, []);

  return (
    <Grid container spacing={2} onMouseLeave={() => handleRemoveHover()}>
      {animationConfigs.map((config) => (
        <Grid item key={config?.id}>
          <GridItem config={config} />
        </Grid>
      ))}
    </Grid>
  );
}
