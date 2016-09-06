colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");
$scope.newColor = {};
  $scope.dataFactory = DataFactory;

$scope.addColor = function() {
  console.log($scope.newColor.color);
    $scope.dataFactory.addColor($scope.newColor.color);
}

}]);
