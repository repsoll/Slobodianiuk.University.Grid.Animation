import React, { useState } from 'react';
import IAnimationConfig from '../models/animation-config';

interface IHoveredItem {
  key: string;
  isHovering: boolean;
}

interface IGridHoverContext {
  hoverState: IHoveredItem[];
  updateHover: (value: boolean, key: string) => void;
  updateState: (configs: IAnimationConfig[]) => void;
}

export const GridHoverContext = React.createContext<IGridHoverContext>({
  hoverState: [],
  updateHover: (value: boolean, key: string) => {},
  updateState: (configs: IAnimationConfig[]) => {},
});

export default function GridHoverContextProvider(
  props: React.PropsWithChildren
) {
  const [state, setState] = useState<IHoveredItem[]>([]);

  const updateHover = (value: boolean, key: string) => {
    const newState = [ ...state.filter((x) => x.key !== key) ];

    newState.forEach((x) => (x.isHovering = false));
    newState.push({
      isHovering: value,
      key,
    });

    setState(newState);
  };

  const updateState = (configs: IAnimationConfig[]) => {
    const newState = configs.map(x => ({
        isHovering: false,
        key: x?.id
    }) as IHoveredItem);
    setState(newState);
  }

  const value = { hoverState: state, updateHover, updateState: updateState };

  return (
    <GridHoverContext.Provider value={value}>
      {props.children}
    </GridHoverContext.Provider>
  );
}
