type Props = {
    itemsPerPage: number,
    handleItemsPerPage: React.ChangeEventHandler<HTMLSelectElement>
};

const PaginationSelector = ({itemsPerPage, handleItemsPerPage}:Props) => {
  return (
    <>
      <select value={itemsPerPage} onChange={handleItemsPerPage}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
      </select>
    </>
  );
};

export default PaginationSelector;
