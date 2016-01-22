(function(module) {
  var projectController = {};

  Project.fetchAll(projectView.initIndexPage);

projectController.index = function(ctx, next) {
    console.log('projectController index')

    $('#contain-education').hide();
    $('#contain-technical-skills').hide();
    $('#about').hide();
    //
    // $('.contain-checklist').show();
    // $('#projects').show();
    // $('main').children().hide();
    $('#projects').show();
    $('.contain-checklist').show();


    projectView.index(ctx);

  };



  module.projectController = projectController;
})(window);
