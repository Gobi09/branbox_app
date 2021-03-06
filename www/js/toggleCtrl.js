angular.module('starter.toggleCtrl', [
  ])

.controller('MyCtrl', function($scope) {
  //$scope.groups = [];
 
    $scope.groups =[{
      menu: 'Lunch',
      subMenu: ['Briyani'],
      items:['Mutton Briyani','Checken Briyani']
    },
    {
      menu: 'Soups',
      subMenu: ['Veg Soups'],
      items:['Chilled Cucumber Soup','Checken Manchow soup']
    }
    ];
      //$scope.groups[1] = ;

  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  // $scope.toggleGroup = function(group) {
  //   if ($scope.isGroupShown(group)) {
  //     $scope.shownGroup = null;
  //   } else {
  //     $scope.shownGroup = group;
  //   }
  // };
  // $scope.isGroupShown = function(group) {
  //   return $scope.shownGroup === group;
  // };



    $scope.toggleSubMenu = function(item) {
    if ($scope.isGroupShown(item)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownGroup === item;
  };
  
})


//indexpage
.controller('indexpage', function($scope,$http) {


    $scope.doTheBack = function() {
      //$route.reload();
  window.history.back();




};

  })


//Menu Controller
.controller('menu', function($scope,$http) {

  
        
       var json_arr =  [];  
        var businessId='1';
          //alert("local");
           var db = window.openDatabase("branbox", "1.0", "branbox Demo", 200 * 1024 * 1024);
            db.transaction(function(tx){
            tx.executeSql('SELECT * FROM menu where status="ON" and businessId = "'+businessId+'" ',[], function (tx, results) {
                var itemLength = results.rows.length;
                var menudatas=results.rows;
                //alert(itemLength);
                for(var i = 0; i < itemLength; i++) {
                    var row = menudatas.item(i);
                    var obj = {businessId: row.businessId,id:row.id,image:row.image,menuName:row.menuName,online:row.online,position:row.position,status:row.status,createdTime:row.createdTime};
                    json_arr.push(obj);
                }  
              $scope.Menus=json_arr;
               //alert(itemLength);
              //console.log( $scope.Menus);
              });
        });
    
  })


//Sub Menu Controller
.controller('subMenu', function($scope,$http,$location) {

    var url = $location.url();
    var temp = url.split("=");
    var getMenuId=temp[1];

       var json_arr =  [];  
        var businessId='1';
          //alert("local");
           var db = window.openDatabase("branbox", "1.0", "branbox Demo", 200 * 1024 * 1024);
            db.transaction(function(tx){
            tx.executeSql('SELECT * FROM submenu where status="ON" and businessId = "'+businessId+'" and menuId= "'+getMenuId+'"',[], function (tx, results) {
            var itemLength = results.rows.length;
            var menudatas=results.rows;
            //alert(itemLength);
              //alert(results.rows.item(0).subMenuName);
            for(var i = 0; i < itemLength; i++) {
                var row = menudatas.item(i);
                var obj = {id:row.id,businessId: row.businessId,menuId:row.menuId,subMenuName:row.subMenuName,image:row.image,position:row.position,status:row.status,online:row.online,createdTime:row.createdTime};
                json_arr.push(obj);
            }  

          $scope.SubMenu=json_arr;
          //alert(itemLength);
          //console.log( $scope.SubMenu);
          });
        });
   


  

    $scope.Finalitem =[{
      item: 'Mushroom Soya Biryani (50 AED)  ',
      subMenuid:1,
      menuId:1,
      itemId:1,
      image:[''],
      ingredients:['Mushroom','Soya Chunks','Basmati rice','Onion','Tomato']
    }];


  $scope.totalCount = function(group) {

    alert($("#quantity").val());
    $urlRouterProvider.otherwise('/addToCart');
    
  };
    $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };


  $scope.toggleitem = function(item) {
    if ($scope.isItmeShown(item)) {
      // alert($scope.isItmeShown(item));

        $scope.shownItem = null;
    } else {
      // alert(item);
      $scope.shownItem = item;
    }
  };
  $scope.isItmeShown = function(item) {
    return $scope.shownItem === item;
  };


  })

