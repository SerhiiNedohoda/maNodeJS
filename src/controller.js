function home(response) {
    response.write('Home');
    response.end();
}

function ping(response) {
    response.write('pong');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json')
    response.end();
}

function comment(data, response, queryParams) {
    response.write(JSON.stringify(data));
    response.end();
}

function task1() {

}

module.exports = {
    home,
    ping,
    comment,
    task1
}