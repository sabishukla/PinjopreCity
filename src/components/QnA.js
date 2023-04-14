import React, { useState } from 'react';

const Accordion = () => {

    const items = [
        {
            id:1,
            question: 'What is pinjore named after?',
            answer: 'pandavas',
        },
        {
            id:2,
            question: 'touch some grass maybe?',
            answer: 'no',
        },
        {
            id:3,
            question: 'what in the world are you even doing?',
            answer: 'like i have any idea',
        }
    ]

    const [idx, setIdx] = useState(-1)


    const renderedItems = items.map((item, index) => {
        const isExpanded = idx === index;

        const handleClick = () => {
            if (idx != idx) {
                setIdx(-1);
            }
            setIdx(index);
        }
        return (
            <div key={item.id}>
                <h1  onClick={handleClick}>
                    {item.question}
                    {isExpanded? '-' : '+'}
                </h1>
                {isExpanded? <div className='border-b border-black'>{item.answer}</div> : ''}
            </div>
        );
    })

  return (
    <div className='h-screen flex flex-col gap-5 justify-center items-center text-center'>
        <h1 className=' text-5xl font-bold '>QnA</h1>
        {renderedItems}
    </div>
  )
}

export default Accordion