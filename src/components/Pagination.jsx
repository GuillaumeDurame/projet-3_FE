const Pagination = ({ setsPerPage, totalSets, paginate, currentPage }) => {
  const lastPage = Math.ceil(totalSets / setsPerPage);

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            className="page-link"
          >
            Précédent
          </button>
        </li>
        <li className="page-item">
          <button
            onClick={() =>
              currentPage < lastPage && paginate(currentPage + 1)
            }
            className="page-link"
          >
            Suivant
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
