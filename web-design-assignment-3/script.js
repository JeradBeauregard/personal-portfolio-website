window.onload = pageReady;

function pageReady(){

    // variables for all the gallery images

    var image1 = document.getElementById("galleryImage1");
    var image2 = document.getElementById("galleryImage2");
    var image3 = document.getElementById("galleryImage3");
    var image4 = document.getElementById("galleryImage4");
    var image5 = document.getElementById("galleryImage5");
    var image6 = document.getElementById("galleryImage6");

    // default gallery display 

    var defaultImage = document.getElementById("defaultDisplay");

    // listeners to get on click

    image1.onclick = switchImage1;
    image2.onclick = switchImage2;
    image3.onclick = switchImage3;
    image4.onclick = switchImage4;
    image5.onclick = switchImage5;
    image6.onclick = switchImage6;

    // functions to switch pics

    function removeBorders(){

        image1.style.border = "none";
        image2.style.border = "none";
        image3.style.border = "none";
        image4.style.border = "none";
        image5.style.border = "none";
        image6.style.border = "none";
    }

    function switchImage1(){

        defaultImage.src = image1.src;
        removeBorders();
        image1.style.border = "2px solid white";

    }
    function switchImage2(){

        defaultImage.src = image2.src;
        removeBorders();
        image2.style.border = "2px solid white";

    }
    function switchImage3(){

        defaultImage.src = image3.src;
        removeBorders();
        image3.style.border = "2px solid white";

    }
    function switchImage4(){

        defaultImage.src = image4.src;
        removeBorders();
        image4.style.border = "2px solid white";

    }
    function switchImage5(){

        defaultImage.src = image5.src;
        removeBorders();
        image5.style.border = "2px solid white";

    }
    function switchImage6(){

        defaultImage.src = image6.src;
        removeBorders();
        image6.style.border = "2px solid white";

    }

    //menu functioning

    var mobileNav = document.getElementById("menuContainer");
    var menu = document.getElementById("mobileMenu");
    
    menu.onclick = dropDown;
    
    function dropDown() {
        if(mobileNav.id === "menuContainer"){
       mobileNav.id = "menuContainerOn";
       menu.innerHTML = "CLOSED";
        }
        else{
            mobileNav.id = "menuContainer";
            menu.innerHTML = "MENU";
             }
    }
    




}
