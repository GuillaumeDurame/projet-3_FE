import { useState, useEffect } from 'react';
import axios from 'axios';

const SetsPage = () => {
  const [sets, setSets] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/sets')
      .then(response => {
        setSets(response.data);
      })
      .catch(error => {
        console.error(`${error}`);
      });
  }, []);

  const addToWishlist = (set) => {
    setWishlist([...wishlist, set]);
  };

  return (
    <div>
      <h1>Liste des Sets</h1>
      {sets.map(set => (
        <div key={set._id}>
          <h2>{set.name}</h2>
          <p>Année: {set.year}</p>
          <p>Nombre de pièces: {set.num_parts}</p>
          <img src={set.img_url} alt={set.name} />
          <button onClick={() => addToWishlist(set)}>Ajouter à la liste de souhaits</button>
        </div>
      ))}
      <h1>Liste de souhaits</h1>
      {wishlist.map(set => (
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