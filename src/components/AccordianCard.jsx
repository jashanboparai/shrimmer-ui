import React from "react";

function AccordianCard({ header, body, isOpen, onClick }) {
    return (
        <div className="border border-black w-full">
            <p className="font-bold bg-amber-100 flex justify-between px-1 cursor-pointer" onClick={onClick}><span>{header}</span><span>👇</span></p>
            <p>{isOpen && body}</p>
        </div>
    );
}

export default AccordianCard;
