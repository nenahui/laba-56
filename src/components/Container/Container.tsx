import React, {PropsWithChildren} from 'react';
import './Container.css';

interface IContainerProps extends PropsWithChildren {
  name: string;
}

const Container: React.FC<IContainerProps> = ({name, children}) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      {children}
    </div>
  );
};

export default Container;