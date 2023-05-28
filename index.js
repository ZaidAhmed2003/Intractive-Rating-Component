// Initialize variables for DOM manipulations
const ratingBtn = document.querySelectorAll('input[name="rate"]');
const rating = document.querySelector(".rate");
const submitBtn = document.querySelector(".btn");
const isShow = document.querySelector(".card");
const isHidden = document.querySelector(".card-2");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  ratingBtn.forEach((rate) => {
    if (rate.checked) {
      rating.textContent = rate.value;
      isHidden.classList.remove("hidden");
      isShow.classList.add("hidden");
    }
  });
});
