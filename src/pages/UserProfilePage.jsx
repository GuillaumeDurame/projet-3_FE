import { useState, useEffect, useContext } from "react";
import apiHandler from "../utils/apiHandler";
import { AuthContext } from "../contexts/AuthContext";

const UserProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    apiHandler
      .getWishlist()
      .then((response) => {
        setWishlist(response.data);
      })
      .catch((error) => {
        console.error(`${error}`);
      });
  }, []);

  const createWishlist = () => {
    apiHandler
      .createWishlist({ userId: user._id })
      .then(() => {
        setWishlist([]);
      })
      .catch((error) => {
        console.error(`${error}`);
      });
  };

  const removeFromWishlist = (setId) => {
    apiHandler
      .removeFromWishlist("sets", setId)
      .then(() => {
        setWishlist({
          ...wishlist,
          sets: wishlist.sets.filter((set) => set._id !== setId),
        });
      })
      .catch((error) => {
        console.error(`${error}`);
      });
  };

  const clearWishlist = () => {
    apiHandler
      .clearWishlist()
      .then(() => {
        setWishlist({});
      })
      .catch((error) => {
        console.error(`${error}`);
      });
  };

  return (
    <div>
      <h1>User Profile</h1>
      <h2>
        <u>Email:</u> {user.email}
      </h2>
      <h2>
        <u>Description:</u> {user.description}
      </h2>
      <h1>My Wishlist</h1>
      {wishlist.sets?.map((set) => (
        <div key={set._id}>
          <h2>{set.name}</h2>
          <p>Year: {set.year}</p>
          <p>Number of parts: {set.num_parts}</p>
          <img src={set.img_url} alt={set.name} />
          <button onClick={() => removeFromWishlist(set._id)}>
            Remove from wishlist
          </button>
        </div>
      ))}
      <button onClick={createWishlist}>Create Wishlist</button>
      <button onClick={clearWishlist}>Clear wishlist</button>
    </div>
  );
};

export default UserProfilePage;
