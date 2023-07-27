/**
 * The form element stored in a variable for ease of use
 */
const form = document.querySelector("[data-form]");

/**
 * The result div stored in a variable for ease of use
 */
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  /**
   * Values used to do arithmetic stored in a object
   */
  const entries = new FormData(event.target);
  /**
   * Values stored in entries destructured and stored inside their own repective variables
   */
  const { dividend, divider } = Object.fromEntries(entries);

  if (dividend === "" || divider === "") {
    /**
     * Error thrown if one or both of the values are empty
     */
    result.innerHTML =
      "Division not performed. Both values are required in inputs. Try again";
  } else if (dividend < 0 || divider < 0) {
    /**
     * Error thrown if invalid numbers are entered
     */
    result.innerHTML =
      "Division not performed. Invalid number provided. Try again";
    /**
     * Error thrown in console if invalid numbers are entered
     */
    throw new Error(
      "Division not performed. Invalid number provided. Try again"
    );
  } else if (isNaN(dividend) || isNaN(divider)) {
    /**
     * Error thrown when one or both values are not of the number type
     */
    result.innerHTML = "Something critical went wrong. Please reload the page";
    throw new Error();
  } else {
    result.innerText = `${Math.floor(dividend / divider)}`;
  }
});
