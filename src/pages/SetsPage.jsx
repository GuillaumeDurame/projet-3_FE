import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import apiHandler from "../utils/apiHandler";

const SetsPage = () => {
  const [sets, setSets] = useState([]);
  const [totalSets, setTotalSets] = useState(25);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const setsPerPage = 25;

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/sets?page=${currentPage}&limit=${setsPerPage}`
      )
      .then((response) => {
        setSets(response.data.sets);
        setTotalSets(response.data.totalSets);
      })
      .catch((error) => {
        console.error(`${error}`);
      });

    apiHandler
      .getWishlist()
      .then((response) => {
        setWishlist(response.data);
      })
      .catch((error) => {
        console.error(`${error}`);
      });
  }, [currentPage]);

  const addToWishlist = (set) => {
    const isInWishlist = wishlist.some(
      (wishlistSet) => wishlistSet._id === set._id
    );

    const action = isInWishlist ? "removeFromWishlist" : "addToWishlist";

    apiHandler, action
        .then(() => {
          if (isInWishlist) {
            setWishlist(
              wishlist.filter((wishlistSet) => wishlistSet._id !== set._id)
            );
          } else {
            setWishlist([...wishlist, set]);
          }
        })
        .catch((error) => {
          console.error(`${error}`);
        });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Liste des Sets</h1>
      {sets.map((set) => (
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
        totalSets={totalSets}
        paginate={paginate}
        currentPage={currentPage}
      />
      <h1>Liste de souhaits</h1>
      {wishlist.map((set) => (
        <div key={set._id}>
          <h2>{set.name}</h2>
          <p>Année: {set.year}</p>
          <p>Nombre de pièces: {set.num_parts}</p>
          <img src={set.imag_url} alt={set.name} />
        </div>
      ))}
    </div>
  );
};

export default SetsPage;
