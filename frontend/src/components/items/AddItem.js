import React, { useState } from 'react';
import axios from 'axios';

const UploadItem = () => {
  const [title, setTitle] = useState('');
  const [college, setCollege] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('college', college);
      formData.append('seller', localStorage.getItem("uid"));
      images.forEach((image, index) => {
        formData.append('images', image); // Append images with the key 'images'
      });
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }
      const response = await axios.post("http://localhost:5001/api/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log('Product uploaded:', response.data);
      // Reset form after successful submission
      setTitle('');
      setDescription('');
      setPrice('');
      setImages([]);

      // Optionally, redirect to another page or show a success message
    } catch (error) {
      console.error('Error uploading product:', error);
      // Handle error (e.g., show error message)
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            College
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="college"
            type="text"
            placeholder="Enter College name"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
            Images
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-4">
          {images.map((file, index) => (
            <img key={index} src={URL.createObjectURL(file)} alt={`Image ${index}`} className="inline-block h-24 w-24 object-cover mr-2 mb-2" />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Upload Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadItem;
