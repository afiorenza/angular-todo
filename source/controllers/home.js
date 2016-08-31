module.exports = function ($scope) {
    $scope.count = 0;
    $scope.show = true;

    $scope.add = function () {
        $scope.count = $scope.count + 1;
    };

    $scope.subtract = function () {
        $scope.count = $scope.count - 1;
    };

    $scope.showCount = function () {
        $scope.show = (!$scope.show);
    }
}
