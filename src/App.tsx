import { useState } from 'react';
import PostForm from './components/PostForm';

import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';

import './styles/App.css';
import { Item } from './types/types';

function App() {
  const [posts, setPosts] = useState<Item[]>([
    { id: 1, title: 'Javasctipt', body: 'Javasctipt - язык программирования' },
    { id: 2, title: 'Python', body: 'Python - язык программирования' },
    { id: 3, title: 'Typescript', body: 'Typescript - язык программирования' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const createPost = (newPost: Item) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: Item) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
    console.log(sort);

    if (sort === 'title' || sort === 'body') {
      setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
      console.log(posts);
    }
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <MySelect
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
          value={selectedSort}
          onChange={sortPosts}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список постов 1" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
