<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>NameFind</title>
<link rel="stylesheet" href="styles/index.css">
<script src="js/jquery-latest.min.js"></script>
<script src="js/angular.min.js"></script>
<script src="js/angular-animate.min.js"></script>
<script src='js/ng-infinite-scroll.min.js'></script>
<script src='js/browser.js'></script>
<script>
var namestable = angular.module('namestable', ['infinite-scroll','ngAnimate']);
namestable.controller('namesController', function($scope, $http) {
  $http.get('names_db/elvishNames.json')
       .then(function(res){
          $scope.names = res.data;	             
        });
		$scope.sortField = 'elvish';
		
		$scope.numberOfNamesToDisplay = 40;
			$scope.loadMore = function(){
			$scope.numberOfNamesToDisplay += 20;
			}
});
</script>
</head>
<body data-ng-app="namestable">
<div id="header">
	<img src="header_dir.gif"/>
	<h2>NameFind</h2>
	<hr>
</div>
<form method="POST" action="#" >
	<!--
    <textarea id="string" name="string"></textarea>
    <input type="submit" id="text_add" name="text_add" class="btn" value="Parse!"/>
    -->
    <div id="chooser">
        <select id="gender" name="gender" data-ng-model="gender_model" required>
            <option value="">Choose Gender</option>
            <option value="n">Neutral</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
        </select>
        <select id="age_relationship" name="age_relationship" data-ng-model="age_relationship_model">
            <option value="">Choose Age/Relationship</option>
            <option value="c">Child</option>
            <option value="b_s">Brother/Sister</option>
            <option value="y">Youth</option>
            <option value="m">Marriage</option>
        </select>
        <select id="prime_theme" name="prime_theme" data-ng-model="prime_theme_model"  required="required">
            <option selected="selected" value=""> Choose Category </option>
            <option value="1">Power or Occupation</option>
            <option value="2">Journeys and Places</option>
            <option value="3">Appearance and Beauty</option>
            <option value="4">Romantic and Spiritual</option>
            <option value="5">Health and Age</option>
            <option value="6">Seasons and Sky</option>
            <option value="7">Light or Dark</option>
            <option value="8">Personality</option>
            <option value="9">Elements</option>
            <option value="10">Nature</option>
            <option value="11">Battle</option>
        </select>
        <select id="sub_theme" name="sub_theme" data-ng-model="sub_theme_model" required>
        	<option selected="selected" value=""> Choose Theme </option>
        </select>
	</div>
    <input type="text" id="search_bar" name="search_bar" placeholder="Search" data-ng-model="query" />
</form>
<div id="table_wrapper" data-ng-controller = "namesController">
	<div  infinite-scroll="loadMore()" >
    	<table style="border-bottom:2px solid rgba(50,50,50,1.00); color:rgba(40,40,40,1.00);">
            <tr>
                <td class="left" id="table_header_left"><strong>Name</strong></td>
                <td class="middle" ><strong>Description</strong></td> 
                <td class="right" id="table_header_right"><strong>Transcription</strong></td>
            </tr>
        </table>
        <table data-ng-repeat ="name in names | filter:{elvish: query, gender: gender_model, age_relationship: age_relationship_model, prime_theme:prime_theme_model, sub_theme: sub_theme_model} | orderBy: sortField | limitTo: numberOfNamesToDisplay">
            <tr>
                <td class="left">{{name.elvish}}</td>
                <td class="middle">{{name.description}}</td> 
                <td class="right">{{name.transcription}}</td>
            </tr>
        </table>
	</div>
</div>
</body>
</html>