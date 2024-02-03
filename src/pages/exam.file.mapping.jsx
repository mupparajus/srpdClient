import React, { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const ExamFileMapping = () => {
    const [leftColumn, setLeftColumn] = useState(['Exam 1', 'Exam 2', 'Exam 3', 'Exam 4', 'Exam 5', 'Exam 6']);
    const [rightColumn, setRightColumn] = useState(['File 1', 'File 2', 'File 3', 'File 4', 'File 5', 'File 6']);

    const moveToLeftColumn = (index) => {
        const itemToMove = rightColumn[index];
        setLeftColumn([...leftColumn, itemToMove]);
        setRightColumn(rightColumn.filter((_, i) => i !== index));
    };

    const moveToRightColumn = (index) => {
        const itemToMove = leftColumn[index];
        setRightColumn([...rightColumn, itemToMove]);
        setLeftColumn(leftColumn.filter((_, i) => i !== index));
    };

    return (
        <div className='px-4 py-10'>
            <h2 className="text-xl text-center text-zinc-800">
             Exam to Question File Mapping page
            </h2>
            <div className='px-16 py-10 flex flex-row justify-between'>
                <div >
                    <h2>Left Column</h2>
                    <ul>
                        {leftColumn.map((item, index) => (
                            <li key={index}>
                                {item}{' '}
                                <button onClick={() => moveToRightColumn(index)} className="bg-blue-600 text-white px-1 py-1">
                                    <BsArrowRightCircle title="Move to Roght" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div >
                    <h2>Right Column</h2>
                    <ul>
                        {rightColumn.map((item, index) => (
                            <li key={index} className='gap-6'>
                                <button onClick={() => moveToLeftColumn(index)} className="bg-blue-600 text-white px-1 py-1">
                                    <BsArrowLeftCircle title="Move to Left" />
                                </button>
                                {'     '}
                                {item}

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default ExamFileMapping;
