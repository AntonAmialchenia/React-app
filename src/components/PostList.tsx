import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
