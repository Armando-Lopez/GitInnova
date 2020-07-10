import React from "react";

const Pagination = ({ reposLength, reposPerPage, currentPage }) => {
  const pages = Math.ceil(reposLength / reposPerPage);

  return (
    <ul className="pagination">
      {[...Array(pages)].map((p, i) => {
        let page = i + 1;
        return (
          <li
            key={page}
            className={`waves-effect ${page === currentPage && "active"} `}
          >
            <a href={`#${page}`}>{page}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