//item page
.controller('subMenuItem', function($scope,$http,$location,$cordovaSQLite) {

    var url = $location.url();
    var temp = url.split("=");
    var menuId=temp[1];
    var subMenuId=temp[2];
    var tempDataForCatr =  [];  
       $scope.tempDataForCatr=[]; 
       var json_arr =  [];  
        var businessId='1';
          //alert("local");
           var db = window.openDatabase("branbox", "1.0", "branbox Demo", 200 * 1024 * 1024);
            db.transaction(function(tx){
            tx.executeSql('SELECT * FROM item where status="ON" and businessId = "'+businessId+'" and subMenuId= "'+subMenuId+'" and menuId= "'+menuId+'"',[], function (tx, results)
          {
            var itemLength = results.rows.length;
            var menudatas=results.rows;
            //alert(itemLength);
              //alert(results.rows.item(0).subMenuName);
            for(var i = 0; i < itemLength; i++) {
                var row = menudatas.item(i);
                var obj = {id:row.id,businessId: row.businessId,menuId:row.menuId,subMenuId:row.subMenuId,itemName:row.itemName,image:row.image,price:row.price,garnish:row.garnish,tax:row.tax,offers:row.offers,position:row.position,status:row.status,online:row.online,createdTime:row.createdTime};
                json_arr.push(obj);
            }  
          $scope.SubMenuItem=json_arr;
           //alert(itemLength);
          //console.log( $scope.SubMenuItem);
          });
        });
   

    $scope.minus=function(val,index,item)
    {
       
     var total=$("#quantity"+index).val();
     total--;
      if (total>=1)
      {
         
          var price=item.price *total;
          $("#quantity"+index).val(total);
          $("#price"+index).html(price);
          $("#addtocart"+index).val(total);
      }
      else{
          var price=item.price*1;
          $("#price"+index).html(price);
        }
    }

    $scope.plus=function(val,index,item)
    {
      var total= $("#quantity"+index).val();
        if (total>=1)
        {
         
            total++;
            var price=item.price *total;
              $("#quantity"+index).val(total);
              $("#price"+index).html(price);
              $("#addtocart"+index).val(total);
          
        }
    }


     $scope.addToCart=function(val,json,index)
    {
       //console.log(json);
      var quantity=$(val.target).val();
      var price=json.price *quantity;
      //alert(json.id);
      
        var db = window.openDatabase("branbox", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                 // tx.executeSql('CREATE TABLE IF NOT EXISTS ordertable (id INTEGER PRIMARY KEY AUTOINCREMENT,menuId INTEGER, subMenuId INTEGER,itemId INTEGER, itemName TEXT, image TEXT, price TEXT, quantity TEXT, garnish TEXT,tax TEXT,offers TEXT)');
                  
                  // tx.executeSql('INSERT OR REPLACE INTO ordertable (businessId,menuId,subMenuId,itemId,itemName,image,subTotal,quantity,garnish,tax,offers)VALUES("'+json.businessId+'","'+json.menuId+'","'+json.subMenuId+'","'+json.id+'","'+json.itemName+'","'+json.image+'","'+price+'","'+quantity+'","'+json.garnish+'","'+json.tax+'","'+json.offers+'")',successID);
                  
                  tx.executeSql('SELECT * FROM ordertable where itemId="'+json.id+'"',[], function (tx, results)
                {
                  var itemLength = results.rows.length;
                  var menudatas=results.rows;
                  //alert(itemLength);
                   if(itemLength==1 )
                   {
                      tx.executeSql('UPDATE  ordertable SET quantity="'+quantity+'" ,subTotal="'+price+'"  WHERE itemId="'+json.id+'" ',successID);
                      alert("Item Updated successfully");
                   }
                   else
                   {
                     tx.executeSql('INSERT OR REPLACE INTO ordertable (businessId,menuId,subMenuId,itemId,itemName,image,subTotal,quantity,garnish,tax,offers)VALUES("'+json.businessId+'","'+json.menuId+'","'+json.subMenuId+'","'+json.id+'","'+json.itemName+'","'+json.image+'","'+price+'","'+quantity+'","'+json.garnish+'","'+json.tax+'","'+json.offers+'")',successID);
                     alert("Item Added in Cart");
                   }
                 
                });
                  function successID(){
                      return true;
                  }

                  
              });
          


       // $scope.tempDataForCatr.push({name:item.name,
       //      subMenuid:item.subMenuId,
       //      menuId:item.menuId,
       //      itemId:item.id,
       //      price:item.price,
       //      image:item.image,
       //      quantity: quantity,
       //      subTotal: price
       //    });  

       // console.log($scope.tempDataForCatr);
     
    }

  })
//single item page
.controller('item', function($scope,$http,$location) {

    var url = $location.url();
    var temp = url.split("=");
    var itemUrlString="http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxItem.php?menuId="+temp[1]+"&subMenuId="+temp[2]+"&itemId="+temp[3];
    var ingrdientUrlString="http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxIngredients.php?menuId="+temp[1]+"&subMenuId="+temp[2]+"&itemId="+temp[3];
    $http.post(itemUrlString).success(function(data){
    $scope.item=data.rows;
    console.log($scope.SubMenuItem);
    }).error(function(){
      alert("Server Error");
    });

    $http.post(ingrdientUrlString).success(function(data){
    $scope.ingredients=data.rows;
    console.log($scope.SubMenuItem);
    }).error(function(){
      alert("Server Error");
    });



  })



  //cart function
