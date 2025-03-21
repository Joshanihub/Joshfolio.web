let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}

function showMore(event) {
  event.preventDefault(); // Add this line to prevent default link behavior

  const moreContent = document.getElementById("more-content");
  const readMoreButton = document.querySelector(".btnr");

  if (moreContent.style.display === "none" || moreContent.style.display === "") {
    moreContent.style.display = "block";
    readMoreButton.textContent = "Show Less";
  } else {
    moreContent.style.display = "none";
    readMoreButton.textContent = "Read More";
  }
}



document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Gather form data
  const formData = new FormData(this);

  // Send the data to a server or email service
  fetch('YOUR_SERVER_ENDPOINT', {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (response.ok) {
          alert('Message sent successfully!');
          this.reset(); // Reset the form
      } else {
          alert('There was a problem sending your message!');
      }
  })
  .catch(error => {
      alert('Error: ' + error.message);
  });
});





(function(){
  emailjs.init("service_q8l0x49"); // Replace with your EmailJS User ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  emailjs.sendForm('service_q8l0x49', 'template_b23p8cz', this) // Replace with your EmailJS service and template IDs
      .then(function() {
          alert('Message sent successfully!');
          document.getElementById('contact-form').reset(); // Reset the form
      }, function(error) {
          alert('Error: ' + JSON.stringify(error));
      });
});



document.getElementById('play-music').addEventListener('click', function() {
  var music = document.getElementById('background-music');
  var button = document.getElementById('play-music');

  if (music.paused) {
    music.play();
    button.textContent = "Pause Music";
  } else {
    music.pause();
    button.textContent = "Play Music";
  }
});
