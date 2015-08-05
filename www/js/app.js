// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var apps=angular.module('starter', ['ionic','ngCordova','starter.toggleCtrl','starter.services'])
// var parameters = window.location.href;
//       var temp = parameters.split("=");
//       var SubMenuMenuName= unescape(temp[1]);
//       alert(SubMenuMenuName);

.run(function($ionicPlatform, $cordovaSQLite,$http) {
        //$ionicPlatform.ready(function() {
         var businessId=1;
           
          //Menus from server and sync here.....
          $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxMenu.php',{bussId: businessId}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
            .success(function (json) {
             
              var ajaxlength = json.rows.length;
              var db = window.openDatabase("branbox", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                 tx.executeSql('CREATE TABLE IF NOT EXISTS menu ( id INTEGER PRIMARY KEY AUTOINCREMENT, businessId INTEGER , menuName TEXT, image TEXT, position TEXT, status TEXT, online TEXT, createdTime TEXT ) ');
                  for (var i = 0; i < ajaxlength; i++)
                  {
                      tx.executeSql('INSERT OR REPLACE INTO menu (id, businessId, menuName,image, position, status , online, createdTime)VALUES ("'+json.rows[i].id+'","'+json.rows[i].businessId+'","'+json.rows[i].name+'","'+json.rows[i].image+'","'+json.rows[i].position+'","'+json.rows[i].status+'","'+json.rows[i].online+'","'+json.rows[i].createdTime+'")',successID);             
                  }
                  function successID(){
                      return true;
                  }
              });
            }).error(function(){  
                alert("server Error");
             });

            //sub Menu from server and sync here....
            $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxSubMenuWithItem.php',{bussId: businessId}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
            .success(function (json) {
             
              var ajaxlength = json.rows.length;
              var db = window.openDatabase("branbox", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                 
                  tx.executeSql('CREATE TABLE IF NOT EXISTS submenu ( id INTEGER PRIMARY KEY AUTOINCREMENT, businessId INTEGER ,menuId INTEGER,subMenuName TEXT, image TEXT,position TEXT, status TEXT, online TEXT, createdTime TEXT ) ');
                  for (var i = 0; i < ajaxlength; i++)
                  {
                      tx.executeSql('INSERT OR REPLACE INTO submenu (id,businessId,menuId,subMenuName,image,position,status,online,createdTime)VALUES ("'+json.rows[i].id+'","'+json.rows[i].businessId+'","'+json.rows[i].menuId+'","'+json.rows[i].name+'","'+json.rows[i].image+'","'+json.rows[i].position+'","'+json.rows[i].status+'","'+json.rows[i].online+'","'+json.rows[i].createdTime+'")',successID);
                  }
                  function successID(){
                      return true;
                  }

              });
            }).error(function(){  
                alert("server Error");
             });

            //sub Menu Items from server and sync here....
            $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxSubMenu.php',{bussId: businessId}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
            .success(function (json) {
             
              var ajaxlength = json.rows.length;
              var db = window.openDatabase("branbox", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                 
                  tx.executeSql('CREATE TABLE IF NOT EXISTS item ( id INTEGER PRIMARY KEY AUTOINCREMENT, businessId INTEGER ,menuId INTEGER, subMenuId INTEGER, itemName TEXT, image TEXT, price TEXT, garnish TEXT,tax TEXT,offers TEXT, position TEXT, status TEXT, online TEXT, createdTime TEXT ) ');
                  for (var i = 0; i < ajaxlength; i++)
                  {
                      tx.executeSql('INSERT OR REPLACE INTO item (id,businessId,menuId,subMenuId,itemName,image,price,garnish,tax,offers,position,status,online,createdTime)VALUES ("'+json.rows[i].id+'","'+json.rows[i].businessId+'","'+json.rows[i].menuId+'","'+json.rows[i].subMenuId+'","'+json.rows[i].name+'","'+json.rows[i].image+'","'+json.rows[i].price+'","'+json.rows[i].garnish+'","'+json.rows[i].tax+'","'+json.rows[i].offers+'","'+json.rows[i].positions+'","'+json.rows[i].status+'","'+json.rows[i].online+'","'+json.rows[i].createdTime+'")',successID);
                  }
                  function successID(){
                      return true;
                  }

              });
            }).error(function(){  
                alert("server Error");
             });


              

              // $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxMenu.php').success(function(json){
              //     var json_arr =  [];  
              //     var ajaxlength = json.rows.length;
              //     var db = window.openDatabase("branbox", "1.0", "branbox Demo", 200 * 1024 * 1024);
              //     db.transaction(function(tx){
              //        tx.executeSql('CREATE TABLE IF NOT EXISTS menu ( id INTEGER PRIMARY KEY AUTOINCREMENT, businessId INTEGER , menuName TEXT, image TEXT, position TEXT, status TEXT, online TEXT, createdTime TEXT ) ');
              //         for (var i = 0; i < ajaxlength; i++)
              //         {
              //             tx.executeSql('INSERT OR REPLACE INTO menu (id, businessId, menuName,image, position, status , online, createdTime)VALUES ("'+json.rows[i].id+'","'+json.rows[i].businessId+'","'+json.rows[i].name+'","'+json.rows[i].image+'","'+json.rows[i].position+'","'+json.rows[i].status+'","'+json.rows[i].online+'","'+json.rows[i].createdTime+'")',successID);             
              //         }
              //         function successID(){
              //             return true;
              //         }
              //     });
              //      alert("success");
              // }).error(function(){  
              //     alert("server Error");
              //  });



     //});
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
