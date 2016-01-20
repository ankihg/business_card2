(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.
    var qs = '?per_page=100&sort=updated';

    $.ajax({
      url: 'https://api.github.com/users/ankihg/repos' + '?per_page=5&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + GITHUB_TOKEN},
      success: function(data, message, xhr) {
              console.log(data);
              repos.all = data;
              callback();
         }
    });

    // DONE: Model method that filters the full collection for repos with a particular attribute.
    // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
    repos.with = function(attr) { //filter by
      return repos.all.filter(function(repo) {
        return repo[attr];
      });
    }
  };

  module.repos = repos; //exporting repos object to the window object
})(window);