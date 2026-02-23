import Swal from 'sweetalert2';

const getReadList = () => {
    const storedBooks = localStorage.getItem("readList");
    if (storedBooks) {
        const storedBooksString = JSON.parse(storedBooks);
        return storedBooksString;
    } else {
        return [];
    }
}

const addToReadList = (id) => {
    const readList = getReadList();
    if (readList.includes(id)) {
        // alert
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The book is already in the Readlist!",

        });
    } else {
        readList.push(id);
        const readListJson = JSON.stringify(readList);
        localStorage.setItem("readList", readListJson);
        //alert
        Swal.fire({
            title: "Added to Readlist!",
            icon: "success",
            
        });
    }

}


const getWishList = () => {
    const storedBooks = localStorage.getItem("wishList");
    if (storedBooks) {
        const storedBooksString = JSON.parse(storedBooks);
        return storedBooksString;
    } else {
        return [];
    }
}

const addToWishList = (id) => {
    const wishList = getWishList();
    if (wishList.includes(id)) {
        // alert
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The book is already in the Wishlist!",

        });
    } else {
       wishList.push(id);
        const wishListJson = JSON.stringify(wishList);
        localStorage.setItem("wishList", wishListJson);
        //alert
        Swal.fire({
            title: "Added to Wishlist!",
            icon: "success",
            
        });
    }

}

export { addToReadList, getReadList,addToWishList,getWishList }