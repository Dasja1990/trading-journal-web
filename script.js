// Portfolio table renderer
function renderPortfolio() {
    const table = document.getElementById("portfolio");
    
    table.innerHTML = `
        <tr>
            <th>Asset</th>
            <th>Amount</th>
            <th>Avg Entry Price</th>
            <th>Current Value</th>
        </tr>
    `;
    
    tradeHistory.forEach(trade => {
        const row = table.insertRow();
        row.insertCell(0).textContent = trade.asset;
        row.insertCell(1).textContent = trade.amount;
        row.insertCell(2).textContent = trade.price;
        row.insertCell(3).textContent = (trade.amount * trade.price).toFixed(2);
    });
}


// Updated addTrade
function addTrade(asset, amount, price) {
    const trade = {
        asset,
        amount,
        price,
        date: new Date().toLocaleString()
    };
    tradeHistory.push(trade);
    console.log("Trade added:", trade);

    renderPortfolio(); 
}
