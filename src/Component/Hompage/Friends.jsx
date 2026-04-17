import React, { use } from 'react';
import Friend from './Friend';


const friendsPromis = fetch("/friendsData.json").then(res => res.json());

const Friends = () => {

    const friends = use(friendsPromis);

    return (
        <div className='max-w-350 container mx-auto px-4 md:px-8 py-10 '>
            <h2 className='text-xl md:text-2xl font-semibold mb-6'>Your Friends</h2>
            <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow-olive-300 rounded-lg p-4 bg-white'>
                {friends.map(friend => 
                    <Friend key={friend.id} friend={friend} ></Friend>

                )}
            </div>
            
        </div>
    );
};

export default Friends;