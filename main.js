const contactBtn = document.getElementById("contactBtn");
const instagramIcon = document.getElementById("instagram");
const linkedinIcon = document.getElementById("linkedin");
const githubIcon = document.getElementById("github");

contactBtn.addEventListener("click", () => {
  instagramIcon.classList.add("highlight");
  linkedinIcon.classList.add("highlight");
  githubIcon.classList.add("highlight");

  setTimeout(() => {
    instagramIcon.classList.remove("highlight");
    linkedinIcon.classList.remove("highlight");
    githubIcon.classList.remove("highlight");
  }, 2000); 
});
