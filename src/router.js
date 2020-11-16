const { home, ping } = require('./controller');
const controllers = require('./controller');

module.exports = (request, response) => {
    const {
        url,
        method,
        queryParams,
        body: data
    } = request;

    if (method === 'GET' && url === '/') return home(response);
    if (method === 'GET' && url === '/ping') return ping(response);
    if (method === 'POST' && url === '/comment')
        return controllers.comment(data, response, queryParams);

    if (method === 'GET' && url === '/task1')
        return controllers.firstTask(response);

    if (method === 'GET' && url === '/task2')
        return controllers.secondTask(response);
        
    else notFound(response);
}

function notFound(res) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.write('Not found');
    res.end();
}