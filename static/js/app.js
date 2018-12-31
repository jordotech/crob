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
angular.module('App.Directives', []).directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.scrollId;
      $elm.on('click', function() {
          console.log(attrs);
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
          console.log($target, '$target');
        } else {
          $target = $elm;
        }
        console.log($target.offset().top);
        $('body').scrollTo($target.offset().top - 100, 'slow');
        //$("body").animate({scrollTop: $target.offset().top}, "slow");
      });
    }
  }
});
angular.module('App.Controllers', [])

    .controller('worksController', ['$scope', '$routeParams', '$location', function ($scope, $routeParams, $location) {
        $scope.isActive = function (viewLocation) {
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

            if ($scope.sub_section) {
                if($scope.section == 'textiles' && $scope.sub_section == '1982'){
                    $scope.page_description = "All images feature fabrics designed by M. Clark Robertson for textile " +
                        "company China Seas; photographs taken in Cambodia in collaboration with Inger McCabe Elliott"
                }
            } else {
                if($scope.section == 'furniture'){
                    $scope.items = m[$scope.section];
                }else{
                    var _section = m[$scope.section];
            for (var key in _section) {
                $scope.subSections.push({
                    'name': key,
                    'href': '/works/' + $scope.section + '/' + key
                });
            }
                    $scope.items_with_subs = m[$scope.section];
                }
                if ($scope.subSections.length == 1) {
                    $scope.items = m[$scope.section]['misc'];
                }
            }
            if($scope.subSections.length > 0 && !$scope.sub_section){
                $scope.showSubsections = true;
            }
        }


    }])
    .controller('bioController', ['$scope', '$routeParams', function ($scope, $routeParams) {

        $scope.pageClass = 'page-works';
        $scope.pageName = "Press";
        $scope.items = m['bio'];

    }])
    .controller('pressController', ['$scope', '$routeParams', function ($scope, $routeParams) {

        $scope.pageClass = 'page-works';
        $scope.section = "Press & Publications";
        $scope.items = m['press'];

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