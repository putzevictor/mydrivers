const dataContainer = document.getElementById("driversContainer")
let isLoading = false

document.addEventListener('DOMContentLoaded', () => {
    loadData();
})

async function loadData(){
    try{
        const response = await fetch(url)
        const data = await response.json()
        appendData(data)
    }catch(err){
        console.error(err)
    }
}

function appendData(data){
    const html = Object.values(data).map(({id, name, surname, visitedCountries}) => (addDriver(id, name, surname, visitedCountries))).join('');
    dataContainer.insertAdjacentHTML('beforeend', html);
}

window.addEventListener('scroll', () => {
    if(isLoading) return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        isLoading = true;
        loadMore();
      }
})

async function loadMore() {
  try {
    const offset = dataContainer.children.length;
    const response = await fetch(`${url}?offset=${offset}`);
    const data = await response.json();
    document.querySelector('.spinner').style.visibility = 'visible';

    setTimeout(() => {
      appendData(data);
      isLoading = false;
      document.querySelector('.spinner').style.visibility = 'collapse';
    }, 1000);
  } catch (err) {
    console.error(err);
  }
}
