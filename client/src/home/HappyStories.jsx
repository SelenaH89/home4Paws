import { Card } from 'flowbite-react';
import { useEffect, useState } from 'react';

const HappyStories = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/all-dogs')
      .then((res) => res.json())
      .then((data) => setDogs(data.slice(0, 5)));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text text-5xl font-bold text-center">Happy Stories</h2>
      <div className="grid gap-8 my-14 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {dogs.map((dog) => (
          <Card href="#" className="max-w-sm" key={dog.id}>
            <img
              src={dog.imageUrl}
              alt={dog.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {dog.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {dog.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HappyStories;
