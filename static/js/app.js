var app = angular.module('App', [
    'ngRoute',
    'ngAnimate',
    'App.Controllers',
    'App.Directives',
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

        .when('/press', {
            templateUrl: 'templates/page-press.html',
            controller: 'pressController'
        })

        .when('/bio', {
            templateUrl: 'templates/page-bio.html',
            controller: 'bioController'
        })


}]);



$(function () {
    $('#myModal').on('show.bs.modal', function (event) {
        var source = $(event.relatedTarget);
        $(this).find('.modal-body').html($(source).find('.panel-body').html());
        $(this).find('.modal-title h4').html($(source).find('.panel-footer .title').html());
        $(this).find('.modal-title .description').html($(source).find('.panel-footer .description').html());
        $(this).find('.modal-title .full-res-link').html($(source).find('.panel-footer .full-res-link').html());

    });
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("jumpToTopButton").style.display = "block";
  } else {
    document.getElementById("jumpToTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}