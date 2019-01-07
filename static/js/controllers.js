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
            $scope.pageClass = 'page-works ' + $scope.section;
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
