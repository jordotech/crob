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

function findMaxSectionHeight(subsection) {
    /**
     * Just used as a helper tool when figuring out media queries...
     * @type {number}
     */
    count = 0;
    var heights = [];
    $('.panel[subsection="' + subsection + '"]').each(function () {

        if ($(this) != undefined) {
            heights.push($(this).height());
        }
        //console.log(heights);

    });
    var tallest_in_row = Math.max.apply(null, heights);
    console.log(tallest_in_row, "tallest in row for subsection + " + subsection);
}

$(function () {
    $('#myModal').on('show.bs.modal', function (event) {
        var source = $(event.relatedTarget);
        //var full_res_src = $(this).find('.full-res-src').attr('full-res-src');
        //console.log(full_res_src).prop('full-res-src');
        var full_res_src = $(source).attr('full-res-src');
        var src_body_html = $(source).find('.panel-body');
        //$(src_body_html).find('img').attr('ng-src', full_res_src);
        $(src_body_html).find('img').attr('src', full_res_src);
        $(this).find('.modal-body').html(src_body_html.html());
        $(this).find('.modal-title h4').html($(source).find('.panel-footer .title').html());
        $(this).find('.modal-title .description').html($(source).find('.panel-footer .description').html());
        $(this).find('.modal-title .full-res-link').html($(source).find('.panel-footer .full-res-link').html());

    });

})

window.onscroll = function () {
    scrollFunction()
};

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