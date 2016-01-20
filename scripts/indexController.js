(function(module) {
  var indexController = {};



  indexController.index = function() {
        Project.fetchAll(projectView.initIndexPage);
        $('#contain-education').show();
        $('#contain-technical-skills').show();

        $('.contain-checklist').show();
        $('#projects').hide();

        $('#about').show();

        $('#repos').hide();

  };

  module.indexController = indexController;
})(window);
