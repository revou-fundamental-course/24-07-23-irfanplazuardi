function validateForm() {
    // Get the input values
    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const destinationInput = document.getElementById('destination').value;

    // Check if all fields are empty
    if (!nameInput || !emailInput || !destinationInput) {
      alert('Please fill in all the fields.');
      return false;
    }

    // Show success message and display data
    const successMessage = `Data entry success! Name: ${nameInput}`;
    alert(successMessage);

    // Display data in the HTML
    const dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = successMessage;

    // Clear the form after successful submission (optional)
    document.getElementById('formInput').reset();

    return false; 
  }



// automatic slideshow image
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");

    //   slide increament index + 1
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

   // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}

showSlides();