// Get the image element
const myImage = document.getElementById('my-image');

// Create a new image element for the flame
const flameImage = document.createElement('img');
flameImage.src = 'images/flame.png';
flameImage.alt = 'Flame';
flameImage.classList.add('flame');

// Add the flame image to the container
myImage.parentElement.parentElement.appendChild(flameImage);
