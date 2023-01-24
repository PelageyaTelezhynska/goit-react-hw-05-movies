import PropTypes from 'prop-types';
import Pagination from 'react-responsive-pagination';
import './Paginate.css';

export const Paginate = ({ page, setPage, totalPages }) => {
  function handlePageChange(page) {
    setPage(page);
  }
  return (
    <Pagination
      total={totalPages}
      current={page}
      onPageChange={currentPage => handlePageChange(currentPage)}
      maxWidth={350}
    />
  );
};

Paginate.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  totalPages: PropTypes.number,
};
