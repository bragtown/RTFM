'use strict';

angular.module('rtfmApp',['firebase'])
  .controller('ThreadctrlCtrl', function ($scope, $firebase) {
   var ref = new Firebase('https://fba.firebaseIO.com');
    $scope.threads = $firebase(ref);
    $scope.addThread = function(e){
    	if(e.keyCode !== 13) {
    		return;
    	}
    	$scope.threads.$add({
    		body: $scope.newThread
    	});
    	$scope.newThread = '';
    };

    $scope.addReply = function(e, id){
    	if(e.keyCode !== 13){
    		return;
    	}
        var threadRef = new Firebase('https://fba.firebaseIO.com/'+id);
        $scope.currentThread = threadRef;
        $scope.replies = $scope.currentThread.$child('replies');
    	$scope.replies.$add($scope.newReply);
    	$scope.newReply = '';
    };
  });
