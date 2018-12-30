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
        .when('/works/:section/:sub_section', {
            templateUrl: 'templates/page-works.html',
            controller: 'worksController'
        })
        .when('/press', {
            templateUrl: 'templates/page-works.html',
            controller: 'pressController'
        })

        .when('/bio', {
            templateUrl: 'templates/page-bio.html',
            controller: 'bioController'
        })


}]);

angular.module('App.Controllers', [])

    .controller('worksController', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
        $scope.isActive = function (viewLocation) {
            console.log(viewLocation);
            console.log($location.path());
            var match = viewLocation === $location.path();
            return match
        };
        $scope.section = $routeParams.section;
        $scope.sub_section = $routeParams.sub_section;
        $scope.showSubsections = false;
        $scope.pageClass = 'page-works';
        if ($scope.section) {
            $scope.subSections = Array();
            $scope.pageName = $scope.section;
            var _section = m[$scope.section];
            for (var key in _section) {
                $scope.subSections.push({
                    'name': key,
                    'href': '/works/' + $scope.section + '/' + key
                });
            }
            if ($scope.sub_section) {
                $scope.items = m[$scope.section][$scope.sub_section];
                $scope.pageName = $scope.section + ', ' + $scope.sub_section
            } else {
                if ($scope.subSections.length == 1) {
                    $scope.items = m[$scope.section]['misc'];
                }
            }
            if($scope.subSections.length > 0 && !$scope.sub_section){
                $scope.showSubsections = true;
            }
        } else {
            $scope.pageName = '';
        }


    }])
    .controller('bioController', ['$scope', '$routeParams', function ($scope, $routeParams) {

        $scope.pageClass = 'page-works';
        $scope.pageName = "Press";
        $scope.items = m['bio'];
        console.log($scope.items);

    }])
    .controller('pressController', ['$scope', '$routeParams', function ($scope, $routeParams) {

        $scope.pageClass = 'page-works';
        $scope.section = "Press & Publications";
        $scope.items = m['press'];
        console.log($scope.items);

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

