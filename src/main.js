import './main.scss';

(function($) {

  'use strict';

  const MyPlugin = function() {

    // Public method - can be called from client code
    this.publicMethod = function() {
        console.log('public method called!');
    };

    // Private method - can only be called from within this object
    var privateMethod = function() {
        console.log('private method called!');
    };

  };

  //return the object for global use
  $.myPlugin = function() {
    return new MyPlugin();
  }

})(jQuery);

//export for package
export default $.myPlugin();