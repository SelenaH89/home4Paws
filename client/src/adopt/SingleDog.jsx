import { useLoaderData } from 'react-router-dom';

const SingleDog = () => {
  const { _id, name, imageUrl } = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
      <img
        src={imageUrl}
        alt=""
        className="h-96
      "
      />
      <h2>{name}</h2>
    </div>
  );
};

export default SingleDog;
