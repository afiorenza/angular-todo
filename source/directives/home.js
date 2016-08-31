module.exports = function ($http, $templateCache) {

    $http.get('home.html', {cache: $templateCache})
        .then(function (algo) {
            console.log('****', algo);

        })
        .catch(function (error) {
            console.log('error ', error);
        });
    return {
        restrict: 'E',
        template: '<div>aaaaaaaaaaaaaa</div>'
    };
};