.controller('table', function($scope) {
      $scope.totalAmount="";
     
     var json_arr =  [];  

     var db = window.openDatabase("branbox", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                  tx.executeSql('SELECT * FROM ordertable',[], function (tx, results)
                {

                  var itemLength = results.rows.length;
                  var menudatas=results.rows;
                  //alert(itemLength);
                    //alert(results.rows.item(0).subMenuName);
                  for(var i = 0; i < itemLength; i++) {
                      var row = menudatas.item(i);
                      var obj = {menuId:row.menuId,subMenuId:row.subMenuId,itemName:row.itemName,image:row.image,price:row.price,quantity:row.quantity,subTotal:row.subTotal};
                      json_arr.push(obj);
                      //alert(row.itemName);
                  }  
                  $scope.OrderedItem=json_arr;
                 //alert(itemLength);
                console.log( $scope.OrderedItem);
                });

               
              });

    //   $scope.OrderedItem=[{
    //   item: 'Chicken Briyani',
    //   subMenuid:1,
    //   menuId:1,
    //   itemId:1,
    //   price:20,
    //   image:'img/bri3.jpg',
    //   quantity:2,
    //   subTotal:40
    // },
    // {
    //   item: 'Mutton Briyani',
    //   subMenuid:2,
    //   menuId:1,
    //   itemId:1,
    //   price:400,
    //   image:'img/bri2.jpg',
    //   quantity:5,
    //   subTotal:200
    // }
    // ];
    

        $scope.removeOrder = function(index) {
          $scope.OrderedItem.splice(index,1);
          alert("order deleted");
        };

        $scope.getTotal = function(){
          //alert("call from");
            var total = 0;
            var length= $scope.OrderedItem.length;

            for(var i = 0; i < length; i++){
                var product = $scope.OrderedItem[i];
                total += parseInt(product.subTotal);
                //alert(product.subTotal);
            }
            $scope.totalAmount=total;
            if (total==0) {
              $("#food").hide();
            };
            return total;
        }

        $scope.getsubtotal = function(val,index){
          //console.log($scope.OrderedItem);
//alert();
          // var quantity=$("#quantity").val();
          var quantity=$(val.target).val() ;
          if(quantity=="" || quantity=="0")
          {
            
            $("#quantity").val(0);
             $("#subTotal").val(0);  
          }
          else
          {

            var data= angular.copy($scope.OrderedItem);
            var price=data[index].price;
            var total = quantity*price;
            $scope.OrderedItem.splice(index,1,{item: data[index].item,
              subMenuid:data[index].subMenuid,
              menuId:data[index].menuId,
              itemId:data[index].itemId,
              price:data[index].price,
              image:data[index].image,
              quantity: quantity,
              subTotal: total}); 
            //console.log($scope.OrderedItem);
            $scope.getTotal();
          }
   
            
        }

        $scope.totalCount=function(data) {
          alert(data);
        };

    })



