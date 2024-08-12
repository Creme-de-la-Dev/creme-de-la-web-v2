// React
import React from "react";

// Components
import BlogPost from "../../components/Blog/BlogPost";
import { posts } from "./postsData";

const Blog = () => {
    return (
      <section className="min-h-screen container w-full flex flex-col items-center mx-auto p-5">
        <div className="bg-white h-full rounded-lg p-10">
          {posts.slice().reverse().map((post, index) => (
            <React.Fragment key={index}>
              <BlogPost
                title={post.title}
                date={post.date}
                image={post.image}
                content={post.content}
              />
              {index < posts.length - 1 && (
                <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    );
  };
  
  export default Blog;