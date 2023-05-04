dataFormModify.addEventListener("submit", event => {
    event.preventDefault();
    let a = document.getElementById('drivernamemodify').value
    let b = document.getElementById('surnamemodify').value
    let c = document.getElementById('documentnumbermodify').value
    let d = document.getElementById('countryListModify').value

    if(!isNaN(a)||!isNaN(b)||!isNaN(c)||!isNaN(d)){
        return false;
    }else{
        document.getElementById('modifyCloseModal').click()
        modifyDriver()
    }
  })
