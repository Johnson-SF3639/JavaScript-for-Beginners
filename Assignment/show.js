function ShowDetails(){
    var arrayElement= document.cookie.split('=')
    var bookData = JSON.parse(arrayElement[1]);
    console.log(bookData);
    document.getElementById("departmentName").innerHTML = bookData.category;
    document.getElementById("bookName").innerHTML = bookData.bookName;
    document.getElementById("email").innerHTML = bookData.authorEmail;
    document.getElementById("authorName").innerHTML = bookData.authorName;
    document.getElementById("published").innerHTML = bookData.published;
    document.getElementById("price").innerHTML = bookData.price;
    document.getElementById('showHead').innerHTML= bookData.bookName + " Book Details";
}