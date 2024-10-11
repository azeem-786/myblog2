import React, { useState } from 'react';
import P1 from './../assets/Images/P1.jpg';
import P2 from './../assets/Images/P2.jpg';

const posts = [
  {
    id: 1,
    title: 'Curl Careem',
    imageUrl: P1,
    description: 'Product Details Brand: Dark and Lovely 5oz/142g New! More Hugging Time. Less Combing Time. Infused with coconut oil & shea butter. This product is perfect for naturally curly hair. Adds bounce and shine, softens curls, and reduces frizz. The formula is enriched with natural ingredients, making it gentle for everyday use.',
  },
  {
    id: 2,
    title: 'Curl Careem',
    imageUrl: P2,
    description: 'Product Details Brand: Dark and Lovely 5oz/142g New! More Hugging Time. Less Combing Time. Infused with coconut oil & shea butter. The nourishing formula leaves hair silky smooth and tangle-free. Perfect for curly hair types and for daily use. Makes styling easier and helps maintain healthy, hydrated hair.',
  },
  {
    id: 3,
    title: 'Curl Careem',
    imageUrl: P2,
    description: 'Product Details Brand: Dark and Lovely 5oz/142g New! More Hugging Time. Less Combing Time. Infused with coconut oil & shea butter. This product nourishes your curls deeply, adding shine and preventing breakage. It also helps tame frizz for a smooth, defined look.',
  },
  {
    id: 4,
    title: 'Curl Careem',
    imageUrl: P2,
    description: 'Product Details Brand: Dark and Lovely 5oz/142g New! More Hugging Time. Less Combing Time. Infused with coconut oil & shea butter. With continued use, your curls will appear healthier, bouncier, and more voluminous without feeling greasy or weighed down.',
  },
  {
    id: 5,
    title: 'Curl Careem',
    imageUrl: P1,
    description: 'Product Details Brand: Dark and Lovely 5oz/142g New! More Hugging Time. Less Combing Time. Infused with coconut oil & shea butter. The perfect curl cream for natural curls, this product provides the moisture and definition you need for your everyday hair routine.',
  },
  {
    id: 6,
    title: 'Curl Careem',
    imageUrl: P2,
    description: 'Product Details Brand: Dark and Lovely 5oz/142g New! More Hugging Time. Less Combing Time. Infused with coconut oil & shea butter. Get perfect curls without the frizz, with this rich and creamy formula that locks in moisture and defines your natural hair texture.',
  },
];

const SixPosts = () => {
  // State to manage which post is expanded
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleReadMore = (id) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle between true and false for the selected post
    }));
  };

  const truncateText = (text, limit) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">
                {expandedPosts[post.id]
                  ? post.description
                  : truncateText(post.description, 100)} {/* Truncate if not expanded */}
              </p>
              <button
                className="text-blue-500 hover:underline focus:outline-none"
                onClick={() => toggleReadMore(post.id)}
              >
                {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SixPosts;
