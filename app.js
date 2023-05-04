const newDataForm = document.getElementById("createDriverForm");

newDataForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(newDataForm);
  fetch("http://localhost:3000/data", {
    method: "POST",
    body: formData,
    mode: 'cors'
  })
  .then(response => {
    response.json()
  })
  .catch(e => console.log(e))
});

/*
fetch("http://localhost:3000/data", {
  method: "GET"
})
*/