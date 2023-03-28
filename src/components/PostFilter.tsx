import React, { SetStateAction, Dispatch, FC } from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

interface PostFilterProps {
  filter: {
    sort: string;
    query: string;
  };
  setFilter: Dispatch<SetStateAction<{ sort: string; query: string }>>;
}

const PostFilter: FC<PostFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <MySelect
        defaultValue="Сортировка"
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
