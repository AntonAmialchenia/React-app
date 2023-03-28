import { useState, useMemo } from "react";
import PostForm from "./components/PostForm";

import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";

import "./styles/App.css";
import { Item } from "./types/types";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState<Item[]>([
    { id: 1, title: "Javasctipt", body: "Javasctipt - язык программирования" },
    { id: 2, title: "Python", body: "Python - язык программирования" },
    { id: 3, title: "Typescript", body: "Typescript - язык программирования" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    console.log("Отработала функция сортед постс");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort as Exclude<keyof Item, "id">].localeCompare(
          b[filter.sort as Exclude<keyof Item, "id">],
        ),
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost: Item) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: Item) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton styles={{ marginTop: 20 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов 1"
      />
    </div>
  );
}

export default App;
