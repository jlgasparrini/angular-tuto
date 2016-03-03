app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();
}]);

app.controller('AppetizersController', ['$scope', function($scope) {
  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95,
      count: 1
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95,
      count: 2
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95,
      count: 3
    }
  ];

  $scope.increase = function(index) {
    $scope.appetizers[index].count++;
  };

  $scope.decrease = function(index) {
    $scope.appetizers[index].count--;
  };
}]);

app.controller('MainsController', ['$scope', function($scope) {
  $scope.mains = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95,
      count: 0
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95,
      count: 0
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95,
      count: 0
    }
  ];

  $scope.increase = function(index) {
    $scope.mains[index].count++;
  };

  $scope.decrease = function(index) {
    $scope.mains[index].count--;
  };
}]);

app.controller('ExtrasController', ['$scope', function($scope) {
  $scope.extras = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95,
      count: 0
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95,
      count: 0
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95,
      count: 0
    }
  ];

  $scope.increase = function(index) {
    $scope.extras[index].count++;
  };

  $scope.decrease = function(index) {
    $scope.extras[index].count--;
  };
}]);
