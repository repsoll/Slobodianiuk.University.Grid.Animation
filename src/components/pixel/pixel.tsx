import Constants from '../../constants/constants';
import './pixel.css';

interface IProps {
  colour: string;
}

export default function Pixel(props: IProps) {
  return (
    <div
      className='pixel'
      style={{
        backgroundColor: props?.colour ?? 'white',
        height: Constants.PixelHeight + 'px',
        width: Constants.PixelWidth + 'px'
      }}
    />
  );
}
