const express = require('express')
const http = require('http')
const path = require('path');
const app = express()
const server = http.createServer(app)
const cors = require('cors')
const bodyParser = require('body-parser');
const rp = require('request-promise');

const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(
    cors({
        origin: 'http://localhost:4000',
        credentials: true
    })
);
app.use(express.static(__dirname + '/public'));

app.use('/getVal', (req, res, next) => {
    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
        qs: {
            'symbol': 'DOGE'
        },
        headers: {
            'X-CMC_PRO_API_KEY': '9a5975d3-c006-44db-b177-a6d2451d691b'
        },
        json: true,
        gzip: true
    };

    rp(requestOptions).then(response => {
        console.log('API call response:', response.data.DOGE.quote);
        res.status(200).json(response.data.DOGE.quote.USD.percent_change_24h)
    }).catch((err) => {
        console.log('API call error:', err.message);
        res.status(500)
    });
})