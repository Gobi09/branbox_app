// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var apps=angular.module('starter', ['ionic','ngCordova','starter.toggleCtrl','starter.services'])
// var parameters = window.location.href;
//       var temp = parameters.split("=");
//       var SubMenuMenuName= unescape(temp[1]);
//       alert(SubMenuMenuName);

.run(function($ionicPlatform, $cordovaSQLite) {
        $ionicPlatform.ready(function() {
        

        // Important!!
        // 
        // Instantiate database file/connection after ionic platform is ready.
        // 
        // db = $cordovaSQLite.openDB("nextflow.db");
        // $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT)')
        // .then(function(result) {
        //         alert("table created successfully");
        //           $scope.statusMessage = "Message saved successful, cheers!";
        //       }, function(error) {
        //           $scope.statusMessage = "Error on saving: " + error.message;
        //       });
        //   // alert("inside a creation");
        //   $cordovaSQLite.execute(db, 'INSERT INTO Messages (message) VALUES (?)', "newMessage")
        //       .then(function(result) {
        //         alert("insert successfully");
        //           $scope.statusMessage = "Message saved successful, cheers!";
        //       }, function(error) {
        //           $scope.statusMessage = "Error on saving: " + error.message;
        //       });

              
        //alert(db);

    });
  });
      
// apps.run(function($ionicPlatform, $cordovaSQLite) {
//         $ionicPlatform.ready(function() {
//             if(window.cordova && window.cordova.plugins.Keyboard) {
//                 cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//             }
//             if(window.StatusBar) {
//                 StatusBar.styleDefault();
//             }
//             db = $cordovaSQLite.openDB("my.db");
//             $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
//         });
//     });

apps.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
      $stateProvider
      .state('mainMenu', {
        url: '/',
        templateUrl: 'pages/mainMenu.html',
      })
      .state('menu', {
        url: '/menu',
        templateUrl: 'pages/menu.html'
      })
      .state('subMenu', {
        url: '/menu/=:id',
        templateUrl: 'pages/subMenu.html'
      })
      .state('subMenuItem', {
        url: '/subMenuItem/=:menuId=:subMenuId',
        templateUrl: 'pages/subMenuItem.html'
      })

      .state('item', {
        url: '/item/=:menuId=:subMenuId=:itemId',
        templateUrl: 'pages/item.html'
      })

      .state('addToCart', {
        url: '/addToCart',
        templateUrl: 'pages/addToCart.html'
      })

      //Author Pravinkumar on 23/7/2017
      //login
      .state('logIn', {
        url: '/logIn',
        templateUrl: 'pages/logIn.html'
      })
      //Author Pravinkumar on 23/7/2017
      //signUp
      .state('signUp', {
        url: '/signUp',
        templateUrl: 'pages/signUp.html'
      })
    //Author Pravinkumar on 23/7/2017
    //contactUs
      .state('contactUs', {
        url: '/contactUs',
        templateUrl: 'pages/contactUs.html'
        })
      //Author Pravinkumar on 23/7/2017
    //location
      .state('mapLocation', {
        url: '/mapLocation',
        templateUrl: 'pages/mapLocation.html',
      })
      //Author Pravinkumar on 23/7/2017
      //location
      .state('latestOffer', {
        url: '/latestOffer',
        templateUrl: 'pages/latestOffer.html',
      })
      //Author Pravinkumar on 24/7/2017
      //latestoffer
      .state('aboutUs', {
        url: '/aboutUs',
        templateUrl: 'pages/aboutUs.html',          
      })
       //Author Vinoth on 24/7/2017
      //Gallery 
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'pages/gallery.html'
      })
    })
