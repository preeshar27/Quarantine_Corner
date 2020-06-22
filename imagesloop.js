
function loopimages(){    
    var image = new Array(15);
    image[0] = "images/monday1.jpg";
    image[1] = "images/tuesday1.jpg";
    image[2] = "images/wednesday1.jpg";
    image[3] = "images/thursday1.jpg";
    image[4] = "images/friday1.jpg";
    image[5] = "images/saturday1.jpg";
    image[6] = "images/sunday1.jpg";
    image[7] = "images/monday2.jpg";
    image[8] = "images/tuesday2.jpg";
    image[9] = "images/wednesday2.jpg";
    image[10] = "images/thursday2.jpg";
    image[11] = "images/friday2.jpg";
    image[12] = "images/saturday2.jpg";
    image[13] = "images/sunday2.jpg";
    image[14] = "images/skipday.jpg";

    var link = new Array(15);
    link[0] = "https://www.customink.com/services/t-shirt-maker";
    link[1] = "https://onedishkitchen.com/two-ingredient-chocolate-cake-recipe-for-one/";
    link[2] = "https://brush.ninja/";
    link[3] = "https://www.adobe.com/ca/products/xd.html";
    link[4] = "https://www.bakedbyanintrovert.com/best-ever-banana-bread-recipe/#_a5y_p=4907675";
    link[5] = "https://www.youtube.com/watch?v=pdtf6bnUpzk";
    link[6] = "https://www.youtube.com/watch?v=BBz-Jyr23M4";
    link[7] = "https://365project.org/";
    link[8] = "https://www.stelvision.com/en/sky-map/";
    link[9] = "https://merlin.allaboutbirds.org/photo-id/";
    link[10] = "https://www.youtube.com/watch?v=TGDr7xCz1rY";
    link[11] = "http://www.leaf-id.com/node/1103/89/89?tid=91";
    link[12] = "https://www.cbc.ca/kidscbc2/the-feed/worlds-easiest-card-trick"; 
    link[13] = "https://www.travelandleisure.com/attractions/museums-galleries/museums-with-virtual-tours";
    link[14] = "https://peasandcrayons.com/2012/10/homemade-sushi-tips-tricks-and-toppings.html?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=999941208_44796538_140378";
    
    var title = new Array(15);
    title[0] = "Order a custom t-shirt using your own design!";
    title[1] = "2 ingredient chocolate cake";
    title[2] = "Create a short flipbook animation!";
    title[3] = "Create an app prototype with Adobe XD for free!";
    title[4] = "The best banana bread";
    title[5] = "20 minute workout ";
    title[6] = "Learn how to play guitar";
    title[7] = "Learn photography by taking a photo every day";
    title[8] = "Find constellations";
    title[9] = "Find some cool birds and identify them using an AI!";
    title[10] = "Miss those Starbucks frappuccinos? Make them at home!";
    title[11] = "Go out and collect some leaves! And use this site to learn more about the environment around you!";
    title[12] = "Learn a magic trick!";
    title[13] = "Visit museums and galleries from the comfort of your own home";
    title[14] = "Learn to make sushi at home";

    var imagenumber = Math.floor(Math.random() * 15);
    var innerstuff = "<a href = \"" + link[imagenumber] + "\"></a>";
    var imagechosen = "url(" + image[imagenumber] + ")";
    document.body.style.backgroundImage = imagechosen;
    document.getElementById("bgid").innerHTML = innerstuff;
    document.getElementById("todaystask").innerHTML = title[imagenumber] + "<br><br> Click Me!";

    document.getElementById("todaystask").onclick = function(){
window.location.href = link[imagenumber];
    
}
    };

document.addEventListener('DOMContentLoaded', function () {
    loopimages();
   });

