// listing the cats
async function getCat( ) {
    const response = await fetch("https://cataas.com/api/cats");
    const data = await response.json();
    show(data);
}
getCat();
function show (data){
    let tab =
    `<tr>
    <th>id</th>
    <th>created_at</th>
    <th>tags</th>
    }
    </tr>`;

    for (let r of data) {
       tab += `<tr> 
    <td>${r.id} </td>
    <td>${r.created_at}</td>
    <td>${r.tags}</td>            
    </tr>`; 
    }
    var catResult = document.createElement("table");
    catResult.innerHTML = tab;
    catResult.style.background = "burlywood";
    catResult.style.textAlign = "center";
    catResult.style.margin = "10px";  
    catResult.style.width = "100%"; 
    catResult.style.border = "2px solid black";
    document.body.appendChild(catResult);    
}
//to filter the cute tag dogs
async function filter() {
    const response = await fetch("https://cataas.com/api/cats?tags=cute");
    const data = await response.json();    
    document.body.innerHTML = ` `;        
    show(data);    
}
// to display the image
fetch( prompt("enter the image url", "https://cataas.com/cat/"))
    .then((response)=>response.blob())
    .then((blob)=>{
       var objectUrl = URL.createObjectURL(blob)
       document.querySelector("#myImage").src=objectUrl;
    })
    
    