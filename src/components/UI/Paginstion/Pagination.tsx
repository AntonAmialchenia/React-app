import React, { FC } from "react";
import { getPagesArray } from "../../../utils/pages";

interface PaginationProps {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  page,
  totalPages,
  changePage,
}) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}>
          {p}
        </span>
      ))}
    </div>
  );
};
