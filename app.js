const ratingInputForm = document.querySelector("#rating-form");
const submitBtn = document.querySelector(".submit-btn");
const preSubmitCard = document.querySelector("#pre-submit-section");
const postSubmitCard = document.querySelector("#post-submit-section");
const userSelection = document.querySelector(".user-selection");

ratingInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputAns = document.querySelector('input[name="rate"]:checked');
  preSubmitCard.style.display = "none";
  postSubmitCard.style.display = "flex";
  userSelection.textContent = `You selected ${inputAns.value} out of 5`;
});
