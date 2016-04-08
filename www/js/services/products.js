'use strict';

app.factory('Products', function(FURL, $firebaseArray) {

  var ref = new Firebase(FURL);
  var products = $firebaseArray(ref.child('products'));

  var Products = {
    
    all: function(){
      return products;
    },

    saveProducts: function(product, image){
      var newProduct = {
        name: product.name,
        tagline: product.tagline,
        description: product.description,
        price: product.price,
        image: image
      };

      return products.$add(newProduct).then(function(){
        console.log('added to the DB'); 
      })
    }
  };
  return Products;
});