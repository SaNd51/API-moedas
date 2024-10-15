document.querySelector('.search').addEventListener('submit', async (event) => {
    event.preventDefault();

    const moeda1 = document.querySelector('#val1').value;
    const moeda2 = document.querySelector('#val2').value;
    const qtd = document.querySelector('#valor').value;
    
    if (!qtd){
        document.querySelector("#info").classList.remove('show');
        showAlert('Você precisa digitar um número!');
        return;
    }
    
    const apiUrl = `https://economia.awesomeapi.com.br/json/last/${encodeURI(moeda1)}-${encodeURI(moeda2)}`;
    console.log(apiUrl)

    const results = await fetch(apiUrl);
    const json = await results.json();
    console.log(json)
    for (const x in json){
        valor = x
    }
    showInfo({
        soma: json[valor]['bid']*qtd,
    })
}); 

function showInfo(json){
    if(json.soma){
        document.querySelector('#title').innerHTML = `Resultado: ${json.soma}`;
    }else{
        document.querySelector('#title').innerHTML = `Selecione uma moeda diferente`;
    }
}

function showAlert(text){
    document.querySelector('#title').innerHTML = `${text}`;
}
 