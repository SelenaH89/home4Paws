import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageDogs = () => {
  const [allDogs, setAllDogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/all-dogs')
      .then((res) => res.json())
      .then((data) => setAllDogs(data))
      .catch((error) => console.error('Error fetching dogs:', error));
  }, []);

  //delete dog
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/dog/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then(() => {
        // Remove the deleted dog from allDogs state
        setAllDogs((prevDogs) => prevDogs.filter((dog) => dog._id !== id));
        alert('Dog is deleted successfully');
      })
      .catch((error) => console.error('Error deleting dog:', error));
  };

  const getFirstSentence = (text) => {
    const firstSentence = text.split(', ')[0];
    return firstSentence;
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Dogs</h2>
      {/* Table for dog data */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
              >
                No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
              >
                Dog name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
              >
                Age
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
              >
                Gender
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
              >
                Breed
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
              >
                Size
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider"
              >
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:divide-gray-700 dark:bg-gray-800">
            {Array.isArray(allDogs) &&
              allDogs.map((dog, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {dog.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {dog.age === 1 ? `${dog.age} year` : `${dog.age} years`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {dog.gender}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {dog.breed}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {dog.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {getFirstSentence(dog.description)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      className="text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                      to={`/admin/dashboard/edit-dogs/${dog._id}`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(dog._id)}
                      className="px-4 py-1 text-white font-semibold hover:bg-red-600 rounded-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDogs;
