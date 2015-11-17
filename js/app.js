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
    .controller('SignUpController', function($scope) {
        $scope.SignUp = function() {
            $scope.success = true;
        };
    })

    .directive('checkBirthdate', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.checkBirthdate = function(modelValue) {
                    var userDate = Date.parse(modelValue);
                    if (!isNaN(userDate)) {
                        var thirteen = 13 * 365 * 24 * 3600 * 1000;
                        return (userDate <= Date.now() - thirteen);
                    }
                    return false;
                }
            }
        }
    })
    .directive('passwordsMatch', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.passwordsMatch = function(modelValue) {
                    return modelValue == scope.$eval(attrs.passwordsMatch);
                };
            }
        }
    })
