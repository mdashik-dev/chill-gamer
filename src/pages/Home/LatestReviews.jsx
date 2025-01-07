const LatestReviews = () => {
  const reviews = [
    {
      id: 1,
      game: "Elden Ring",
      reviewer: "John Doe",
      review:
        "An incredible open-world experience with breathtaking visuals and challenging gameplay.",
      date: "Dec 1, 2024",
    },
    {
      id: 2,
      game: "God of War Ragnarök",
      reviewer: "Jane Smith",
      review:
        "A cinematic masterpiece with emotional storytelling and immersive combat.",
      date: "Nov 30, 2024",
    },
    {
      id: 3,
      game: "Hogwarts Legacy",
      reviewer: "Sam Wilson",
      review:
        "A dream come true for Harry Potter fans. The exploration and spellcasting are magical.",
      date: "Nov 28, 2024",
    },
  ];

  return (
    <section className="container mx-auto my-12 px-4 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Latest Reviews
      </h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-lg shadow p-4 md:flex md:justify-between transition-colors duration-300"
          >
            <div>
              <h3 className="text-lg font-bold">{review.game}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                By {review.reviewer}
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                {review.review}
              </p>
            </div>
            <div className="text-gray-500 dark:text-gray-400 mt-4 md:mt-0 md:ml-6">
              <p>{review.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestReviews;
