const { home, ping } = require('./controller');
const controllers = require('./controller');

module.exports = (request, response) => {
    const {
        url,
        parsedUrl : { pathname },
        method,
        queryParams,
        body: data,
        source
    } = request;

    if (method === 'GET' && pathname === '/') return home(response);
    if (method === 'GET' && pathname === '/ping') return ping(response);
    if (method === 'POST' && pathname === '/comment')
        return controllers.comment(data, response, queryParams);

    if (method === 'GET' && pathname === '/task1')
        return controllers.firstTask(source, response, queryParams);

    if (method === 'GET' && pathname === '/task2')
        return controllers.secondTask(response);

    if (method === 'GET' && pathname === '/task3')
        return controllers.thirdTask(source, response);

    if (method === 'POST' && pathname === '/add-goods')
        return controllers.newGoods(data, response)
    else notFound(request, response);
}

function notFound(res) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.write('Not found');
    res.end();
}