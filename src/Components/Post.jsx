// src/Post.js
import React from "react";

const Post = ({ title, content }) => {
  return (
    <div className="container mx-auto p-8">
      <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden ml-0 lg:grid-cols-3 gap-6">
        <h2 className="text-2xl font-bold mb-2">
          {title} The Art of Peeling Vegetables{" "}
        </h2>
        <p className="text-gray-700">
          {content} Peeling vegetables is a fundamental kitchen skill that can
          elevate both the presentation and taste of your dishes. Whether you’re
          preparing a hearty stew, a fresh salad, or a vibrant stir-fry, the
          right peeling technique can make a difference. Using a sharp peeler or
          knife, remove the outer skin of vegetables like carrots, potatoes, and
          cucumbers, revealing their colorful and nutritious interiors. Peeling
          not only enhances the visual appeal of your meals but also removes any
          dirt or pesticides. Additionally, some vegetables, such as zucchini
          and apples, can be enjoyed with their skin on for added texture and
          nutrients. Mastering the art of peeling is an essential step in
          creating delicious and visually appealing dishes.{" "}
        </p>
        <div>
          <button>Read More</button>
        </div>
      </div>

      {/* <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-0 lg:grid-cols-3 gap-6">
        <h2 className="text-2xl font-bold mb-2">
          {title} The Art of Peeling Vegetables{" "}
        </h2>
        <p className="text-gray-700">
          {content} Peeling vegetables is a fundamental kitchen skill that can
          elevate both the presentation and taste of your dishes. Whether you’re
          preparing a hearty stew, a fresh salad, or a vibrant stir-fry, the
          right peeling technique can make a difference. Using a sharp peeler or
          knife, remove the outer skin of vegetables like carrots, potatoes, and
          cucumbers, revealing their colorful and nutritious interiors. Peeling
          not only enhances the visual appeal of your meals but also removes any
          dirt or pesticides. Additionally, some vegetables, such as zucchini
          and apples, can be enjoyed with their skin on for added texture and
          nutrients. Mastering the art of peeling is an essential step in
          creating delicious and visually appealing dishes.{" "}
        </p>
        <div>
          <button>Read More</button>
        </div>
      </div> */}
    </div>
  );
};

export default Post;
