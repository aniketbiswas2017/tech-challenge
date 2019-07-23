var button = document.getElementById("btn");
if(button){
    button.addEventListener("click",getPost);
}
var connection = 0;
var div = document.getElementById("cardDiv");

function getPost(){
    fetch('http://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
        return res.json();
    })
    .then((post)=>{
        for (let index = 0; index < 1; index++) {
            div.innerHTML+=`
            <div class = "card col-3 m-1 mx-auto">
                <img class = "card-img-top" src="${post[connection].thumbnailUrl}">
                <div class = "card-body">
                    <h4 class = "card-title">${post[connection].id}</h4>
                    <p class = "card-text">${post[connection].title}</p>
                </div>
            </div>`
            connection = connection + 1;
        }
    })
    .catch((error)=>{
        console.log(error);
    
    });
}