/*
 script file for the index.html page

 ui.router -> ui routing
 */

angular.module('BellhappApp', ['ui.router'])
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

    });
