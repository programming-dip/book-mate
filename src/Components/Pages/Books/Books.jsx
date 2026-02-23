import React, {Suspense} from 'react';
import Book from '../../Book/Book';

const Books = ({ booksData }) => {


    return (
        <div className='ml-4'>
            <h2 className='text-5xl text-center p-6'>Books</h2>
            <Suspense fallback={<span>loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        booksData.map(bookData => (
                            <Book key={bookData.bookId} bookData={bookData}></Book>
                        ))
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;