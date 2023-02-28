import "./App.css";
import { useEffect, useState } from "react";
import PaginationComponent from "./components/PaginationComponent";
import PaginationSelector from "./components/PaginationSelector";

interface IPosts {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [items, setItems] = useState<IPosts[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pages: number = Math.ceil(items.length / itemsPerPage);
  const startIndex: number = currentPage * itemsPerPage;
  const endtIndex: number = startIndex + itemsPerPage;
  const currentIndex: IPosts[] = items.slice(startIndex, endtIndex);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => res.json())
        .then((data) => data);
      setItems(result);
    };
    fetchData();
  }, []);

  const handleCurrentPage = (e: React.FormEvent<HTMLButtonElement>) =>
    setCurrentPage(Number(e.currentTarget.value));

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.currentTarget.value));
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);

  return (
    <div className="App">
      <h1>Página de Paginação</h1>
      <div>
        <PaginationSelector
          itemsPerPage={itemsPerPage}
          handleItemsPerPage={handleItemsPerPage}
        />
      </div>

      <>
        <PaginationComponent
          handleCurrentPage={handleCurrentPage}
          currentPage={currentPage}
          pages={pages}
        />
      </>

      <div className="items_container">
        {currentIndex.map((item) => (
          <div key={item.id} className="item">
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.completed}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
