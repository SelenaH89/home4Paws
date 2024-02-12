import { useEffect, useState } from 'react';
import DogsCards from '../components/DogsCards';

const NotForgotten = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/all-dogs')
      .then((res) => res.json())
      .then((data) => setDogs(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <DogsCards
        dogs={dogs}
        headLine="These dogs have been waiting a particularly long time."
      ></DogsCards>
    </div>
  );
};

export default NotForgotten;
