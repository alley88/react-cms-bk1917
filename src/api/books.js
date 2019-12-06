import http from "utils/request";

export const booksListApi = (page,limit)=>http.get({
    url:"/ajax/books/booksList",
    data:{
        page,
        limit
    }
})


export const booksListUpdate = (id,booksAuth,booksName,booksPrice,booksStatus,booksLogo)=>http.post({
    url:"/ajax/books/modify",
    method:"post",
    data:{
        booksAuth,
        booksName,
        booksPrice,
        booksStatus,
        booksLogo,
        id
    }
})


export const booksListDel = (id)=>http.get({
    url:"/ajax/books/delete",
    data:{
        id
    }
})