var service = angular.module('angularServices', []);

service.controller('listContacts',function($scope, $http){
  $http.get('/api/contacts')
    .then(function(res){
      $scope.contacts = res.data;
  });
});

service.controller('showContact',function($scope, $http){

  $http.get('/api/contacts/' + $scope._id)
    .then(function(res){
      $scope.contactDetails = res.data;
    });
});

service.controller('addContact', function($scope, $http){
  $scope.postContact = function () {
        var data = {
            name: $scope.name,
            address: $scope.address,
            mobile: $scope.mobile
        };
        $http.post('/api/contacts', data)
        .success(function (res) {
            $scope.response = res;
            $scope.name = '';
            $scope.address = '';
            $scope.mobile = '';
            console.log($scope.response)
        })
        .error(function (res) {
            $scope.response = data;
            console.log($scope.response);
        });
    };
});
