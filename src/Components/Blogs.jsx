import React from 'react';
import P1 from './../assets/Images/P1.jpg';
import P2 from './../assets/Images/P2.jpg';
import P3 from './../assets/Images/P3.png';
import product1 from './../assets/Images/product1.jpg';


const posts = [
  {
    id: 1,
    title: 'Dark and Lovely Curl Cream',
    imageUrl: product1,
    description: 'Product Details Brand: Dark and Lovely 5oz/142g New! More Hugging Time...',
  },
  {
    id: 2,
    title: 'Shea Moisture Olive & Green Tea Bath, Body & Massage Oil',
    imageUrl: P2,
    description: 'Product Details Brand: Shea Moisture 8oz/236ml',
  },
  {
    id: 3,
    title: 'Shea Moisture Moringa & Avocado Power Greens Reconstructor',
    imageUrl: P3,
    description: 'Brand: Shea Moisture Unveil your hair’s full beauty potential!',
  },
  {
    id: 4,
    title: 'Dark and Lovely Curl Cream',
    imageUrl: P1,
    description: 'Product Details Brand: Dark and Lovely 5oz/142g New! More Hugging Time...',
  },
  {
    id: 5,
    title: 'Dark and Lovely Curl Cream',
    imageUrl: P2,
    description: 'Product Details Brand: Dark and Lovely 5oz/142g New! More Hugging Time...',
  },
  {
    id: 6,
    title: 'Dark and Lovely Curl Cream',
    imageUrl: P3,
    description: 'Product Details Brand: Dark and Lovely 5oz/142g New! More Hugging Time...',
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                onClick={() => alert(`Buying ${post.title}`)} // Example action, replace with real functionality
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
