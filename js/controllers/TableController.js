/**
 * Created by ed on 23.04.15.
 */
Application.controller('TableController', function ($scope, $modal, $log) {
    $scope.musicians = [
        {"id": 1, "name": "John", "surname": "Lennon", "instrument": "Piano"},
        {"id": 2, "name": "Paul", "surname": "McCartney", "instrument": "Bass"},
        {"id": 3, "name": "George", "surname": "Harrison", "instrument": "Guitar"},
        {"id": 4, "name": "Ringo", "surname": "Starr", "instrument": "Drums"}
    ];
    $scope.changed = false;
    $scope.sortConfig = {'column': 'id', 'asc': true};
    $scope.toggleSort = function (column) {
        if ($scope.sortConfig.column == column) {
            $scope.sortConfig.asc = !$scope.sortConfig.asc;
        } else {
            $scope.sortConfig.column = column;
            $scope.sortConfig.asc = true;
        }

        $scope.musicians.sort(function (a, b) {
            if (a[$scope.sortConfig.column] > b[$scope.sortConfig.column]) {
                return $scope.sortConfig.asc ? 1 : -1;
            }

            if (a[$scope.sortConfig.column] < b[$scope.sortConfig.column]) {
                return $scope.sortConfig.asc ? -1 : 1;
            }

            return 0;
        });

    };
    $scope.open = function (item) {
        var modalInstance = $modal.open({
            templateUrl: '/js/views/table/partial/delete.html',
            controller: 'PopupController',
            resolve: {
                item: function () {
                    return item
                }
            }
        });

        modalInstance.result.then(function (item) {
            $scope.changed = item;
            $scope.musicians.splice($scope.musicians.indexOf(item), 1);
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
    };
});
