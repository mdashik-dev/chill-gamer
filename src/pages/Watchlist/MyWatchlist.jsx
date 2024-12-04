import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const MyWatchlist = () => {
  const { user } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      fetchWatchlistData(user?.uid);
    }
  }, [user]);

  const fetchWatchlistData = (userId) => {

    // setWatchlist();
  };

  const handleDelete = (gameId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to remove this game from your watchlist!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {

        
        const updatedWatchlist = watchlist.filter((game) => game.id !== gameId);
        setWatchlist(updatedWatchlist);


        Swal.fire(
          "Removed!",
          "The game has been removed from your watchlist.",
          "success"
        );
      }
    });
  };

  const fakeData = [
    {
      "id": "game1",
      "title": "Game Title 1",
      "coverImage": "https://example.com/cover1.jpg",
      "addedOn": "2024-12-01T12:34:56Z"
    },
    {
      "id": "game2",
      "title": "Game Title 2",
      "coverImage": "https://example.com/cover2.jpg",
      "addedOn": "2024-12-02T14:23:45Z"
    },
    {
      "id": "game3",
      "title": "Game Title 3",
      "coverImage": "https://example.com/cover3.jpg",
      "addedOn": "2024-12-03T16:45:10Z"
    }
  ]
  

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Watchlist</h2>
      {fakeData.length === 0 ? (
        <p className="text-gray-500">
          Your watchlist is empty. Add games from the review details page.
        </p>
      ) : (
        <table className="table table-zebra w-full bg-white">
          <thead>
            <tr>
              <th>Game Cover</th>
              <th>Game Title</th>
              <th>Added On</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((game) => (
              <tr key={game.id}>
                <td>
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td>{game.title}</td>
                <td>{new Date(game.addedOn).toLocaleDateString()}</td>
                <td>
                  <button
                    onClick={() => handleDelete(game.id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyWatchlist;
