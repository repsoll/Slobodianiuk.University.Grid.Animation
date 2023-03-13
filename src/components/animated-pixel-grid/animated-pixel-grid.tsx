import { useEffect, useState } from 'react';
import Constants from '../../constants/constants';
import IFrame from '../../models/frame';
import PixelGrid from '../pixel-grid/pixel-grid';

interface IProps {
  frames: IFrame[];
}

export default function AnimatedPixelGrid(props: IProps) {
  const [frame, setFrame] = useState(0);

  const incrementFrame = () => {
    let newFrame = frame + 1;
    const framesCount = props?.frames?.length ?? 0;

    if (newFrame >= Constants.MaxTotalFrames || newFrame >= framesCount) {
      newFrame = 0;
    }

    setFrame(newFrame);
  };

  const getFrame = () => props?.frames?.find(x => x.frameNumber === frame);

  useEffect(() => {
    const interval = setInterval(
      () => incrementFrame(),
      Constants.FrameDelayMillis
    );
    return () => clearInterval(interval);
  }, [incrementFrame]);

  return (
    <PixelGrid
      frame={getFrame()}
      rows={Constants.GridRows}
      columns={Constants.GridColumns}
    />
  );
}
