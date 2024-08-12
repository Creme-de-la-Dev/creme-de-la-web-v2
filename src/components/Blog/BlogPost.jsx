import React from "react";

const BlogPost = ({ title, date, image, content }) => {
  return (
    <div className="text-cdln-blue-800 flex flex-col gap-5">
      <h1 className="text-5xl font-semibold text-cdln-blue-900">{title}</h1>
      <h6 className="text-xl">{date}</h6>
      <img src={image} className="rounded-lg border-2 w-72 md:w-96 max-w-lg" alt={title} />
      <p className="text-xl font-medium">{content}</p>
    </div>
  );
};

export default BlogPost;