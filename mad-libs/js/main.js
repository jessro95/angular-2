// Create application
var myApp = angular.module('myApp', [])


// Bind controller madCtrl
myApp.controller('madCtrl', function($scope){
    $scope.user = {}
    $scope.submit = function() {
        alert('Name: ' + $scope.user.person + '   Age:' + $scope.user.age + '   Location:' + $scope.user.place + '  Food:' + $scope.user.food)
    }
})


