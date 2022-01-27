
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(object => {  document.getElementById("jsonCall").addEventListener("click",function(){
    let myPage = document.getElementById("firstDiv");
          console.log(object);
         for(let i of object){
            if(i.completed==true){      
              myPage.innerHTML += `<div>${i.id} ${i.title}-----Completed </div>`;     
            }
            else{               
              myPage.innerHTML += `<div>${i.id} ${i.title}-----Not completed </div>`;
            }
         }
      
  })      
      
          }
        )
        .catch(err => {
          alert("Your have error while calling elements");
          });
