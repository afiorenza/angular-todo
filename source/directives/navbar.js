module.exports = function ($templateCache) {
    return {
        replace: true,
        restrict: 'E',
        template: $templateCache.get('navbar.html')
    };
};
