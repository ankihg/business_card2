(function(module) {
  var repoView = {};

  // DONE: Private methods declared here live only within the scope of the wrapping IIFE.
  var ui = function() {
    // var $about = $('#repos'); // Best practice: Cache the DOM query if it's used more than once.
    //
    // $about.find('ul').empty();
    // $about.show().siblings().hide();
  };

  // DONE: How do you want to render a single repo as html? Return your filled in HTML template.
  var render = function(repo) { //we need to update the DOM with some stuff you got from the data
    console.log('render');
    var template = Handlebars.compile($('#repo-template').text());
    return template(repo);
  };

  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    // ui();
    console.log('repoViewIndex');
    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
    $('#repos').append(
      // repos.with('forks_count').map(render)
      repos.all.map(render)
    );
  };

  module.repoView = repoView;
})(window);
