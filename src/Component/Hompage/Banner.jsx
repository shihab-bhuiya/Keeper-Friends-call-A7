import React from "react";

const Banner = () => {
  return (
    <div className="bg-base-100 py-12 md:py-16 text-center px-4">

      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-500 max-w-xl mx-auto mb-6 text-sm md:text-base">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="btn bg-green-700 text-white hover:bg-green-800 btn-sm md:btn-md">
        + Add a Friend
      </button>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto">

        <div className="bg-base-200 p-4 md:p-6 rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold">10</h2>
          <p className="text-xs md:text-sm text-gray-500">Total Friends</p>
        </div>

        <div className="bg-base-200 p-4 md:p-6 rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold">3</h2>
          <p className="text-xs md:text-sm text-gray-500">On Track</p>
        </div>

        <div className="bg-base-200 p-4 md:p-6 rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold">6</h2>
          <p className="text-xs md:text-sm text-gray-500">Need Attention</p>
        </div>

        <div className="bg-base-200 p-4 md:p-6 rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold">12</h2>
          <p className="text-xs md:text-sm text-gray-500">Interactions</p>
        </div>

      </div>
    </div>
  );
};

export default Banner;