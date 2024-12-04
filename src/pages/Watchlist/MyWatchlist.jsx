import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData } from "react-router-dom";

const MyWatchlist = () => {
  const { user } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);
  const loaderData = useLoaderData();

  useEffect(() => {
    const data = JSON.parse(loaderData);
    if (data?.length > 0) {
      setWatchlist(data);
    }
  }, [loaderData]);

  const deleteWatchListItem = async () => {
    fetch(`http://localhost:3000/watchlist/${user?.email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount === 1) {
          return true;
        } else {
          return false;
        }
      });
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
        if (deleteWatchListItem()) {
          const updatedWatchlist = watchlist.filter(
            (game) => game.id !== gameId
          );
          setWatchlist(updatedWatchlist);
          Swal.fire(
            "Removed!",
            "The game has been removed from your watchlist.",
            "success"
          );
        }
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Watchlist</h2>
      {watchlist?.length === 0 ? (
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
            {watchlist?.map((game) => (
              <tr key={game.id}>
                <td>
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-16 h-16 object-cover rounded-xl"
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
