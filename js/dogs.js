console.log("Dogs JS is connected");
const dogDisplay = document.querySelector("#dog-display");
const breedDisplay = document.querySelector("#breed-display");
const dogPictureButton = document.querySelector("#dog-picture");
dogPictureButton.addEventListener("click", function () {
  console.log("Button clicked!");
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      dogDisplay.innerHTML = `<img src="${data.message}" alt = "Random Dog">`;
    })
    .catch(function (error) {
      console.log(error);
    });
});
const dogBreedButton = document.querySelector("#dog-breed");
dogBreedButton.addEventListener("click", function () {
  console.log("Breed button was clicked");
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(Object.keys(data.message));
      breedDisplay.innerHTML = Object.keys(data.message)[0];
    })
    .catch(function (error) {
      console.log(error);
    });
});
