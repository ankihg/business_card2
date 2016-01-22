(function(module) {
  var projectController = {};

  Project.fetchAll(projectView.initIndexPage);

projectController.index = function(ctx, next) {
    console.log('projectController index')

    $('#contain-education').hide();
    $('#contain-technical-skills').hide();
    $('#about').hide();

    $('#projects').show();
    $('.contain-checklist').show();


    projectView.index(ctx);

  };

projectController.loadAll = function(ctx, next) {
  ctx.projects = Project.all;
  next();
};

projectController.loadByTag = function(ctx, next) {
  ctx.projects = Project.all.filter(function(p) {
    return (p.tags.indexOf(ctx.params.tag) >= 0)
  });
  next();
};


  module.projectController = projectController;
})(window);
