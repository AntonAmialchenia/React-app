import React from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "./../types/types";
import MyButton from "./UI/Button/MyButton";

interface PostItemProps {
  post: Item;
  remove: (post: Item) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, remove }) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong className="post__title">
          {post.id}. {post.title}
        </strong>
        <div className="post__text">{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>
          Открыть
        </MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
