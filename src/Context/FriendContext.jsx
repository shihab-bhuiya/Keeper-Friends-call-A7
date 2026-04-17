import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const friendContext = createContext();

const FriendProvider = ({ children }) => {

    const [text, setText] = useState([]);
    const [video, setVideo] = useState([]);
    const [call, setCall] = useState([]);
    const [markedFriends, setMarkedFriends] = useState([]);

    // 🔥 TEXT
    const markAsText = (expectedFriend) => {

        const isExisting = text.find(friend => friend.id == expectedFriend.id);

        if (isExisting) {
            toast.error("Already Marked as Text");
            return;
        }

        const newEntry = {
            ...expectedFriend,
            type: "text",
            time: new Date().toLocaleString()
        };

        setText(prev => [...prev, expectedFriend]);
        setMarkedFriends(prev => [newEntry, ...prev]); // latest first

        toast.success("Marked as Text");
    };

    // 🔥 VIDEO
    const markAsVideo = (expectedFriend) => {

        const isExisting = video.find(friend => friend.id == expectedFriend.id);

        if (isExisting) {
            toast.error("Already Marked as Video");
            return;
        }

        const newEntry = {
            ...expectedFriend,
            type: "video",
            time: new Date().toLocaleString()
        };

        setVideo(prev => [...prev, expectedFriend]);
        setMarkedFriends(prev => [newEntry, ...prev]);

        toast.success("Marked as Video");
    };

    // 🔥 CALL
    const markAsCall = (expectedFriend) => {

        const isExisting = call.find(friend => friend.id == expectedFriend.id);

        if (isExisting) {
            toast.error("Already Marked as Call");
            return;
        }

        const newEntry = {
            ...expectedFriend,
            type: "call",
            time: new Date().toLocaleString()
        };

        setCall(prev => [...prev, expectedFriend]);
        setMarkedFriends(prev => [newEntry, ...prev]);

        toast.success("Marked as Call");
    };

    const context = {
        markAsText,
        markAsVideo,
        markAsCall,
        markedFriends,
    };

    return (
        <friendContext.Provider value={context}>
            {children}
        </friendContext.Provider>
    );
};

export default FriendProvider;