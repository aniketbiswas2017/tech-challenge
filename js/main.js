var button = document.getElementById("btn");
if(button){
    button.addEventListener("click",loadPhotos);
}
var div = document.getElementById("cardDiv");
var button = document.getElementById("switch");
if(button){
    button.addEventListener("click",onLoaded);
}
var button = document.getElementById("album");
if(button){
    button.addEventListener("click",loadAlbum);
}
var connection = 0;

async function fetchAsync(){
    let response = await fetch('https://jsonplaceholder.typicode.com/albums');
    let post = await response.json();
    return post;
}

function loadAlbum(){
    fetchAsync()
    .then((post)=>{
        for (let index = 0; index < 10; index++) {
            div.innerHTML+=`
            <div class="card" style="width:300px" color>
                <img class="card-img-top" src="assets/img/album.png" alt="Card image" style="width:50%">
                    <div class="card-body">
                        <h4 class="card-title">ID: ${post[connection].id}</h4>
                        <p class = "card-text">Title: ${post[connection].title}</p>
                        <a href="#" class="btn btn-primary stretched-link">See Album</a><br>                       
                    </div>
            </div>`
    
            connection = connection + 1;
        }
    })
    .catch((error)=>{
        console.log(error);
    
    });
}

function loadPhotos(){
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


function onLoaded(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        return res.json();
    })
    .then((post)=>{
        for (let index = 0; index < 1; index++) {
            div.innerHTML+=`
            <div class = "card col-3 m-1 mx-auto">
                <p class = "card-text">${post[connection].name}</p>
                <p class = "card-text">${post[connection].username}</p>
                <p class = "card-text">${post[connection].email}</p>
            
            </div>`
            connection = connection + 1;
        }
    })
    .catch((error)=>{
        console.log(error);
    
    });
}