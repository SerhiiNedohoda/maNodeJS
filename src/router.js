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

    if (method === 'GET') {
        switch (pathname) {
            case '/ping':
                return controllers.ping(response);

            case '/task1':
                return controllers.firstTask(checkingGoods, response, queryParams);

            case '/task2':
                return controllers.secondTask(response);

            case '/task3':
                return controllers.thirdTask(checkingGoods, response);

            default:
                break;
        }
    }

    if (method === 'POST') {
        switch (pathname) {
            case '/add-goods':
                return controllers.newGoods(data, response);

            case '/source':
                return controllers.addSource(data, response);

            default:
                break;
        }
    }
    return notFound(response);
};
