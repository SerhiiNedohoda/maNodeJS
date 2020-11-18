const { parse: parseQuery } = require('querystring');
const { URL } = require('url');
const router = require('./router');

module.exports = (request, response) => {
    try {
        const { url } = request;
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
                    },
                    response,
                );
            });
    } catch (error) {
        console.error(error);
    }
};
