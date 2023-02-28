import "./PaginationComponent.css";

type Props = {
  handleCurrentPage: React.MouseEventHandler<HTMLButtonElement>;
  currentPage: number;
  pages: number;
};

const PaginationComponent = ({
  handleCurrentPage,
  currentPage,
  pages,
}: Props) => {
  return (
    <div>
      {Array.from(Array(pages), (item, index) => (
        <button
          className={`pagination_button ${
            index === currentPage ? "page_actual" : ""
          }`}
          key={index}
          value={index}
          onClick={handleCurrentPage}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationComponent;
