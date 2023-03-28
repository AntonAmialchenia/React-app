import React from "react";
import PostItem from "./PostItem";
import { Item } from "./../types/types";

interface PostListProps {
  posts: Item[];
  title: string;
  remove: (post: Item) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;
