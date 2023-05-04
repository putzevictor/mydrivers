
const url = "http://localhost:3000/data"
const dataFormCreate = document.getElementById("createDriverForm");
const dataFormModify = document.getElementById("modifyDriverForm")
const amegojalufo = "KEPASAMEGO"

dataFormCreate.addEventListener("submit", (event) => {
  event.preventDefault();
  const formDataCreate = new FormData(dataFormCreate);
  fetch(url, {
    method: "POST",
    body: formDataCreate,
    mode: 'cors'
  })
  .then(response => {
    document.getElementById('driversContainer').innerHTML="";
    obtainDrivers();
  })
  .catch(e => console.log(e))
});

function obtainDrivers(){ 
  fetch(url, {
    method: "GET"
  })
  .then((res) => res.json())
  .then((json) => {
    Object.values(json).map(({id, name, surname, visitedCountries}) => (addDriver(id, name, surname, visitedCountries)))
  })
}

  function deleteDrivers(DNV){
    fetch(url+`/${DNV}`,{
      method: 'DELETE'
    })
      .then(response => {
        document.getElementById('driversContainer').innerHTML="";
        obtainDrivers();
        response.json()
      })
      .catch(error => console.log(error))
  }

  function modifyDriver() {
    const formDataModify = new FormData(dataFormModify)
    fetch(url+`/${DNVmodify}`,{
      method: 'PUT',
      body: formDataModify,
      mode: 'cors'
    })
    .then(response => {
      document.getElementById('driversContainer').innerHTML="";
      obtainDrivers();
    })
    .catch(error => console.log(error))
  }
