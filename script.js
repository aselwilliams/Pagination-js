const tableBody = document.querySelector('.info')

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data =>{
    console.log(data)
    
   for (let i=0; i<data.length; i++){
       tableBody.innerHTML+=`
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].email}</td>
            <td>${data[i].name}</td>
            <td>${data[i].postId}</td>
        </tr>`
   }

})