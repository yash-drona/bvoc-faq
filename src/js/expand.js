const faqWrappers = document.querySelectorAll(".faq-wrapper");

faqWrappers.forEach((wrapper) => {
  const expandButton = wrapper.querySelector(".faq__expand");

  expandButton.addEventListener("click", () => {
    wrapper.classList.toggle("expanded");
    if (expandButton.innerText === "+") expandButton.innerText = "-";
    else expandButton.innerText = "+";
  });
});
