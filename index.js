var skillsEl = document.getElementById("skills-list");

var skills = [
  { name: "HTML", endorcement: 5 },
  { name: "CSS", endorcement: 4 },
  { name: "JS", endorcement: 3 },
  { name: "Drive", endorcement: 2 },
];
//var skills = [["HTML, 5"], ["CSS", 3], ["JS"], ["Drive"]];
// var endorcement = [5, 6, 5, 1];
var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  console.info(skills[i].endorcement);
  skillsHTML +=
    "<li>" + skills[i].name + " - " + skills[i].endorcement + "</li>";
}

skillsEl.innerHTML = skillsHTML;

function hideAllPages() {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        //var id = e.target.dataset.page;
        displayPage(id);
      }
    });
}

displayPage("skills");
initMenu();
