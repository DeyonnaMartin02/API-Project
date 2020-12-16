const baseURL="https://picsum.photos/v2/list?page=2&limit=100" //where we will pull our data from

const section =document.querySelector(".photoDiv");

fetch(baseURL)                          //Focus on the FETCH FIRST //HTML is just to display
.then(function (result) {
    return result.json();
 })
.then(function (json) {
    console.log(json);
    displayResults(json);
});

//declare a display function, (called in fetch) and passed it the json object(can give new/same variable name){
function displayResults(passJson){

// console.log your object variable that is passed into the display function 
    console.log(passJson);

//build a forEach to display each object in the array {
    passJson.forEach((picture) => {
    //build and create the html tags
    let pictureDiv = document.createElement("div");
    let pictureImage= document.createElement("img");

    // set.attribute will give new elements id's or classes
        pictureDiv.setAttribute("class","picDiv");
        pictureImage.setAttribute("class", "picImg");    

    //set the elements and object paths to one another, ex set img src to objects url string
        pictureImage.src = picture.download_url;

    //appendChild items to where they belong in the html or other created elements
        section.appendChild(pictureDiv);
        pictureDiv.appendChild(pictureImage);
        
    }) 	
}