//Author Pravinkumar on 24/7/2015 latestoffer
  .controller('latestOffer', function($scope,$http) {
    $scope.latestOffer = function(){
        $http.post('php/branbox.php',{'branboxVariable':'latestoffer'
        }).success(function(data){
           alert("latestoffer");  
          $scope.specialOffer = { src : 'img/specialOffer.jpg' };
          $scope.dbdata = data;
        }).error(function(){
          $scope.data = "error in Database";
        });
    }

  })
  //Author Pravinkumar on 24/7/2015 latestoffer
  .controller('aboutUs', function($scope,$http) {
    $scope.dbAboutUs = function() {    
        $http.post('php/branbox.php',{'branboxVariable':'aboutUs'}).success(function(data){
            //$scope.aboutUsData = data;   
            alert("aboutus");     
            $scope.firstImages = { src : data['image'] };
            $scope.title = data['title'];
            $scope.description = data['description'];
        }).error(function(){
            $scope.data = "error DataBase";
        });
    }
})
//Author Pravinkumar on 24/7/2015
//location
.controller('MapController', function($scope, $ionicLoading, $compile, $http) {
    //getdata
  $http.post('php/branbox.php',{'branboxVariable':'location'}).success(function(data){
    $scope.dbData = data;
    $scope.initialize(data);
  }).error(function(){
      $scope.data = "error DataBase";
  });
  //initialize map
  $scope.initialize = function(data) {
    var infowindow = new google.maps.InfoWindow()
    var mapOptions = {
        center: new google.maps.LatLng(data[0]['latitude'], data[0]['longitude']),
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    for (var i = 0; i < data.length; i++) {
      var image = 'img/logo.jpg';
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        position: new google.maps.LatLng (data[i]['latitude'], data[i]['longitude'])
      });
      var content = "Business Location :" + data[i]['location'];     
      google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
           infowindow.setContent(content);
           infowindow.open(map,marker);
        };
      })(marker,content,infowindow)); 
    } 
    $scope.map = map;
  }
})
//Author Pravinkumar 
//contact us map
.controller('contactUsMap', function($scope, $ionicLoading, $compile) {
    $scope.initialize = function() {
     var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
        $scope.map = map;
    }
})
//contact us
.controller('contactUs', function($scope, $http) {
    $scope.contactUs = function(){
        $http.post('php/branbox.php',{'branboxVariable':'contactUs'
        }).success(function(data){
          $scope.name = '<div class="contactUsName">' +data['brandName']+ '</div>'; 
          $scope.companyName = '<div class="contactUsAdd">' +data['companyName']+ '</div>'; 
          $scope.address1 = '<div class="contactUsAdd">' +data['address1']+ '</div>'; 
          $scope.address2 = '<div class="contactUsAdd">' +data['address2']+ '</div>'; 
          $scope.city = '<div class="contactUsAdd">' +data['city']+ '</div>'; 
          $scope.state = '<div class="contactUsAdd">' +data['state']+ '</div>'; 
          $scope.country = '<div class="contactUsAdd">' +data['country']+ '</div>'; 
          $scope.postalCode = '<div class="contactUsAdd">' +data['postalCode']+ '</div>'; 
          $scope.phoneNumber = '<div class="contactUsAdd">' +data['phoneNumber1']+ '</div>'; 
          $scope.email = '<div class="contactUsAdd">' +data['email1']+ '</div>'; 
          $scope.website = '<div class="contactUsAdd">' +data['website']+ '</div>'; 
        }).error(function(){
          $scope.data = "error in Database";
        });
    }
})
//Save End User data
.controller('saveUserData', function($scope,$http) {
  $scope.loaderImages = { src : 'img/ajax-loader.gif' };
  $scope.addUserData = function(){
  $(".loading-div").show();  
  $http.post('php/branbox.php',{'branboxVariable':'saveUserData','email':$scope.email,'firstName':$scope.firstName,'lastName':$scope.lastName,'password':$scope.password,'confirmPassword':$scope.confirmPassword,'dob':$scope.dob,'gender':$scope.gender,'telephoneNo':$scope.telephoneNo,'mobleNo':$scope.mobleNo,'address1':$scope.address1,'address2':$scope.address2,'city':$scope.city,'state':$scope.state,'country':$scope.country,'postCode':$scope.postCode
  }).success(function(data){
    $(".loading-div").hide();
    $scope.email='';
    $scope.State = ''; $scope.firstName = ''; $scope.lastName =''; $scope.password = ''; $scope.confirmPassword =''; $scope.dob =''; $scope.gender = ''; $scope.telephoneNo = ''; $scope.mobleNo = ''; $scope.address1 = ''; $scope.address2 = ''; $scope.city = ''; $scope.country = ''; $scope.postCode =''; $scope.state='';
    $scope.show = data;        
  }).error(function(){
  $scope.data = "error in Database";
  });
  }
})




//gallery 

.controller('IntroCtrl', function ($scope, $ionicModal, $ionicSlideBoxDelegate) {
        
    $scope.allImages = 
    [{
        'src' : 'img/d1.jpg'
    }, 
    {
        'src' : 'img/d1.jpg'
    },
    {
        'src' : 'img/d1.jpg'
    }];
 
    $ionicModal.fromTemplateUrl('templates/image-popover.html',
    {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal)
    {
        $scope.modal = modal;
    });

    $scope.openModal = function()
    {
        $ionicSlideBoxDelegate.slide(0);
        $scope.modal.show();
    };

    $scope.closeModal = function() 
    {
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() 
    {
        $scope.modal.remove();
    });
    
    $scope.$on('modal.hide', function() 
    {
    
    });
    
    $scope.$on('modal.removed', function() 
    {
    
    });

    $scope.$on('modal.shown', function() 
    {
        console.log('Modal is shown!');
    });

    $scope.next = function() 
    {
        $ionicSlideBoxDelegate.next();
    };
  
    $scope.previous = function() 
    {
        $ionicSlideBoxDelegate.previous();
    };
  
    $scope.goToSlide = function(index) 
    {
        $scope.modal.show();
        $ionicSlideBoxDelegate.slide(index);
    }
  
    $scope.slideChanged = function(index) 
    {
        $scope.slideIndex = index;
    };
});
 

  
