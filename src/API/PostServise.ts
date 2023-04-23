import axios from "axios";
import { Item } from "../types/types";

export const PostService = {
  async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      },
    );

    return response;
  },

  async getById(id: number) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/` + id,
    );

    return response;
  },

  async getCommentsByPostId(id: number) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );

    return response;
  },
};
