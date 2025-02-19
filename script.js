const scrollButtons = document.querySelectorAll(".scroll-btn");

scrollButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentSection = btn.parentElement;
    const nextSection = currentSection.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((element) => observer.observe(element));

document.addEventListener("DOMContentLoaded", function () {
  fetch("navigation.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the navigation:", error));
});


document.querySelector(".dropbtn").addEventListener("click", function () {
  document.querySelector(".dropdown").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");

  dropdown.addEventListener("click", function () {
    this.querySelector(".dropdown-content").classList.toggle("show");
  });

  window.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      document.querySelector(".dropdown-content").classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("tables.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      let tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      let table1 = tempDiv.querySelector("#input");
      let table2 = tempDiv.querySelector("#output");

      if (table1)
        document.getElementById("input").appendChild(table1);
      if (table2)
        document.getElementById("output").appendChild(table2);
    })
    .catch((error) => console.error("Error loading the tables:", error));
});
