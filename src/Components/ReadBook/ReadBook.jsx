import React from 'react';
import { FaRegCalendarTimes, FaUserFriends } from 'react-icons/fa';
import { RiFilePaperLine, RiPageSeparator } from 'react-icons/ri';
import { removeFromRead } from '../../utility/removeFromDB';

const ReadBook = ({ readBookData, setReadBooksData }) => {
   
    const { bookId, bookName, author, image, rating, category, tags,
        totalPages, yearOfPublishing, publisher, } = readBookData;

    return (
        <div className="card lg:card-side bg-base-100 shadow-sm mb-9">
            <figure className="p-10 bg-base-200 m-6 rounded-2xl">
                <img
                    className="rounded-xl max-h-40"
                    src={image}
                    alt="Book Image" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{bookName}</h2>
                <p className='text-xl'>By: {author}</p>
                <div className='text-lg flex space-x-6'><b>Tag:</b>
                    {tags.map(tag => <div className="badge badge-secondary" key={tag + bookId}>#{tag}</div>)}
                    <div className='text-lg font-extralight flex items-center'> <FaRegCalendarTimes className='mr-3' />Year of Publishing: {yearOfPublishing}</div>
                </div>

                <div className='font-extralight flex items-center'>
                    <FaUserFriends className='mr-2' />
                    <div className='mr-4'>Publisher: {publisher}</div>
                    <RiFilePaperLine className='mr-2' />
                    <div>Page: {totalPages}</div>
                </div>
                <div className="divider"></div>
                <div className="flex items-center space-x-2">
                    <div className='badge badge-secondary p-4.5 rounded-2xl'>Category: {category}</div>
                    <div className='badge badge-secondary p-4.5 rounded-2xl'>Rating: {rating}</div>
                    <button onClick={()=>removeFromRead(bookId,setReadBooksData)} className="btn btn-primary rounded-2xl p-4.5">Remove from Readlist</button>
                </div>


            </div>
        </div>
    );
};

export default ReadBook;