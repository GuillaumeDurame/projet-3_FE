import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";

const SetsPage = () => {
  const [sets, setSets] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const setsPerPage = 25;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/sets?page=${currentPage}`)
      .then((response) => {
        setSets(response.data);
      })
      .catch((error) => {
        console.error(`${error}`);
      });
  }, [currentPage]);

  const addToWishlist = (set) => {
    setWishlist([...wishlist, set]);
  };
  const indexOfLastSet = currentPage * setsPerPage;
  const indexOfFirstSet = indexOfLastSet - setsPerPage;
  const currentSets = sets.slice(indexOfFirstSet, indexOfLastSet);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Liste des Sets</h1>
      {currentSets.map((set) => (
        <div key={set._id}>
          <h2>{set.name}</h2>
          <p>Année: {set.year}</p>
          <p>Nombre de pièces: {set.num_parts}</p>
          <img src={set.img_url} alt={set.name} />
          <br />
          <button onClick={() => addToWishlist(set)}>
            Ajouter à la liste de souhaits
          </button>
        </div>
      ))}
      <Pagination
        setsPerPage={setsPerPage}
        totalSets={sets.length}
        paginate={paginate}
      />
      <h1>Liste de souhaits</h1>
      {wishlist.map((set) => (
        <div key={set._id}>
          <h2>{set.name}</h2>
          <p>Année: {set.year}</p>
          <p>Nombre de pièces: {set.num_parts}</p>
          <img src={set.img_url} alt={set.name} />
        </div>
      ))}
    </div>
  );
};

export default SetsPage;
