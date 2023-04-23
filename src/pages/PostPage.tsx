import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { PostService } from "../API/PostServise";
import { Item, Comment } from "../types/types";
import { Loader } from "../components/UI/Loader/Loader";

export const PostPage: FC = () => {
  const params = useParams();

  const [comments, setComments] = useState<Comment[]>([]);
  const [post, setPost] = useState<Item>(Object);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const { data } = await PostService.getById(id);
    setPost(data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const { data } = await PostService.getCommentsByPostId(id);
    setComments(data);
  });

  useEffect(() => {
    fetchPostById(Number(params.id));
    fetchComments(Number(params.id));
  }, []);

  return (
    <div>
      <h1>Перешли на страницу поста с ID = {params.id} </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            {post.id}. {post.title}
          </div>
          <div>{post.body}</div>
        </>
      )}
      <h2> Комментарии</h2>
      {isComLoading ? (
        <Loader />
      ) : (
        comments.map((com) => (
          <div key={com.id} style={{ marginTop: 15 }}>
            <div>
              {com.id}. {com.body}
            </div>
            <div>{com.name}</div>
            <div>{com.email}</div>
          </div>
        ))
      )}
    </div>
  );
};
