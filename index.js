const inputElements = document.querySelectorAll("from input, textarea");
const formElement = document.querySelector("form");
const submitButtonElement = document.querySelector("#contact button");
const successDisplayElement = document.querySelector(".success-display");
const downloadResumeButton = document.querySelector('#hero button');

for (const element of inputElements) {
  element.addEventListener("blur", () => {
    element.classList.add("touched");
  });
}

formElement.addEventListener("keyup", () => {
  submitButtonElement.disabled = formElement.checkValidity() === false;
});

submitButtonElement.addEventListener("click", (e) => {
  e.preventDefault();

  const contact = {};
  contact.name = document.querySelector("form input[name=name]").value;
  contact.email = document.querySelector("form input[name=email]").value;
  contact.solutionType = document.querySelector(
    "form input[name=solution-type]"
  ).value;
  contact.message = document.querySelector("form textarea").value;

  fetch("https://portifolio-backend.azurewebsites.net/", {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      "Content-Type": "application/json"
    }
  });

  formElement.style.display = "none";
  successDisplayElement.style.display = "block";
});

downloadResumeButton.addEventListener("click", (e) => {
  e.preventDefault();
  const aDownloadResume = document.createElement('a');
  aDownloadResume.download = 'pedro-henrique-araujo';
  aDownloadResume.href = './resume.pdf';

  aDownloadResume.click();
});