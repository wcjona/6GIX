var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("images/forest.jfif","images/forest.jpg", "images/wetlab-banner.jpg", "images/HP-Banner.jpg");
