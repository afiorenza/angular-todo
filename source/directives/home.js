module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        template: $templateCache.get('home.html')
    };
};
