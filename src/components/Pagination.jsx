const Pagination = ({ setsPerPage, totalSets, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalSets / setsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a onClick={() => currentPage > 1 && paginate(currentPage - 1)} href="#" className="page-link">
              Précédent
            </a>
          </li>
          <li className="page-item">
            <a onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)} href="" className="page-link">
              Suivant
            </a>
          </li>
        </ul>
      </nav>
    );
  };
export default Pagination;
