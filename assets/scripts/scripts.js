document.querySelector('.search').addEventListener('submit', async (event) => {
    event.preventDefault();

    const moeda = document.querySelector('#nome').value;
    console.log(moeda)

    if (!moeda) {
        document.querySelector("#info").classList.remove('show');
        showAlert('Você precisa digitar uma moeda...');
        return;
    }

    const apiUrl = `https://economia.awesomeapi.com.br/json/last/${encodeURI(moeda)}`;

    const results = await fetch(apiUrl);
    const json = await results.json();
    for (const x in json){
        valor = x
    }
    showInfo({
        cotaçao: json[valor]['bid']
    })
}); 

function showInfo(json){
    document.querySelector('#title').innerHTML = `R$ ${json.cotaçao}`;
}
