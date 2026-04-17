import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    const friend = useParams();

    const friends = useLoaderData();

    const expectedFriend = friends.find((friendData) => friendData.id === parseInt(friend.friendId));

    
console.log(expectedFriend);
    return (
      <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <img
            src={expectedFriend.picture}
            alt="profile"
            className="w-24 h-24 rounded-full mb-3"
          />

          <h2 className="text-xl font-semibold">{expectedFriend.name}</h2>

          <div className="flex gap-2 mt-2">
            <span className={`text-xs px-3 py-1 rounded-full ${expectedFriend.status === 'on-track' ? 'bg-green-100 text-green-600' : expectedFriend.status === 'overdue' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
              {expectedFriend.status}
            </span>
            <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
              FAMILY
            </span>
          </div>

          <p className="mt-4 text-gray-600 italic">
            "Former colleague, great mentor"
          </p>

          <p className="text-sm text-gray-400 mt-2">
            Preferred: email
          </p>

          <div className="w-full mt-6 space-y-3">
            <button className="w-full py-2 border rounded-lg hover:bg-gray-100">
              Snooze 2 Weeks
            </button>

            <button className="w-full py-2 border rounded-lg hover:bg-gray-100">
              Archive
            </button>

            <button className="w-full py-2 border rounded-lg text-red-500 hover:bg-red-50">
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold">62</h3>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white shadow rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold">30</h3>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white shadow rounded-xl p-4 text-center">
              <h3 className="text-lg font-semibold">Feb 27, 2026</h3>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          {/* GOAL SECTION */}
          <div className="bg-white shadow rounded-xl p-5 flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-green-700">
                Relationship Goal
              </h3>
              <p className="text-gray-600 mt-1">
                Connect every <b>30 days</b>
              </p>
            </div>

            <button className="px-4 py-1 text-sm border rounded-lg hover:bg-gray-100">
              Edit
            </button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white shadow rounded-xl p-5">
            <h3 className="font-semibold mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="border rounded-xl p-4 hover:bg-gray-100 flex flex-col items-center">
                📞
                <span className="mt-2">Call</span>
              </button>

              <button className="border rounded-xl p-4 hover:bg-gray-100 flex flex-col items-center">
                💬
                <span className="mt-2">Text</span>
              </button>

              <button className="border rounded-xl p-4 hover:bg-gray-100 flex flex-col items-center">
                🎥
                <span className="mt-2">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
};

export default FriendDetails;