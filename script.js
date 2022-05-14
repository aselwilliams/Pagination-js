const tableBody = document.querySelector('.info');
const nextBtn=document.querySelector('.next')
const prevBtn=document.querySelector('.prev')
const data=[]

renderData=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        // const data=data
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
    
    let pageNumber=0;
    let limit=20;
    const lastPage=Math.ceil(data.length/limit)
    const start=pageNumber*limit;
    const end= (pageNumber+1) *limit
    
    if(pageNumber===0){
        prevBtn.disabled=true
    } else {
        prevBtn.disabled=false
    }
    if(pageNumber===lastPage){
        nextBtn.disabled=true
    } else {
        nextBtn.disabled=false;
    }
    
    const partialData= data.slice(start, end)
    console.log(partialData)
}
renderData()
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(response => response.json())
// .then(data =>{
//     console.log(data)
//     // const data=data
//    for (let i=0; i<data.length; i++){
//        tableBody.innerHTML+=`
//         <tr>
//             <td>${data[i].id}</td>
//             <td>${data[i].email}</td>
//             <td>${data[i].name}</td>
//             <td>${data[i].postId}</td>
//         </tr>`
//    }

// })

// let pageNumber=0;
// let limit=20;
// const lastPage=Math.ceil(data.length/limit)
// const start=pageNumber*limit;
// const end= (pageNumber+1) *limit

// if(pageNumber===0){
//     prevBtn.disabled=true
// } else {
//     prevBtn.disabled=false
// }
// if(pageNumber===lastPage){
//     nextBtn.disabled=true
// } else {
//     nextBtn.disabled=false;
// }

// const partialData= data.slice(start, end)
// console.log(partialData)