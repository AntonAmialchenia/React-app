import { useState } from 'react';
import PostForm from './components/PostForm';

import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';

import './styles/App.css';
import { Item } from './types/types';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState<Item[]>([
    { id: 1, title: 'Javasctipt', body: 'Javasctipt - язык программирования' },
    { id: 2, title: 'Python', body: 'Python - язык программирования' },
    { id: 3, title: 'Typescript', body: 'Typescript - язык программирования' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('Отработала функция сортед постс');
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort as Exclude<keyof Item, 'id'>].localeCompare(
          b[selectedSort as Exclude<keyof Item, 'id'>],
        ),
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const createPost = (newPost: Item) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: Item) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <MySelect
          defaultValue="Сортировка"
          value={selectedSort}
          onChange={sortPosts}
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={sortedPosts}
          title="Список постов 1"
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
function useMemo() {
  throw new Error('Function not implemented.');
}
