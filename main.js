const endpoint = "https://api.iextrading.com/1.0"
const symbolList = "/ref-data/symbols"
// company, logo, price news10
let symbol = ''
symbol = "taco"
const stockCard = `/stock/${symbol}/batch?types=quote,logo,news&range=10`
let qURL = `${endpoint}${stockCard}`
const stockInfo = function () {
$.ajax({
    url:qURL,
    method: 'GET'
}).then(function(response){
    console.log(`
    ${response.quote.companyName}, 
    ${response.logo.url}, 
    ${response.quote.latestPrice},
    ${response.news[0].headline}
    `)
});

}

stockInfo()


// news last ten: stock/market/news/last/10
/* contents
[
  {
    "datetime": "2017-06-29T13:14:22-04:00",
    "headline": "Voice Search Technology Creates A New Paradigm For Marketers",
    "source": "Benzinga via QuoteMedia",
    "url": "https://api.iextrading.com/1.0/stock/aapl/article/8348646549980454",
    "summary": "<p>Voice search is likely to grow by leap and bounds, with technological advancements leading to better adoption and fueling the growth cycle, according to Lindsay Boyajian, <a href=\"http://loupventures.com/how-the-future-of-voice-search-affects-marketers-today/\">a guest contributor at Loup Ventu...",
    "related": "AAPL,AMZN,GOOG,GOOGL,MSFT",
    "image": "https://api.iextrading.com/1.0/stock/aapl/news-image/7594023985414148"
  }
] */

/* refrence: ref-data/symbols
   contents
[
  {
    "symbol": "A",
    "name": "AGILENT TECHNOLOGIES INC",
    "date": "2017-04-19",
    "isEnabled": true,
    "type": "cs",
    "iexId": "1"
  }, */

/* BATCH
  /stock/{symbol}/bathc?types=quotes,news
  /stock/market/batch?symbols=aapl,fb&types=quote,news&last=1 ?
  /stock/aapl/batch?types=quote,news,chart&range=1m&last=1
  /stock/market/batch?symbols=aapl,fb,tsla&types=quote,news,chart&range=1m&last=5
*/

/* QUOTE
 /stock/aapl/quote
contents:
{
  "symbol": "AAPL",
  "companyName": "Apple Inc.",
  "primaryExchange": "Nasdaq Global Select",
  "sector": "Technology",
  "calculationPrice": "tops",
  "open": 154,
  "openTime": 1506605400394,
  "close": 153.28,
  "closeTime": 1506605400394,
  "high": 154.80,
  "low": 153.25,
  "latestPrice": 158.73,
  "latestSource": "Previous close",
  "latestTime": "September 19, 2017",
  "latestUpdate": 1505779200000,
  "latestVolume": 20567140,
  "iexRealtimePrice": 158.71,
  "iexRealtimeSize": 100,
  "iexLastUpdated": 1505851198059,
  "delayedPrice": 158.71,
  "delayedPriceTime": 1505854782437,
  "extendedPrice": 159.21,
  "extendedChange": -1.68,
  "extendedChangePercent": -0.0125,
  "extendedPriceTime": 1527082200361,
  "previousClose": 158.73,
  "change": -1.67,
  "changePercent": -0.01158,
  "iexMarketPercent": 0.00948,
  "iexVolume": 82451,
  "avgTotalVolume": 29623234,
  "iexBidPrice": 153.01,
  "iexBidSize": 100,
  "iexAskPrice": 158.66,
  "iexAskSize": 100,
  "marketCap": 751627174400,
  "peRatio": 16.86,
  "week52High": 159.65,
  "week52Low": 93.63,
  "ytdChange": 0.3665,
} */

/* LOGO
/stock/aapl/logo
contents: URL */

/* chart
/stock/aapl/chart */

/* company
/stock/aapl/company
{
  "symbol": "AAPL",
  "companyName": "Apple Inc.",
  "exchange": "Nasdaq Global Select",
  "industry": "Computer Hardware",
  "website": "http://www.apple.com",
  "description": "Apple Inc is an American multinational technology company. It designs, manufactures, and markets mobile communication and media devices, personal computers, and portable digital music players.",
  "CEO": "Timothy D. Cook",
  "issueType": "cs",
  "sector": "Technology",
  "tags": [
      "Technology",
      "Consumer Electronics",
      "Computer Hardware"
  ]
} */

/* LIST
/stock/market/list
[
  {
      "symbol": "AAPL",
      "companyName": "Apple Inc.",
      "primaryExchange": "Nasdaq Global Select",
      "sector": "Technology",
      "calculationPrice": "tops",
      "latestPrice": 158.73,
      "latestSource": "Previous close",
      "latestTime": "September 19, 2017",
      "latestUpdate": 1505779200000,
      "latestVolume": 20567140,
      "iexRealtimePrice": 158.71,
      "iexRealtimeSize": 100,
      "iexLastUpdated": 1505851198059,
      "delayedPrice": 158.71,
      "delayedPriceTime": 1505854782437,
      "previousClose": 158.73,
      "change": -1.67,
      "changePercent": -0.01158,
      "iexMarketPercent": 0.00948,
      "iexVolume": 82451,
      "avgTotalVolume": 29623234,
      "iexBidPrice": 153.01,
      "iexBidSize": 100,
      "iexAskPrice": 158.66,
      "iexAskSize": 100,
      "marketCap": 751627174400,
      "peRatio": 16.86,
      "week52High": 159.65,
      "week52Low": 93.63,
      "ytdChange": 0.3665,
  }
] */