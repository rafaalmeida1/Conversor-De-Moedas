let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";

let title = document.getElementById("title");
let h2 = document.getElementById("result");
let input = document.getElementById("value")

function conversorBtc(){
    
    fetch(url)
    .then((res) => {
        return res.json();
        })
        .then((data) => {
            var rate = data.BTCBRL.ask;
            let result = `R$${input.value * rate}`;
            h2.innerText = result;
        })
}

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    var rate = data.BTCBRL.ask;
    cotacao.innerText = rate;
  });