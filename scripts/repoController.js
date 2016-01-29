(function(module) {
  var repoController = {};

  // DID: Define a function that hides all main section elements, and then reveals just the #about section:
  repoController.index = function() {
    $('.contain-checklist').hide();
    $('#projects').hide();

    $('#contain-education').hide();
    $('#contain-technical-skills').hide();
    $('#about').hide();

    $('#repos').show();

     repos.requestRepos(repoView.index);
  };

  module.repoController = repoController;
})(window);
