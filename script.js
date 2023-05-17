// import 'jquery';
// import 'jquery-ui';


$(document).ready(function() {
  // hide and show div
  hideAndShow();
  // submit form
  submitForm();
});

const hideAndShow = () => {
  $(".link").click(function(e) {
    e.preventDefault();
    var targetDiv = $(this).data("target");
    
    // Hide all divs with animation
    $(".content").fadeOut("slow");
    
    // Show the target div with animation
    $("#" + targetDiv).fadeIn("slow");
  });
}


// submit form
const submitForm = () => {
  $("#registration-form").submit(function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    var name = $("#name").val();
    var email = $("#email").val();
    var age = $("#age").val();
    var gender = $("#gender").val();
    var phone = $("#phone").val();
    var address = $("#address").val();
    var classOption = $("#class").val();

    // Create JSON object
    var formData = {
      name: name,
      email: email,
      age: age,
      gender: gender,
      phone: phone,
      address: address,
      classOption: classOption
    };
// form validator
    if (name === ''||!(isNaN(name))) {
      alert("Name is required and should not include character");
      return ;
    }
    
    if (isNaN(age) || age < 5) {
      alert("Invalid age. Age must be a number and greater than 5");
      return ;
    }
    
    if (gender === '') {
      alert("Gender is required");
      return ;
    }
    
    if (isNaN(phone)) {
      alert("Phone number must contain only numbers");
      return ;
    }
    
    if (classOption === '') {
      alert("Class option is required");
      return ;
    }

    // Retrieve existing form data from localStorage
    var existingData = JSON.parse(localStorage.getItem("formData")) || [];

    // Add the new form data to the existing data
    existingData.push(formData);

    // Convert the array to JSON string
    var jsonData = JSON.stringify(existingData);

    // Store JSON data in localStorage
    localStorage.setItem("formData", jsonData);

    // Reset the form
    this.reset();

    // Hide the registration form
    $("#registration-form").fadeOut("slow", function() {
      // Show the thank you message or the next div
      $("#thankyou").fadeIn("slow");
    });
  });

  $(".submit-btn").click(function() {
    $("#registration-form").submit(); // Trigger form submission
  });
}




// bootstrap carousel config
var myCarousel = document.querySelector('#myCarousel');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // Set the desired interval in milliseconds (e.g., 5000 for 5 seconds)
    wrap: true,     // Enable carousel looping
    pause: false,   // Disable pausing on hover
    touch: false,   // Disable sliding on touch gestures
    keyboard: false // Disable sliding with keyboard arrows
    // Additional options can be added here
  });

// Example starter JavaScript for disabling form submissions if there are invalid fields
   (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  
  