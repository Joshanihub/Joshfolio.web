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