import { useMemo } from "react";
import { Item } from "../types/types";

export const useSortedPosts = (posts: Item[], sort: string) => {
  const sortedPosts = useMemo<Item[]>(() => {
    if (sort) {
      return [...posts].sort((a, b) =>
        a[sort as Exclude<keyof Item, "id" | "userId">].localeCompare(
          b[sort as Exclude<keyof Item, "id" | "userId">],
        ),
      );
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts: Item[], sort: string, query: string) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
