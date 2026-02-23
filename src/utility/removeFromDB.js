import { getReadList,getWishList } from "./addToDB"
const booksData = await fetch('/booksData.json')
    .then(res => res.json())
    .then(data => data);


const removeFromRead = (value,setReadBooksData)=>{
    const convertedValue = value.toString();
    const currentList = getReadList();
    const listAfterRemoveItem = currentList.filter(item=>(item!==convertedValue));
    const readBookDataAfterRemoveItem = booksData.filter(book=>listAfterRemoveItem.includes(book.bookId.toString()));
    setReadBooksData(readBookDataAfterRemoveItem);
    localStorage.removeItem("readList");

   const listAfterRemoveItemJson = JSON.stringify(listAfterRemoveItem);
   localStorage.setItem("readList",listAfterRemoveItemJson);
}

const removeFromWishList = (value,setWishListData)=>{
    const convertedValue = value.toString();
    const currentList = getWishList();
    const listAfterRemoveItem = currentList.filter(item=>(item!==convertedValue));
    const wishListDataAfterRemoveItem = booksData.filter(book=>listAfterRemoveItem.includes(book.bookId.toString()));
    setWishListData(wishListDataAfterRemoveItem);
    localStorage.removeItem("wishList");

    const listAfterRemoveItemJson = JSON.stringify(listAfterRemoveItem);
    localStorage.setItem("wishList",listAfterRemoveItemJson);
}

export {removeFromRead, removeFromWishList};