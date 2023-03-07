import { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Skeleton from '../utils/Skeleton';

function Home() {
  const [pizzaData, setPizzaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://63fb4e4b7a045e192b66b718.mockapi.io/items')
      .then((respose) => respose.json())
      .then((data) => {
        setPizzaData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="contentTop">
        <Categories />
        <Sort />
      </div>
      <h2>Все пиццы</h2>
      <div className="contentItems">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzaData.map((pizzas) => (
              <PizzaBlock key={pizzas.id} {...pizzas} />
            ))}
      </div>
    </>
  );
}

export default Home;
