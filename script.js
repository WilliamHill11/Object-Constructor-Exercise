function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    // console.log(title, author, pages, read);
    return { title, author, pages, read };
  };
}

const theHobbit = new Book('the Hobbit', 'by John Smith', 2039, 'not a chance');

console.log(theHobbit.info());
