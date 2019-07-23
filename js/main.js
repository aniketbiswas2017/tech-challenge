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

async function fetchAlbumAsync(){
    let response = await fetch('https://jsonplaceholder.typicode.com/albums');
    let post = await response.json();
    return post;
}

async function fetchUserAsync(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let post = await response.json();
    return post;
}

function loadAlbum(){
    fetchAlbumAsync()
    .then((post)=>{
        for (let index = 0; index < 10; index++) {
            div.innerHTML+=`
            <div class="card-columns" style="width:1200px">
            <div class="col-sm-6">
                <img class="card-img-top" src="assets/img/album.png" alt="Card image" style="width:50%">
                    <div class="card-body">
                        <h4 class="card-title">ID: ${post[connection].id}</h4>
                        <p class = "card-text">Title: ${post[connection].title}</p>
                        <a href="#" class="btn btn-primary stretched-link">See Album</a><br>                       
                    </div>
                </div>
            </div>`
    
            connection = connection + 1;
        }
    })
    .catch((error)=>{
        console.log(error);
    
    });
}

function loadUser(){
    fetchUserAsync()
    .then((post)=>{
        for (let index = 0; index <= 10; index++) {
            div.innerHTML+=`
            <div class="card-columns" style="width:500px">
            <div class="col-sm-6">
                <img class="card-img-top img-fluid" src="assets/img/album.png" alt="Card image" style="width:50%">
                    <div class="card-body">
                        <p class = "card-text">${post[connection].name}</p>
                        <p class = "card-text">${post[connection].username}</p>
                        <p class = "card-text">${post[connection].email}</p>
                        <a href="#" class="btn btn-primary stretched-link">Select User</a><br>                       
                    </div>
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
            <div class="card-columns" style="width:900px">
            <div class="col-sm-8">
                <img class="card-img-top img-fluid" src="${post[connection].thumbnailUrl}" alt="Card image" style="width:50%">
                    <div class="card-body">
                        <h4 class = "card-title">ID: ${post[connection].id}</h4>
                        <p class = "card-text">${post[connection].title}</p>                                              
                    </div>
                </div>
            </div>`
            connection = connection + 1;
        }
    })
    .catch((error)=>{
        console.log(error);
    
    });
}