var m = {
    "paintings": {
        "1987": [{
            "src": "./media/IMAGES/paintings/1987/1987_01.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_02.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_03.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_04.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_05.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_06.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_07.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_08.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_09.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_10.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_11.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_12.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_13.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_14.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_15.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_16.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_17.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {
            "src": "./media/IMAGES/paintings/1987/1987_18.jpg",
            "dimensions": "",
            "description": "",
            "title": ""
        }, {"src": "./media/IMAGES/paintings/1987/1987_19.jpg", "dimensions": "", "description": "", "title": ""}],
        "1988": [],
        "1989": [],
        "1990": []
    }
}
/*
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);
*/
var app = angular.module('App', [
    'ngRoute',
    'ngAnimate',
    'App.Controllers'
]);


app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/page-home.html',
            controller: 'mainController'
        })
        .when('/works', {
            templateUrl: 'templates/page-works.html',
            controller: 'worksController'
        })
        .when('/works/:section', {
            templateUrl: 'templates/page-works.html',
            controller: 'worksController'
        })
        .when('/works/:section/:year', {
            templateUrl: 'templates/page-works.html',
            controller: 'worksController'
        })
        .when('/bio', {
            templateUrl: 'templates/page-bio.html',
            controller: 'worksController'
        })


}]);

angular.module('App.Controllers', [])

    .controller('worksController', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.year = $routeParams.year;
        console.log($routeParams);
        $scope.items = m.images;
        $scope.pageClass = 'page-works';
    }])
    .controller('headerController', function ($scope, $location) {

        $scope.isActive = function (viewLocation) {
            var match = viewLocation === $location.path();
            return match
        };
    })
    .controller('mainController', function ($scope) {

        $scope.pageClass = 'page-home';
    })




$(function () {
    $('#myModal').on('show.bs.modal', function (event) {
        var source = $(event.relatedTarget);
        $(this).find('.modal-body').html($(source).find('.panel-body').html());
        $(this).find('.modal-title h4').html($(source).find('.panel-footer .title').html());
        $(this).find('.modal-title .description').html($(source).find('.panel-footer .description').html());
        $(this).find('.modal-title .full-res-link').html($(source).find('.panel-footer .full-res-link').html());

    });
})

