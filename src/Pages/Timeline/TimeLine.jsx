import React, { useContext } from 'react';
import { friendContext } from '../../Context/FriendContext';

const TimeLine = () => {

    const { markedFriends } = useContext(friendContext);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Timeline</h2>

            <div className="space-y-4">
                {markedFriends.map((friend, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">

                        <img 
                            src={friend.picture} 
                            className="w-12 h-12 rounded-full"
                        />

                        <div>
                            <h3 className="font-semibold">{friend.name}</h3>

                            <p className="text-sm text-gray-500">
                                {friend.type.toUpperCase()} • {friend.time}
                            </p>
                        </div>

                        
                        <span className={`ml-auto px-3 py-1 text-xs rounded-full
                            ${friend.type === "text" && "bg-blue-100 text-blue-600"}
                            ${friend.type === "call" && "bg-green-100 text-green-600"}
                            ${friend.type === "video" && "bg-purple-100 text-purple-600"}
                        `}>
                            {friend.type}
                        </span>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeLine;