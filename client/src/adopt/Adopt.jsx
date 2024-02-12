import { Card } from 'flowbite-react';
import { useEffect, useState } from 'react';

const Adopt = () => {
  const [dogs, setDogs] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/all-dogs')
      .then((res) => res.json())
      .then((data) => setDogs(data));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text text-5xl font-bold text-center">
        Discover Your Perfect Companion: Explore Our Selection of Rescue Dogs
        Ready for Adoption
      </h2>

      <div className="grid gap-8 my-14 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {dogs.map((dog, index) => (
          <Card
            href="#"
            className={`max-w-sm relative ${
              focusedIndex === index ? 'shadow-lg' : ''
            }`}
            key={dog.id}
            onMouseEnter={() => setFocusedIndex(index)}
            onMouseLeave={() => setFocusedIndex(null)}
          >
            <img
              src={dog.imageUrl}
              alt=""
              className="w-full h-64 object-cover rounded-t-lg"
            />
            {focusedIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <button className="bg-red-500 text-black py-2 px-4 rounded">
                  Details
                </button>
              </div>
            )}

            <div className="p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-700">
                {dog.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-black">
                Age: {dog.age}
              </p>
              <p className="font-normal text-gray-700 dark:text-black">
                Gender: {dog.gender}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Adopt;
