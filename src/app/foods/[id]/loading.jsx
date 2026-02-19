import React from "react";

const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Image Skeleton */}
        <div className="w-full h-[400px] bg-gray-300 animate-pulse rounded-xl"></div>

        {/* Text Skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2 animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          <div className="h-8 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          <div className="h-10 bg-gray-300 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
