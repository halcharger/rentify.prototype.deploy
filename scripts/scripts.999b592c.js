"use strict";var app=angular.module("rentify",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"loginController"}).when("/signup",{templateUrl:"views/signup.html",controller:"signupController"}).when("/mysites",{templateUrl:"views/mysites.html",controller:"mysitesController"}).when("/configuresite",{templateUrl:"views/configuresite.html",controller:"configureSiteController"}).when("/configuresitetheme",{templateUrl:"views/configuresitetheme.html",controller:"configureSiteThemeController"}).when("/configuresiteproperties",{templateUrl:"views/configuresiteproperties.html",controller:"configureSitePropertiesController"}).when("/configuresitepages",{templateUrl:"views/configuresitepages.html",controller:"configureSitePagesController"}).when("/configurepropertyoverview",{templateUrl:"views/configurepropertyoverview.html",controller:"configurePropertyOverviewController"}).when("/configurepropertylocation",{templateUrl:"views/configurepropertylocation.html",controller:"configurePropertyLocationController"}).when("/configurepropertygallery",{templateUrl:"views/configurepropertygallery.html",controller:"configurePropertyGalleryController"}).when("/configurepropertyrates",{templateUrl:"views/configurepropertyrates.html",controller:"configurePropertyRatesController"}).when("/configurepropertycontacts",{templateUrl:"views/configurepropertycontacts.html",controller:"configurePropertyContactsController"}).when("/configurepropertyreviews",{templateUrl:"views/configurepropertyreviews.html",controller:"configurePropertyReviewsController"}).when("/reservations",{templateUrl:"views/reservations.html",controller:"reservationsController"}).otherwise({redirectTo:"/"})}]),app.factory("authService",[function(){var a={},b={isAuth:!1,userName:"John Doe"};return a.authentication=b,a}]),app.factory("dummyDataService",[function(){var a={};return a.sites=[{rentifySubDomain:"retirementholidayviews",name:"Retirement Holiday Views",owner:"David Cameron"},{rentifySubDomain:"citygetawayparadise",name:"City Getaway Paradise",owner:"Tony Blair"},{rentifySubDomain:"newenglandbliss",name:"New England Bliss",owner:"David Cameron"},{rentifySubDomain:"seaviewsflatlet",name:"Sea Views Flatlet",owner:"Boris Johnston"},{rentifySubDomain:"marineviews",name:"Marine Views",owner:"Boris Johnston"},{rentifySubDomain:"sleepywestvillehollow",name:"Sleepy Westville Hollow",owner:"Ken Livingston"},{rentifySubDomain:"therockgetaway",name:"The Rock Getaway",owner:"Ken Livingston"},{rentifySubDomain:"holidaydriveflats",name:"Holiday Drive Flats",owner:"Ed Milliband"},{rentifySubDomain:"quitespinneycottage",name:"Quite Spinney Cottage",owner:"Ed Milliband"},{rentifySubDomain:"megalopolisresorts",name:"Megalopolis Resorts",owner:"Jacob Zuma"},{rentifySubDomain:"midlandsmeandergetaway",name:"Midlands Meander Getaway",owner:"Jacob Zuma"}],a.properties=[{name:"Property One"},{name:"Property Two"}],a}]),function(){function a(a,b,c){var d={};d.authentication=c.authentication,d.logOut=function(){console.log("logging out..."),d.authentication.isAuth=!1,b.path("/")},a.vm=d}app.controller("indexController",["$scope","$location","authService",a])}(),app.controller("loginController",["$scope","$location","authService",function(a,b,c){var d={};d.login=function(){console.log("logging in"),c.authentication.isAuth=!0,b.path("/mysites")},a.vm=d}]),app.controller("signupController",["$scope","$location","authService",function(a,b,c){var d={};d.signUp=function(){c.authentication.isAuth=!0,b.path("/mysites")},a.vm=d}]),function(){function a(a,b,c){var d={};d.sites=[],d.getSites=function(){d.sites=c.sites},d.configureSite=function(){b.path("/configuresitetheme")},d.getSites(),a.vm=d}app.controller("mysitesController",["$scope","$location","dummyDataService",a])}(),app.controller("configurePropertyController",["$scope","$location",function(a){var b={};a.vm=b}]),app.controller("configureSiteController",["$scope","$location","dummyDataService",function(a,b,c){var d={};d.properties=[],d.getProperties=function(){d.properties=c.properties},d.configureProperty=function(){b.path("/configureproperty")},d.getProperties(),a.vm=d}]),app.controller("configureSiteThemeController",["$scope",function(a){var b={};a.vm=b}]),app.controller("configureSitePropertiesController",["$scope","dummyDataService",function(a,b){var c={};c.properties=[],c.getProperties=function(){c.properties=b.properties},c.configureProperty=function(){$location.path("/configureproperty")},c.getProperties(),a.vm=c}]),app.controller("configureSitePagesController",["$scope",function(a){var b={};a.vm=b}]),app.controller("configurePropertyOverviewController",["$scope",function(a){var b={};a.vm=b}]),app.controller("configurePropertyLocationController",["$scope",function(a){var b={};a.vm=b}]),app.controller("configurePropertyGalleryController",["$scope",function(a){var b={};a.vm=b}]),app.controller("configurePropertyRatesController",["$scope",function(a){a.fromDate=new Date,a.openFrom=function(b){b.preventDefault(),b.stopPropagation(),a.fromopened=!0},a.openTo=function(b){b.preventDefault(),b.stopPropagation(),a.toopened=!0},a.dateOptions={formatYear:"yy",startingDay:1}}]),app.controller("configurePropertyContactsController",["$scope",function(a){var b={};a.vm=b}]),app.controller("configurePropertyReviewsController",["$scope",function(a){var b={};a.vm=b}]),app.controller("reservationsController",["$scope","$location",function(a){var b={};a.vm=b}]);