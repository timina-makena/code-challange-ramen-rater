document.addEventListener("DOMContentLoaded", function() {
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenName = document.getElementById("ramen-name");
    const ramenImage = document.getElementById("ramen-image");
    const ramenRestaurant = document.getElementById("ramen-restaurant");
    const ramenRating = document.getElementById("ramen-rating");
    const ramenComment = document.getElementById("ramen-comment");
    
    const newRamenForm = document.getElementById("new-ramen-form");
    
    const ramens = [
        { name: "Gyukotsu Ramen", restaurant: "Yakitori", image: "images/gyukotsu.jpg", rating: 8, comment: "Tasty broth elastic pasta!" },
        { name: "Kojiro Ramen", restaurant: "Menya", image: "images/kojiro.jpg", rating: 7, comment: "Good but too salty" },
        { name: "Naruto Ramen", restaurant: "Kaisen", image: "images/naruto.jpg", rating: 9, comment: "Very rich flavor!" },
        { name: "Nirvana Ramen", restaurant: "Sukiyaki", image: "images/nirvana.jpg", rating: 6, comment: "A bit plain for me" },
        { name: "Shoyu Ramen", restaurant: "Jujutsu", image: "images/shoyu.jpg", rating: 10, comment: "Perfectly spiced!" }
    ];

    function displayRamens() {
        ramens.forEach(ramen => {
            let img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;

            img.addEventListener("click", function() {
                ramenName.textContent = ramen.name;
                ramenImage.src = ramen.image;
                ramenRestaurant.textContent = ramen.restaurant;
                ramenRating.textContent = ramen.rating;
                ramenComment.textContent = ramen.comment;
            });

            ramenMenu.appendChild(img);
        });
    }

    newRamenForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        const newName = document.getElementById("new-name").value;
        const newRestaurant = document.getElementById("new-restaurant").value;
        const newImage = document.getElementById("new-image").value;
        const newRating = document.getElementById("new-rating").value;
        const newComment = document.getElementById("new-comment").value;

        
        const newRamen = {
            name: newName,
            restaurant: newRestaurant,
            image: newImage,
            rating: parseInt(newRating),
            comment: newComment
        };

        
        ramens.push(newRamen);
        displayRamens();

        
        newRamenForm.reset();
    });

    displayRamens();
});
