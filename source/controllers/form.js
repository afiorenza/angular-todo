module.exports = function ($scope) {

    $scope.signupForm = function () {
        console.log('submit ', $scope.signup);
        console.log('valid ', $scope.signup_form.$valid);
    }
}
