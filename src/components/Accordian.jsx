import React, { useState } from "react";
import AccordianCard from "./AccordianCard";

const accordianData = [
    {
        title: "What is a shimmer effect?",
        content:
            "A shimmer effect is a loading animation that mimics the appearance of content being loaded, providing a better user experience during data fetches.",
    },
    {
        title: "Why use Tailwind CSS?",
        content:
            "Tailwind CSS is a utility-first CSS framework that allows rapid UI development with minimal custom CSS, making styling easier and more consistent.",
    },
    {
        title: "How does the Accordion work?",
        content:
            "The Accordion component displays a list of items. Clicking on an item expands it to show more details, while collapsing others.",
    },
];

function Accordian() {
    const [openedIndex, setOpenedIndex] = useState(null);
    return (
        <div className="flex flex-col justify-center items-center w-[50%] m-auto mt-5">
            {accordianData.map((accordian, index) => (
                <AccordianCard
                    header={accordian.title}
                    body={accordian.content}
                    key={index}
                    isOpen={openedIndex === index}
                    onClick={() =>
                        setOpenedIndex(openedIndex === index ? null : index)
                    }
                />
            ))}
        </div>
    );
}

export default Accordian;
