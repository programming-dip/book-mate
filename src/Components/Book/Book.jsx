import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const Book = ({ bookData }) => {

    console.log(bookData);
    const { bookId, bookName, author, image, rating, category, tags } = bookData;


    return (
        <Link to={`bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border-amber-50 rounded-xl">
                <figure className="p-10 bg-base-200 m-6 rounded-2xl">
                    <img
                        className="rounded-xl max-h-60"
                        src={image}
                        alt="Book Image" />
                </figure>
                <div className="card-body">
                    <div className='flex space-x-6'>
                        {tags.map(tag => <div className="badge badge-secondary" key={tag+bookId}>{tag}</div>)}

                    </div>
                    <h2 className="card-title">
                        {bookName}

                    </h2>
                    <p>By: {author}</p>
                    <div className='border-1 border-gray-100 border-dashed'></div>
                    <div className='flex'>
                        <p className="card-actions justify-start">{category}</p>
                        <div className="card-actions justify-end">
                            <p>{rating}</p>
                            <CiStar className='text-xl'></CiStar>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;