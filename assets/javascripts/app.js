var app = angular.module('validationExample', []);

app.controller('signupController', function($scope) {
  $scope.submitted = false;
  $scope.emailRequired = false;
  $scope.invalidEmail = false;
  $scope.form = {}
  $scope.submitForm = function (data) {
    console.log($scope.form.signup_form.$valid);
  	if($scope.form.signup_form.$valid){
  		$scope.emailRequired = false;
			$scope.invalidEmail = false;	
  	}else{
  		$scope.form.signup_form.submitted = true;
  		if ($scope.form.signup_form.email.$error.required){
  			$scope.emailRequired = true;
  			$scope.invalidEmail = false;
  		}else if($scope.form.signup_form.email.$invalid){
  			$scope.invalidEmail = true;
  			$scope.emailRequired = false;
  		}	
	  }
  }
});
