const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (dividend === "" || divider === "") {
    result.innerHTML =
      "Division not performed. Both values are required in inputs. Try again";
  } else if (dividend < 0 || divider < 0) {
    result.innerHTML =
      "Division not performed. Invalid number provided. Try again";
    throw new Error(
      "Division not performed. Invalid number provided. Try again"
    );
  } else if (isNaN(dividend) || isNaN(divider)) {
    result.innerHTML = "Something critical went wrong. Please reload the page";
    throw new Error();
  } else {
    result.innerText = `${Math.floor(dividend / divider)}`;
  }
});
