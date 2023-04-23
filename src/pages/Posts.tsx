import { useEffect, useState, FC, useRef, RefObject } from "react";

import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/Button/MyButton";

import { Item } from "../types/types";

import { usePosts } from "../hooks/usePosts";
import { PostService } from "../API/PostServise";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { Pagination } from "../components/UI/Paginstion/Pagination";

import "../styles/App.css";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/Select/MySelect";

export const Posts: FC = () => {
  const [posts, setPosts] = useState<Item[]>([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const lastElement = useRef() as RefObject<HTMLDivElement>;

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      if (limit) {
        setTotalPages(getPageCount(totalCount, limit));
      }
    },
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage((prevState) => prevState + 1);
  });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost: Item) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const removePost = (post: Item) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page: number) => {
    setPage(page);
    fetchPosts(...([limit, page] as const));
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
      <MySelect
        value={String(limit)}
        onChange={(value) => setLimit(Number(value))}
        defaultValue="Количество элементов на странице"
        options={[
          { value: "5", name: "5" },
          { value: "10", name: "10" },
          { value: "25", name: "25" },
          { value: "-1", name: "Показать все" },
        ]}
      />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов 1"
      />
      <div
        ref={lastElement}
        style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
      />
      {isPostsLoading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
          <Loader />
        </div>
      )}

      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
};
