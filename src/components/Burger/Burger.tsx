import React from 'react';

const Burger: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={'Burger'}>
      <div className={'BreadTop'}>
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
        {children}
        <div className="BreadBottom"></div>
      </div>
    </div>
  );
};

export default Burger;