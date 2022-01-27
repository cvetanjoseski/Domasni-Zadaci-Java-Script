
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(object => {  document.getElementById("jsonCall").addEventListener("click",function(){
    let myPage = document.getElementById("firstDiv");
    let newH4 ;
    newH4 = document.createElement('h4',);
          console.log(object);
         for(let i in object){
            if(object[i].completed==true){      
               newH4.append(`${object[i].id} ${object[i].title}-----Completed `);
               myPage.appendChild(newH4);     
            }
            else{               
              newH4.append(`${object[i].id} ${object[i].title}-----Not completed `); 
               myPage.appendChild(newH4);
            }
         }
      
  })      
      
          }
        )
        .catch(err => {
          alert("Your have error while calling elements");
          });
