import { useState } from "react";

const usePagination = (itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  /**
   *  Just for demo purposes...
   *  This emulates a pagination on the FE. This layer should be added on the BE in a real app.
   */
  const paginate = (items: unknown[]) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  return {
    currentPage,
    handlePageChange,
    paginate,
  };
};

export default usePagination;
