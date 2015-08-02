'use strict';

angular.module('stuff', [])
	.controller('StuffCtrl', ['$scope',
		function($scope){
			$scope.switchProject = function(url){
				$scope.currentProject = 'projects/mathAssassin.html';
			}
		}
	])