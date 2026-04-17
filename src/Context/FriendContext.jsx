import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const friendContext = createContext();

const FriendProvider = ({children}) => {
    const [text, setText] = useState([]);
    const [video, setVideo] = useState([]);
    const [call, setCall] = useState([]);
//     const [markedFriends, setMarkedFriends] = useState([]);

//     const markFriend = (expectedFriend, type) => {
//     const isExisting = markedFriends.find(f => f.id === expectedFriend.id);

//     if (isExisting) {
//         alert(`Already marked as ${isExisting.type}`);
//         return;
//     }

//     setMarkedFriends( [
//         { ...expectedFriend, type }
//     ]);

//     alert(`Marked as ${type}`);
// };

    const markAsText = (expectedFriend) => {
        const isExisting = text.find((friend) => friend.id == expectedFriend.id);
        if(isExisting){
            toast.error("Already Marked as Text");
            return;
        } else {
            setText([...text, expectedFriend]);
            toast.success("Marked as Text");
            return;
        }           
        
    }



    const markAsVideo = (expectedFriend) => {
        const isExisting = video.find((friend) => friend.id == expectedFriend.id);
        if(isExisting){
            toast.error("Already Marked as Video");
            return;
        } else {
            setVideo([...video, expectedFriend]);
            toast.success("Marked as Video");
            return;
        }   

    }

    const markAsCall = (expectedFriend) => {
        const isExisting = call.find((friend) => friend.id == expectedFriend.id);
        if(isExisting){
            toast.error("Already Marked as Call");
            return;
        } else {
            setCall([...call, expectedFriend]);
            toast.success("Marked as Call");
            return;
        }   
    }

    const context = {
        markAsText,
        markAsVideo,
        markAsCall,
        age: 30,
        location: 'New York',
    };
    return (
        <div>
            <friendContext.Provider value={context}>
                {children}
            </friendContext.Provider>
            
        </div>
    );
};

export default FriendProvider;