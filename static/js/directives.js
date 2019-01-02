angular.module('App.Directives', []).directive('scrollOnClick', function () {
    return {
        restrict: 'A',
        link: function (scope, $elm, attrs) {
            var idToScroll = attrs.scrollId;
            $elm.on('click', function () {
                console.log(attrs);
                var $target;
                if (idToScroll) {
                    $target = $(idToScroll);
                    console.log($target, '$target');
                } else {
                    $target = $elm;
                }
                $('body').scrollTo($target.offset().top - 100, 'slow');
            });
        }
    }
})
;
