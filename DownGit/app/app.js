/**********************************************************************************
* Developer: Minhas Kamal (minhaskamal024@gmail.com)                              *
* Website: https://github.com/MinhasKamal/DownGit                                 *
* https://github.com/nu11secur1ty/nu11secur1ty.github.io/tree/master/DownGit 2025 *
* License: MIT License                                                            *
***********************************************************************************/

var siteHeaderText = {};

var downGit = angular.module('downGit', [
    'ngRoute',
    'homeModule',
    'toastr',
]);

downGit.config([
    '$routeProvider',
    
    function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home',
            })
            .otherwise({
                redirectTo: '/home',
            });
    }
]);

downGit.config([
    'toastrConfig',
    
    function(toastrConfig) {
        angular.extend(toastrConfig, {
            positionClass: 'toast-bottom-right',
            maxOpened: 3,
        });
    }
]);
