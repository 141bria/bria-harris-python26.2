const footer = document.createElement("footer");
document.body.append(footer);
const today = new Date();
const thisYear = new Date().getFullYear();
const copyright = "© Bria " + thisYear;
const p = document.createElement("p");
p.textContent = copyright;
footer.appendChild(p);
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Avature",
  "Paylocity",
  "Oracle Fusion",
];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
skills.forEach(function (skill) {
  const skillItem = document.createElement("li");
  skillItem.innerText = skill;
  skillsList.appendChild(skillItem);
  console.log(skill);
});
