let globalC=0;
let obj=[];
function BooksNew(title, author, rStatus) {
    this.title =title;
    this.author = author;
    this.rStatus = rStatus;
    this.statusOfRead = function (){
             if(this.rStatus=="true"){
                 console.log("HELOO")
                return "Book "+this.title+" by "+this.author+" is already read."; 
             }
             else{
                 return "Book "+this.title+" by "+this.author+" is not read.";
         }
         }
  }
document.getElementById("newBook").addEventListener("click",function(){
        obj[globalC]=new BooksNew(prompt("Enter name of the Book"),prompt("Enter author of the Book"),prompt("Enter status of reading true/false"));
        let books = document.createElement("h4");
        books.innerText=`${obj[globalC].title} ${obj[globalC].author} \n ${obj[globalC].statusOfRead()}`;
        document.getElementById("h3").appendChild(books);  
        globalC++; 
});


