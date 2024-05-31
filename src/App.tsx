import './App.css';
import Container from './components/Container/Container';
import Ingredient from './components/Ingredient/Ingredient';
import {useState} from 'react';
import {nanoid} from 'nanoid';

const App = () => {
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

  const list = ingredients.map((ingredient) => {
    return (
      <Ingredient key={ingredient.id} img={`./${ingredient.name}.png`} name={ingredient.name} count={ingredient.count}
                  increaseIngredient={() => increaseIngredients(ingredient.id)}
                  deleteIngredient={() => deleteIngredients(ingredient.id)}/>
    );
  });

  return (
    <>
      <Container name={'Ingredients'}>
        {list}
      </Container>
    </>
  );
};

export default App;
