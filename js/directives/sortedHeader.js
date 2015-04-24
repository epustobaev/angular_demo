/**
 * Created by ed on 24.04.15.
 */
Application.directive('sortedHeader', function () {
    return {
        scope: {
            column: '=column',
            sortConfig: '=sortConfig'
        },
        link: function (scope, element, attrs) {
            scope.toggleIcon = function () {
                if (attrs['column'] == scope.sortConfig.column) {
                    var cls = scope.sortConfig.asc ? 'glyphicon glyphicon-sort-by-attributes' : 'glyphicon glyphicon-sort-by-attributes-alt';

                    return element.html('<span class="' + cls + '" aria-hidden="true">' + '</span>');
                }

                return element.html('');
            };
            scope.$watch('sortConfig.column', function (oldColumn, newColumn) {
                scope.toggleIcon();
            });
            scope.$watch('sortConfig.asc', function (oldColumn, newColumn) {
                scope.toggleIcon();
            });
        },
        replace: true,
        restrict: 'E'
    }
});

