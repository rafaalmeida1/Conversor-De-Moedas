let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";

let title = document.getElementById("title");
let h2 = document.getElementById("result");
let input = document.getElementById("value")

function conversorEuro(){
    
    fetch(url)
    .then((res) => {
        return res.json();
        })
        .then((data) => {
            var rate = data.EURBRL.ask;
            let result = `R$${(input.value * rate).toFixed(2)}`;
            h2.innerText = result;
        })
}

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    var rate = data.EURBRL.ask;
    cotacao.innerText = rate;
  });