import React from 'react';
import './Ingredient.css';

interface IIngredientProps {
  name: string;
  img: string;
  count: number;
  increaseIngredient: () => void;
  deleteIngredient: () => void;
}

const Ingredient: React.FC<IIngredientProps> = ({name, img, count, increaseIngredient, deleteIngredient}) => {
  return (
    <div className={'ingredient-block'}>
      <img onClick={increaseIngredient} className={'ingredient-image'} src={img} alt={name}/>
      <p>{name}</p>
      <span>x{count}</span>
      <button onClick={deleteIngredient}>&times;</button>
    </div>
  );
};

export default Ingredient;