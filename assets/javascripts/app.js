var app = angular.module('validationExample', []);

app.controller('signupController', function($scope) {
  $scope.submitted = false;
  $scope.emailRequired = false;
  $scope.invalidEmail = false;
  $scope.form = {}
  $scope.submitForm = function (data) {
  	if($scope.signup_form.$valid){
  		$scope.emailRequired = false;
			$scope.invalidEmail = false;	
  	}else{
  		$scope.signup_form.submitted = true;
  		if ($scope.signup_form.email.$error.required){
  			$scope.emailRequired = true;
  			$scope.invalidEmail = false;
  		}else if($scope.signup_form.email.$invalid){
  			$scope.invalidEmail = true;
  			$scope.emailRequired = false;
  		}	
	  }
  }
});
