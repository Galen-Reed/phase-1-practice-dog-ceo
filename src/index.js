console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    challengeOne();
    challengeTwo();
    challengeThree();
    challengeFour();
});

function challengeOne() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const imageUrls = data.message;
            if (Array.isArray(imageUrls)) {
                imageUrls.forEach(url => renderDogs(url));
            } else {
                console.error('Unexpected data format:', data);
            }
        })
        .catch(error => console.error('Error fetching dog images:', error));
}

function challengeTwo() {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => {
            return response.json();
        })
        .then(data => {
            const dogBreeds = data.message;
            Object.keys(dogBreeds).forEach(breedName => breedList(breedName));
        })
        .catch(error => console.error('Error fetching dog breeds', error));
}

function challengeThree() {
    let ul = document.getElementById('dog-breeds')
    ul.addEventListener("click", function(event) {
     
        if (event.target.tagName === 'LI') {
            if (event.target.style.color === 'red') {
                event.target.style.color = 'gray'
            } else {
                event.target.style.color = 'red'; 
            }
        }
        
    });
}

function challengeFour() {
    const dropdown = document.getElementById("breed-dropdown")
    dropdown.addEventListener("change", function(event) {
        const selectedLetter = event.target.value;
        const allBreeds = document.querySelectorAll("#dog-breeds li");

        allBreeds.forEach(li => {
            if (selectedLetter === 'all' || li.textContent.startsWith(selectedLetter)) {
                li.style.display = "";
            } else {
                li.style.display = "none";
            }
        });
    });
}

function renderDogs(url) {
    let img = document.createElement('img');
    img.src = url;
    document.getElementById("dog-image-container").appendChild(img);
}

function breedList(breedName) {
    let li = document.createElement('li');
    li.setAttribute("id", "dog-breeds-list");
    li.textContent = breedName;
    document.getElementById("dog-breeds").appendChild(li);
}
