// Trade history array to store trades
const tradeHistory = [];

// Function to add trade and push to history
function addTrade(asset, amount, price) {
    const trade = {
        asset: asset,
        amount: amount,
        price: price,
        date: new Date().toLocaleString()
    };
    tradeHistory.push(trade);
    console.log("Trade added:", trade);
}

// Example usage
addTrade("BTC", 0.01, 45000);
addTrade("ETH", 0.5, 3000);
