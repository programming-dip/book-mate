import React, { Suspense, useMemo, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tabStyle.css';
import ReadBook from '../../ReadBook/ReadBook';
import { useLoaderData } from 'react-router';
import { getReadList, getWishList } from '../../../utility/addToDB';
import WishList from '../../WishList/WishList';
import { PiEmpty } from 'react-icons/pi';
import { FaAngleDown } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';

const ListedBooks = () => {
    const [readBooksData, setReadBooksData] = useState([]);
    const [wishListData, setWishListData] = useState([]);

    const booksData = useLoaderData();


    // making readList 
    useMemo(() => {
        const readListBooks = getReadList();
        const convertedReadListBooks = readListBooks.map(bookString => parseInt(bookString));
        const readBooks = booksData.filter(book => convertedReadListBooks.includes(book.bookId));
        setReadBooksData(readBooks);
    }, [booksData])

    //making wishlist
    
    useMemo(() => {
        const wishListBooks = getWishList();
        const convertedWishListBooks = wishListBooks.map(wishListBookString => parseInt(wishListBookString));
        const wishList = booksData.filter(bookData => (convertedWishListBooks.includes(bookData.bookId)));
        setWishListData(wishList);
    }, [booksData])


    // sort
    const [sortType, setSortType] = useState("");

    const handleSortType = (typeInProperty, e) => {

        const sortedReadData = [...readBooksData].sort((a, b) => a[typeInProperty] - b[typeInProperty]);
        setReadBooksData(sortedReadData);

        const sortedWishData = [...wishListData].sort((a,b)=>a[typeInProperty]-b[typeInProperty]);
        setWishListData(sortedWishData);

        const typeText = e.target.innerText;
        setSortType(typeText);


    }

    return (

        <div>
            <div className='flex justify-center'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn bg-green-500 rounded-lg m-1">Sort By: {sortType}<BsChevronDown /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={(e) => handleSortType("rating", e)}>Rating</a></li>
                        <li><a onClick={(e) => handleSortType("totalPages", e)}>Number of pages</a></li>
                        <li><a onClick={(e) => handleSortType("yearOfPublishing", e)}>Publisher year</a></li>
                    </ul>
                </div>
            </div>


            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        readBooksData.length > 0 ? (<Suspense fallback={<span>Loading...</span>}>
                            {readBooksData.map(readBookData => <ReadBook key={readBookData.bookId} readBookData={readBookData} setReadBooksData={setReadBooksData}></ReadBook>)}
                        </Suspense>) :

                            (<div className='flex flex-col items-center'>
                                <p className='text-center p-10 text-3xl'>No books added</p>
                                <PiEmpty className='text-8xl' />
                            </div>

                            )
                    }

                </TabPanel>

                <TabPanel>
                    {
                        wishListData.length > 0 ? (<Suspense fallback={<span>Loading...</span>}>
                            {wishListData.map(singleWishData => <WishList key={singleWishData.bookId} singleWishData={singleWishData} setWishListData={setWishListData}></WishList>)}
                        </Suspense>) :
                            (<div className='flex flex-col items-center'>
                                <p className='text-center p-10 text-3xl'>No books added</p>
                                <PiEmpty className='text-8xl' />
                            </div>

                            )
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;