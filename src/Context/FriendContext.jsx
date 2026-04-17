import React, { createContext, useState } from 'react';

export const friendContext = createContext();

const FriendContext = ({children}) => {
    const [text, setText] = useState();
    const [video, setVideo] = useState();
    const [call, setCall] = useState();

    const markAsText = () => {
        setText(true);
    }


    const context = {
        name: 'John Doe',
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

export default FriendContext;