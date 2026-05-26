import React from "react";

function TrackStatus() {
    return <>
        

        <div>
            <h1 className="text-3xl font-bold mb-4">Track Status</h1>
            <p className="text-gray-600 mb-6">Enter your report ID to track the status of your report.</p>
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Report ID"
                    className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-[#0e0c17]"
                />
                <button className="bg-[#0e0c17] text-white px-6 py-4 rounded-xl hover:bg-[#1a1a1a] transition-colors">
                    Track
                </button>
            </div>  
            
        </div>
    </>;
}

export default TrackStatus;
