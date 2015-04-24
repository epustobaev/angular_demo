/**
 * Created by ed on 24.04.15.
 */
Application.controller('PopupController', function ($scope, $modalInstance, $log, item) {
    $scope.item = item;
    $scope.ok = function () {
        $modalInstance.close(item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});