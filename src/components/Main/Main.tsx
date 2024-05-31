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
    {name: 'Meat', count: 0, price: 80, id: nanoid()},
    {name: 'Cheese', count: 0, price: 50, id: nanoid()},
    {name: 'Salad', count: 0, price: 10, id: nanoid()},
    {name: 'Beacon', count: 0, price: 60, id: nanoid()},
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
    if (ingredient.name === 'Meat') {
      const beaconList = [];
      for (let i = 0; i < ingredient.count; i++) {
        beaconList.push(<Meat/>);
      }
      return beaconList;
    }

    if (ingredient.name === 'Cheese') {
      const beaconList = [];
      for (let i = 0; i < ingredient.count; i++) {
        beaconList.push(<Cheese/>);
      }
      return beaconList;
    }

    if (ingredient.name === 'Salad') {
      const beaconList = [];
      for (let i = 0; i < ingredient.count; i++) {
        beaconList.push(<Salad/>);
      }
      return beaconList;
    }

    if (ingredient.name === 'Beacon') {
      const beaconList = [];
      for (let i = 0; i < ingredient.count; i++) {
        beaconList.push(<Beacon/>);
      }
      return beaconList;
    }
  }));

  const totalPrice = () => {
    const total = ingredients.reduce((acc, ingredient) => acc + ingredient.count * ingredient.price, 30);
    console.log(total);
    return total;
  };

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
      <p>Price: {totalPrice()}</p>
    </>
  );
};

export default Main;