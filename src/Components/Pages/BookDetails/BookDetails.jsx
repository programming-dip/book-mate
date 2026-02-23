import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToReadList, addToWishList } from '../../../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookNum = parseInt(id);

    const booksData = useLoaderData();
    const singleBook = booksData.find(book => book.bookId === bookNum);
    const { bookId, bookName, author, image, rating, category, tags, review,
        totalPages, yearOfPublishing, publisher, } = singleBook;

    const handleMarkAsRead = (id)=>{
        addToReadList(id);
    }
    
    const handleAddToWishlist =(id)=>{
        addToWishList(id);
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure className="p-10 bg-base-200 m-6 rounded-2xl">
                <img
                    className="rounded-xl max-h-150"
                    src={image}
                    alt="Book Image" />
            </figure>
            <div className="card-body lg:max-w-2/4">
                <h2 className="text-5xl">{bookName}</h2>
                <p className='text-xl'>By: {author}</p>
                <div className="divider"></div>
                <p className='text-xl'>{category}</p>
                <div className="divider"></div>
                <p className='text-lg'><b>Review:</b> {review}</p>
                <div className='text-lg flex space-x-6'><b>Tag:</b>
                    {tags.map(tag => <div className="badge badge-secondary" key={tag + bookId}>{tag}</div>)}
                </div>
                <div className="divider"></div>

                <table className='max-w-2/3'>
                    <tbody>
                        <tr>
                            <td className='text-lg font-extralight'>Number of pages: </td>
                            <td className='text-lg font-bold'>{totalPages}</td>
                        </tr>
                        <tr>
                            <td className='text-lg font-extralight'>Publisher: </td>
                            <td className='text-lg font-bold'>{publisher}</td>
                        </tr>
                        <tr>
                            <td className='text-lg font-extralight'>Year of Publishing: </td>
                            <td className='text-lg font-bold'>{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className='text-lg font-extralight'>Rating: </td>
                            <td className='text-lg font-bold'>{rating}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="card-actions justify-start mt-2">
                    <button className="btn btn-primary" onClick={()=>handleMarkAsRead(id)}>Mark as Read</button>
                    <button className="btn btn-primary" onClick={()=>handleAddToWishlist(id)}>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;