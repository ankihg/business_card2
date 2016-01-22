(function(module) {
  var indexController = {};



  indexController.index = function() {
    console.log('indexController index');
        $('#contain-education').show();
        $('#contain-technical-skills').show();

        $('.contain-checklist').show();
        $('#projects').hide();

        $('#about').show();
        $('main').show();
  };

  module.indexController = indexController;
})(window);
