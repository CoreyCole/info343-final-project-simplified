/*
 script file for the index.html page

 ui.router -> ui routing
 */

angular.module('BellhappApp', ['ui.router', 'firebase'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('sign-up', {
                url: '/sign-up',
                templateUrl: 'views/sign-up.html',
                controller: 'SignUpController'
            });

        //default if something weird is typed in
        $urlRouterProvider.otherwise('/sign-up');
    })
    .controller('SignUpController', function($scope, $firebaseArray) {
        $scope.user = {};

        $scope.justLetters = true;

        if(!isNaN($scope.user.fname) || !isNaN($scope.user.lname)){
            $scope.justLetters = false;
        }

        //storing into firebase
        var ref = new Firebase('https://info343-project.firebaseio.com/');
        $scope.form = $firebaseArray(ref);

        $scope.saveUser = function() {

            $scope.user.$add({
                email: $scope.user.email,
                fname: $scope.user.fname,
                lname: $scope.user.lname,
                birthdate: $scope.user.birthdate,
                password: $scope.user.password1
            });
            $scope.user = {};
            localStorage.clear();
        };




    });
