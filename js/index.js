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
const messageForm = document.querySelector('[name="leave_message"]');
// needs to have 3 variables for each form submission
// hint is event.target(form) & event.target.userName is the input element
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;
  console.log(usersName);
  console.log(usersEmail);
  console.log(message);
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  event.target.reset();
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> 
<span>${message}</span>`;
});
const removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";
removeButton.addEventListener("click", function () {
  const entry = removeButton.parentNode;
  entry.remove();
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
});
function fetchRepos() {
  fetch("https://api.github.com/users/141bria/repos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const repositories = data;
      console.log(repositories);
      for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement("li");
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
      }
    })
    .catch((error) => {
      console.log(error);
      let errorMessage = document.createElement("li");
      errorMessage.innerText = "Sorry, the projects could not be loaded.";
      projectList.appendChild(errorMessage);
    });
}
const projectSection = document.querySelector("#Projects");
const projectList = projectSection.querySelector("ul");
fetchRepos();
