function toggleMenu() {
  document.querySelector(".navlinks").classList.toggle("open");
}

function closeMenu() {
  document.querySelector(".navlinks").classList.remove("open");
}

// ----------------------------------------------------------------------

function searchPosts() {
  let input = document.getElementById("search").value.toLowerCase();
  let posts = document.getElementsByClassName("blog-post");

  for (let post of posts) {
    let title = post.getElementsByTagName("h2")[0].innerText.toLowerCase();
    let content = post.getElementsByTagName("p")[0].innerText.toLowerCase();

    if (title.includes(input) || content.includes(input)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  }
}

// ------------------------------------------------------------------------------

// read more button

let anchors = document.getElementsByClassName("read-more");
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", function (event) {
    event.preventDefault();
    let anchor = event.target;
    let extraContent = anchor.previousElementSibling;

    if (
      extraContent.style.display === "none" ||
      extraContent.style.display === ""
    ) {
      extraContent.style.display = "inline";
      anchor.style.display = "none";
    }
  });
}

// ---------------------------------------------------------------------------------------

// Form Submission Confirmation
function submitForm(event) {
  event.preventDefault();
  alert("Your message has been sent successfully!");
  document.querySelector(".contact-form form").reset();
}
