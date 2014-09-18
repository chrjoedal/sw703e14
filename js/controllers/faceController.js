var myApp = angular.module('smartgridgame');

myApp.controller('faceController', ['$scope', function($scope){
	$scope.bezier = 30;
     
     $scope.$watch('bezier', function() {
     	
       // variable that decides if something should be drawn on mousemove
      var drawing = false;
	  var canvas = document.getElementById('face');
	  canvas.width = canvas.width;
	  var context = canvas.getContext('2d');
	  var centerX = canvas.width / 2;
	  var centerY = canvas.height / 2;
	  var radius = 70;
	  var eyeRadius = 10;
	  var eyeXOffset = 25;
	  var eyeYOffset = 20;
	  var mouthXOffset = 40;
	  var mouthYOffset = parseInt($scope.bezier)/3-20;
	  var bezierOffset = parseInt($scope.bezier);


	  
	  // draw the yellow circle
	  context.beginPath();
	  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	  context.fillStyle = 'yellow';
	  context.fill();
	  context.lineWidth = 5;
	  context.strokeStyle = 'black';
	  context.stroke();
	    
	  // draw the eyes
	  context.beginPath();
	  var eyeX = centerX - eyeXOffset;
	  var eyeY = centerY - eyeXOffset;
	  context.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI, false);
	  var eyeX = centerX + eyeXOffset;
	  context.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI, false);
	  context.fillStyle = 'black';
	  context.fill();
	  
	  // draw the mouth
	  context.beginPath();
	  var mouthLeftX = centerX - mouthXOffset;
	  var mouthY = centerY - mouthYOffset;
	  var mouthRightX = centerX + mouthXOffset;
	  var bezierY = 0;
	  bezierY = mouthY+bezierOffset;
	  context.moveTo(mouthLeftX,mouthY);
	  context.bezierCurveTo(mouthLeftX,bezierY,mouthRightX,bezierY,mouthRightX,mouthY);
	  //context.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI, false);
	  context.strokeStyle = 'black';
	  context.stroke();
   }); 
      
}]);