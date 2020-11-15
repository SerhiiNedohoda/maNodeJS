function home(response) {
    response.write('Home');
    response.end();
}

function comment(data, response, queryParams) {
    response.write(JSON.stringify(data));
    response.end();
}

module.exports = {
    home,
    comment
}