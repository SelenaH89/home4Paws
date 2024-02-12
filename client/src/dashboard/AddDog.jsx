import { useState } from 'react';

const NewDogForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    breed: '',
    size: '',
    description: '',
    imageUrl: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePictureChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      imageUrl: e.target.files[0], // Update imageUrl instead of picture
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/upload-dog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add dog');
      }

      alert('Dog successfully added');
    } catch (error) {
      console.error('Error adding dog:', error);
      alert('Failed to add dog');
      e.target.reset();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 space-y-2">
      <label htmlFor="name" className="text-sm font-bold text-gray-600">
        Name of the dog:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
        required
      />

      <label htmlFor="age" className="text-sm font-bold text-gray-600">
        Age :
      </label>
      <input
        type="number"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
        min="0"
        max="20"
        required
      />

      <label className="text-sm font-bold text-gray-600">Gender:</label>
      <div className="flex items-center">
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={handleInputChange}
          className="mr-2"
          required
        />
        <label htmlFor="male" className="mr-4">
          Male
        </label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={handleInputChange}
          className="mr-2"
        />
        <label htmlFor="female">Female</label>
      </div>

      <label htmlFor="breed" className="text-sm font-bold text-gray-600">
        Breed:
      </label>
      <select
        id="breed"
        name="breed"
        value={formData.breed}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
        required
      >
        <option value="">Select breed</option>
        <option value="labrador">Labrador</option>
        <option value="poodle">Poodle</option>
        <option value="bulldog">Bulldog</option>
        <option value="bulldog">German Shepherd</option>
        <option value="bulldog">Golden Retriever</option>
        <option value="bulldog">Siberian Husky</option>
        <option value="bulldog">Beagle</option>
        <option value="bulldog">Mixed</option>
      </select>

      <label htmlFor="size" className="text-sm font-bold text-gray-600">
        Size:
      </label>
      <select
        id="size"
        name="size"
        value={formData.size}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
        required
      >
        <option value="">Select size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <label htmlFor="description" className="text-sm font-bold text-gray-600">
        Description:
      </label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
        required
      />

      <label htmlFor="picture" className="text-sm font-bold text-gray-600">
        Upload Picture:
      </label>
      <input
        type="file"
        id="imageUrl"
        name="picture"
        onChange={handlePictureChange}
        className="p-2 border border-gray-300 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Dog
      </button>
    </form>
  );
};

export default NewDogForm;
