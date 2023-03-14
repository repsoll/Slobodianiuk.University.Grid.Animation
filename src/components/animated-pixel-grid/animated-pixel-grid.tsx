import { useEffect, useState } from 'react';
import Constants from '../../constants/constants';
import IAnimationConfig from '../../models/animation-config';
import PixelGrid from '../pixel-grid/pixel-grid';

interface IProps {
  config: IAnimationConfig;
  animate: boolean;
}

export default function AnimatedPixelGrid(props: IProps) {
  const [frame, setFrame] = useState(-1);

  const incrementFrame = () => {
    let newFrame = frame + 1;
    const framesCount = props?.config?.frames?.length ?? 0;

    if (newFrame >= Constants.MaxTotalFrames || newFrame >= framesCount) {
      newFrame = 0;
    }

    setFrame(newFrame);
  };

  const getFrame = () => {

    if (frame === -1) {
      return props?.config?.header;
    }

    return props?.config?.frames?.find((x) => x.frameNumber === frame);
  }

  useEffect(() => {
    if (props?.animate === false) {
      setFrame(-1);
      return;
    }

    const interval = setInterval(
      () => incrementFrame(),
      Constants.FrameDelayMillis
    );
    return () => clearInterval(interval);
  }, [incrementFrame, props?.animate]);

  return (
    <PixelGrid
      frame={getFrame()}
      rows={Constants.GridRows}
      columns={Constants.GridColumns}
    />
  );
}
