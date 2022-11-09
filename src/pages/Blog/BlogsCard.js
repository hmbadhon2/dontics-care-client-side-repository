import React from 'react';

const BlogsCard = ({blog}) => {
    const {question,answer} =blog
    return (
        <div className="mockup-window border p-10 bg-base-300 ">
         <div>
            <h2 className='text-5xl text-center text-semibold mb-10'>{question}</h2>
            <p>{answer}</p>
         </div>
        </div>
    );
};

export default BlogsCard;