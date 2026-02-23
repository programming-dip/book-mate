import React from 'react';
import image from '../../assets/books.png'
const Banner = () => {
    return (
        <div className="hero bg-base-300 min-h-[550px] rounded-4xl mt-10 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                    <img
                    src={image}
                    className="max-w-sm rounded-lg"
                />
                
                <div>
                    <h1 className="text-5xl font-bold max-w-2/3">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-primary mt-6">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;