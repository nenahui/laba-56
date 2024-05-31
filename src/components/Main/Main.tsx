import {useState} from 'react';
import {nanoid} from 'nanoid';
import Ingredient from '../Ingredient/Ingredient';
import Meat from '../Burger/Meat/Meat';
import Cheese from '../Burger/Cheese/Cheese';
import Salad from '../Burger/Salad/Salad';
import Beacon from '../Burger/Beacon/Beacon';
import Container from '../Container/Container';
import Burger from '../Burger/Burger';

const Main = () => {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0, id: nanoid()},
    {name: 'Cheese', count: 0, id: nanoid()},
    {name: 'Salad', count: 0, id: nanoid()},
    {name: 'Beacon', count: 0, id: nanoid()},
  ]);

  const increaseIngredients = (id: string) => {
    setIngredients((prevState) =>
      prevState.map((ingredient) =>
        ingredient.id === id
          ? {...ingredient, count: ingredient.count + 1}
          : ingredient
      )
    );
  };

  const deleteIngredients = (id: string) => {
    setIngredients((prevState) =>
      prevState.map((ingredient) =>
        ingredient.id === id && ingredient.count > 0
          ? {...ingredient, count: ingredient.count - 1}
          : ingredient
      )
    );
  };

  const ingredientList = ingredients.map((ingredient) => {
    return (
      <Ingredient key={ingredient.id} img={`./${ingredient.name}.png`} name={ingredient.name} count={ingredient.count}
                  increaseIngredient={() => increaseIngredients(ingredient.id)}
                  deleteIngredient={() => deleteIngredients(ingredient.id)}/>
    );
  });

  const burgerList = ingredients.map((ingredient => {
    if (ingredient.name === 'Meat' && ingredient.count) {
      return new Array(ingredient.count).fill(null).map((_, index) => <Meat key={index}/>);
    }
    if (ingredient.name === 'Cheese') {
      return new Array(ingredient.count).fill(null).map((_, index) => <Cheese key={index}/>);
    }
    if (ingredient.name === 'Salad') {
      return new Array(ingredient.count).fill(null).map((_, index) => <Salad key={index}/>);
    }
    if (ingredient.name === 'Beacon') {
      return new Array(ingredient.count).fill(null).map((_, index) => <Beacon key={index}/>);
    }
  }));

  return (
    <>
      <Container name={'Ingredients'}>
        {ingredientList}
      </Container>

      <Container name={'Burger'}>
        <Burger>
          {burgerList}
        </Burger>
      </Container>
    </>
  );
};

export default Main;