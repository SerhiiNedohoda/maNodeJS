const { ping } = require('./controller');
const controllers = require('./controller');

function notFound(res) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.write('Not found');
    res.end();
}

module.exports = (request, response) => {
    const {
        parsedUrl: { pathname },
        method,
        queryParams,
        body: data,
        checkingGoods,
    } = request;

    switch (method && pathname) {
        case 'GET' && '/ping':
            return ping(response);

        case 'GET' && '/task1':
            return controllers.firstTask(checkingGoods, response, queryParams);

        case 'GET' && '/task2':
            return controllers.secondTask(response);

        case 'GET' && '/task3':
            return controllers.thirdTask(checkingGoods, response);

        case 'POST' && '/add-goods':
            return controllers.newGoods(data, response);

        case 'POST' && '/source':
            return controllers.addSource(data, response);

        default:
            return notFound(response);
    }
};
