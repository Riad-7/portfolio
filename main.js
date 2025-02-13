// الحصول على العناصر
const contactBtn = document.getElementById("contactBtn");
const instagramIcon = document.getElementById("instagram");
const linkedinIcon = document.getElementById("linkedin");
const githubIcon = document.getElementById("github");

// إضافة حدث النقر على الزر
contactBtn.addEventListener("click", () => {
  // إضافة تأثير الإضاءة للأيقونات
  instagramIcon.classList.add("highlight");
  linkedinIcon.classList.add("highlight");
  githubIcon.classList.add("highlight");

  // إزالة التأثير بعد 2 ثانية
  setTimeout(() => {
    instagramIcon.classList.remove("highlight");
    linkedinIcon.classList.remove("highlight");
    githubIcon.classList.remove("highlight");
  }, 2000); // 2000 مللي ثانية = 2 ثانية
});
