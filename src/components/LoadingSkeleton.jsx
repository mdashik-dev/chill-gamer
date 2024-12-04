function LoadingSkeleton() {
  return (
    <div className="w-full p-6 rounded-lg space-y-4 my-8">
      <div className="h-6 bg-gray-300 rounded w-2/3 animate-pulse"></div>

      <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-4/5 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>

      <div className="h-48 bg-gray-300 rounded animate-pulse"></div>

      <div className="h-10 bg-gray-300 rounded w-1/2 animate-pulse"></div>
    </div>
  );
}

export default LoadingSkeleton;
