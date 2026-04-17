import React, { useContext, useMemo } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { friendContext } from '../../Context/FriendContext';

const Static = () => {

    const { markedFriends = [] } = useContext(friendContext);

    // 🔥 optimized calculations (runs only when data changes)
    const data = useMemo(() => {
        const textCount = markedFriends.filter(f => f.type === "text").length;
        const callCount = markedFriends.filter(f => f.type === "call").length;
        const videoCount = markedFriends.filter(f => f.type === "video").length;

        return [
            { name: "Text", value: textCount },
            { name: "Call", value: callCount },
            { name: "Video", value: videoCount }
        ];
    }, [markedFriends]);

    return (
        <div className="bg-white p-6 rounded-xl shadow mt-6">

            <h2 className="text-xl font-bold mb-4">
                Friend Activity Overview
            </h2>

            {markedFriends.length === 0 ? (
                <p className="text-gray-500 text-sm">
                    No activity yet. Start marking friends.
                </p>
            ) : (
                <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#4f46e5" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}

        </div>
    );
};

export default Static;