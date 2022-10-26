var category = document.getElementById('depart');
var bookName = document.getElementById('bookName');
var authorEmail = document.getElementById('email');
var authorName = document.getElementById('authorName');
var published = document.getElementById('published');
var price = document.getElementById('price');
var errorText = document.getElementById('ValidationBox');
var deptErrorText = document.getElementById('deptValidationBox');
var bookErrorText = document.getElementById('bookValidationBox');
var emailErrorText = document.getElementById('emailValidationBox');
var authorErrorText = document.getElementById('authorValidationBox');
var publishErrorText = document.getElementById('publishedValidationBox');
var priceErrorText = document.getElementById('priceValidationBox');

var categoryValue = true;
var bookNameValue = false;
var authorEmailValue = false;
var authorNameValue = false;
var publishedValue = false;
var priceValue = false;

function Books(category, bookName, authorEmail, authorName, published, price) {
    this.category = category;
    this.bookName = bookName;
    this.authorEmail = authorEmail;
    this.authorName = authorName;
    this.published = published;
    this.price = price;

}

function validationBook() {
    console.log(categoryValue);
    console.log(bookNameValue);
    console.log(authorEmailValue);
    console.log(authorNameValue);
    console.log(publishedValue);
    console.log(priceValue);
    if (categoryValue && bookNameValue && authorEmailValue && authorNameValue && publishedValue && priceValue) {
        var bookObject = new Books(category.value, bookName.value, authorEmail.value, authorName.value, published.value, price.value);
        document.getElementById("ValidationText").innerHTML = "Successfully Submitted";
        errorText.style.display = 'block';
        document.cookie = "Details=" + JSON.stringify(bookObject);
        console.log("1st ", bookObject);
        ValidationText.style.color = 'green';
    } else {
        document.getElementById("ValidationText").innerHTML = "Fill The Blank";
        errorText.style.display = 'block';
        ValidationText.style.color = 'red';
    }
    return false;
}


function DepartmentValidation(text) {
    var currentDepartment = document.getElementById(text);
    if (currentDepartment.value == "") {
        document.getElementById("departmentValidationText").innerHTML = "Fill The Blank";
        deptErrorText.style.display = 'block';
        currentDepartment.style.borderColor = 'red';
    } else {
        deptErrorText.style.display = 'none';
        currentDepartment.style.borderColor = 'black';
        categoryValue = true;
    }
}

function BookNameValidation(text) {
    var currentBookName = document.getElementById(text);

    if (currentBookName.value == "") {
        document.getElementById("bookValidationText").innerHTML = "Fill The Blank";
        bookErrorText.style.display = 'block';
        bookValidationText.style.color = 'red';
        currentBookName.style.borderColor = 'red';
    }
    else if (currentBookName.value.length > 50) {
        document.getElementById("bookValidationText").innerHTML = "Book name length should not exceed 50";
        bookErrorText.style.display = 'block';
        bookValidationText.style.color = 'red';
        currentBookName.style.borderColor = 'red';
    }
    else {
        if (currentBookName.value.match(/[0-9]/)) {
            document.getElementById("bookValidationText").innerHTML = "Numeric values not allowed";
            bookErrorText.style.display = 'block';
            bookValidationText.style.color = 'red';
            currentBookName.style.borderColor = 'red';
        } else {
            bookErrorText.style.display = 'none';
            currentBookName.style.borderColor = 'black';
            bookNameValue = true;
        }
    }
}

function EmailValidation(text) {
    var currentEmail = document.getElementById(text);
    if (currentEmail.value == "") {
        document.getElementById("emailValidationText").innerHTML = "Fill The Blank";
        emailErrorText.style.display = 'block';
        emailValidationText.style.color = 'red';
        currentEmail.style.borderColor = 'red';
    } else {
        if (currentEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            emailErrorText.style.display = 'none';
            currentEmail.style.borderColor = 'black';
            authorEmailValue = true;
        } else {
            document.getElementById("emailValidationText").innerHTML = "Please enter valid Email Address";
            emailErrorText.style.display = 'block';
            emailValidationText.style.color = 'red';
            currentEmail.style.borderColor = 'red';
        }
    }
}

function AuthorValidation(text) {
    var currentAuthor = document.getElementById(text);
    if (currentAuthor.value == "") {
        document.getElementById("authorValidationText").innerHTML = "Fill The Blank";
        authorErrorText.style.display = 'block';
        currentAuthor.style.borderColor = 'red';
        authorValidationText.style.color = 'red';
    }
    else if (currentAuthor.value.length > 50) {
        document.getElementById("authorValidationText").innerHTML = "Book name length should not exceed 50";
        authorErrorText.style.display = 'block';
        authorValidationText.style.color = 'red';
        currentAuthor.style.borderColor = 'red';
    }
    else {
        if (currentAuthor.value.match(/[0-9]/)) {
            document.getElementById("authorValidationText").innerHTML = "Numeric values not allowed";
            authorErrorText.style.display = 'block';
            authorValidationText.style.color = 'red';
            currentAuthor.style.borderColor = 'red';
        } else {
            if (currentAuthor.value.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
                document.getElementById("authorValidationText").innerHTML = "Special Character not allowed";
                authorErrorText.style.display = 'block';
                authorValidationText.style.color = 'red';
                currentAuthor.style.borderColor = 'red';
            } else {
                authorErrorText.style.display = 'none';
                currentAuthor.style.borderColor = 'black';
                authorNameValue = true;
            }
        }
    }
}

function PublishedValidation(text) {
    var currentPublish = document.getElementById(text);
    if (currentPublish.value == "") {
        document.getElementById("publishedValidationText").innerHTML = "Fill The Blank";
        publishErrorText.style.display = 'block';
        currentPublish.style.borderColor = 'red';
        publishedValidationText.style.color = 'red';
    } else {
        if (currentPublish.value > 2022) {
            document.getElementById("publishedValidationText").innerHTML = "Please enter valid Published year";
            publishErrorText.style.display = 'block';
            currentPublish.style.borderColor = 'red';
            publishedValidationText.style.color = 'red';
        }
        else {
            publishErrorText.style.display = 'none';
            currentPublish.style.borderColor = 'black';
            publishedValue = true;
        }
    }
}

function PriceValidation(text) {
    var currentPrice = document.getElementById(text);
    if (currentPrice.value == "") {
        document.getElementById("priceValidationText").innerHTML = "Fill The Blank";
        priceErrorText.style.display = 'block';
        priceValidationText.style.color = 'red';
        currentPrice.style.borderColor = 'red';
    } else {
        if (currentPrice.value.match(/[a-zA-Z]/)) {
            document.getElementById("priceValidationText").innerHTML = "Alphabets values not allowed";
            priceErrorText.style.display = 'block';
            currentPrice.style.borderColor = 'red';
            priceValidationText.style.color = 'red';
        }
        else {
            priceErrorText.style.display = 'none';
            currentPrice.style.borderColor = 'black';
            priceValue = true;
        }
    }
}

