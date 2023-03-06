import React from 'react';
import { Item } from './../types/types';
import MyButton from './UI/button/MyButton';

interface PostItemProps {
    number: number
    post: Item
    remove: (post:Item) => void
}

const PostItem:React.FC<PostItemProps> = ({post, number, remove}) => {
  return (
    <div className="post">
      <div className="post__content">
        <div className="post__title">{number}.  {post.title}</div>
        <div className="post__text">{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
