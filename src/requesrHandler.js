const { parse: parseQuery } = require('querystring');
const { URL } = require('url');
const router = require('./router');
const GOODS = require('../goods.json');

global.store = [];

function sourceCheck(source) {
    let resultArray;
    if (source === 'JSON' && store.length >= 1) resultArray = store;
    else resultArray = GOODS;

    return resultArray;
}

module.exports = async (request, response) => {
    try {
        const checkingGoods = sourceCheck(source);

        const { url, method } = request;
        const parsedUrl = new URL(url, process.env.ORIGIN);
        const queryParams = parseQuery(parsedUrl.search.substr(1));

        let body = [];

        request
            .on('error', (err) => {
                console.error(err);
            })
            .on('data', (chunk) => {
                body.push(chunk);
            })
            .on('end', () => {
                body = Buffer.concat(body).toString();

                router(
                    {
                        ...request,
                        body: body ? JSON.parse(body) : {},
                        parsedUrl,
                        queryParams,
                        checkingGoods,
                    },
                    response,
                );
            });
    } catch (error) {
        console.error(error);
    }
};
