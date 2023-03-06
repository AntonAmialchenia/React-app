import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { Item } from '../types/types';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

interface PostFormProps {
    create: (newPost:Item) => void
}

const PostForm: React.FC<PostFormProps> = ({create}) => {
  const [post, setPost] = useState<Item>({ title: '', body: '' });
  const addNewPost = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newPost = { ...post, id: Date.now() };
    create(newPost)
    setPost({
      title: '',
      body: '',
    });
  };

  const onChangeInputTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: event.target.value });
  };

  const onChangeInputBody = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, body: event.target.value });
  };

  return (
    <form style={{marginBottom:20}}>
      <MyInput
        value={post.title}
        onChange={onChangeInputTitle}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={onChangeInputBody}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
