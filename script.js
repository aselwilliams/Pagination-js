const tableBody = document.querySelector('.info')

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(json =>{
    console.log(json)
   for (let i=0; i<data.length; i++){
       tableBody.innerHTML+=`
       `
   }

})