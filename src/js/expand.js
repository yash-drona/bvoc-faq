const faqWrappers = document.querySelectorAll(".faq-wrapper");

faqWrappers.forEach((wrapper) => {
  const expandButton = wrapper.querySelector(".faq__expand");
  const faqAnswer = wrapper.querySelector(".faq__answer");

  expandButton.addEventListener("click", () => {
    faqAnswer.classList.toggle("expanded");
    if (expandButton.innerText === "+") expandButton.innerText = "-";
    else expandButton.innerText = "+";
  });
});
