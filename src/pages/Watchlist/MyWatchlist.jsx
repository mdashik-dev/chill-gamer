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
    fetch(`https://chill-gamer.vercel.app/watchlist/${user?.email}`, {
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
            (game) => game._id !== gameId
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
    <div className="container mx-auto p-4 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Your Watchlist
      </h2>
      {watchlist?.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          Your watchlist is empty. Add games from the review details page.
        </p>
      ) : (
        <table className="table w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md rounded-lg overflow-hidden transition-colors duration-300">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
            <tr>
              <th>Game Cover</th>
              <th>Game Title</th>
              <th>Added On</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist?.map((game) => (
              <tr
                key={game.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
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
                    onClick={() => handleDelete(game._id)}
                    className="btn btn-sm btn-error text-white bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 transition-colors duration-300"
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
