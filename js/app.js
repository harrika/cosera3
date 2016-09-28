(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', ['MenuSearchService', NarrowItDownController])
.service('MenuSearchService', ['$http','ApiBasePath', MenuSearchService]);


function NarrowItDownController(MenuSearchService) {

  this.searchTerm = "";
  var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

  promise.then(function (response) {
    this.found = response.data;
  })
  .catch(function (error) {
    console.log("Could not retrieve data.");
  });

}


function MenuSearchService($http, ApiBasePath) {

  this.getMatchedMenuItems = function(ss) {
    var response = [];
    var resp = $http({
      method: "GET",
      url:  "https://davids-restaurant.herokuapp.com/menu_items.json"
    });
   
    for (var i = 0; i < resp.length; i++) {
      var dsc = resp[i].description;
        if (dsc.toLowerCase().indexOf(ss) !== -1) {
          response.push(resp[i[);
        }
    }
  
    return response;

  };  

}

})();
