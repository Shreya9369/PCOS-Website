// function toggleMenu(x) {
//   // Toggle hamburger icon animation
//   x.classList.toggle("change");

//   // Toggle sidebar open/close
//   const sidebar = document.getElementById("sidebar");
//   if (sidebar.style.width === "250px") {
//     sidebar.style.width = "0";
//   } else {
//     sidebar.style.width = "250px";
//   }
// }

function toggleMenu(x) {
  x.classList.toggle("change"); // hamburger animation
  document.querySelector(".sidebar").classList.toggle("open"); // sidebar toggle
}

// document.getElementById("signupForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // prevent actual form submission

//   // Optionally, you could validate or store data here

//   // Hide the auth box
//   document.getElementById("authBox").style.display = "none";

//   // You can show a message if needed
//   alert("Signed up successfully!");
// });

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = this.elements[0].value;
  const email = this.elements[1].value;
  const password = this.elements[2].value;

  // Save user data
  localStorage.setItem("pcosUser", JSON.stringify({ name, email }));

  alert("Signed up successfully!");

  // Just hide the signup box (don't redirect)
  document.getElementById("authBox").style.display = "none";
});

document.addEventListener("click", function(event) {
  const authBox = document.getElementById("authBox");

  // If authBox is visible and click is outside of it
  if (authBox.style.display !== "none" && !authBox.contains(event.target)) {
    authBox.style.display = "none";
  }
});



// // About section ------------------------------
// function openModal() {
//   document.getElementById('aboutModal').style.display = 'flex';
//   document.body.classList.add('modal-open');
// }

// function closeModal() {
//   document.getElementById('aboutModal').style.display = 'none';
//   document.body.classList.remove('modal-open');
// }

// // Servicessssssssss
// function openServicesModal() {
//   document.getElementById('servicesModal').style.display = 'flex';
//   document.body.classList.add('modal-open');
// }

// function closeServicesModal() {
//   document.getElementById('servicesModal').style.display = 'none';
//   document.body.classList.remove('modal-open');
// }


function openModal() {
  document.getElementById('aboutModal').style.display = 'flex';
  document.body.classList.add('modal-open');
}

function closeModal() {
  document.getElementById('aboutModal').style.display = 'none';
  document.body.classList.remove('modal-open');
}

function openServicesModal() {
  document.getElementById('servicesModal').style.display = 'flex';
  document.body.classList.add('modal-open');
}

function closeServicesModal() {
  document.getElementById('servicesModal').style.display = 'none';
  document.body.classList.remove('modal-open');
}


// Contact
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Contact

  function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

