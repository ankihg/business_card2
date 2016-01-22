page.base('');

page('/', indexController.index);
page('/projects', projectController.loadAll, projectController.index);
// page('/projects/*', '/');

page('/projects/:tag', projectController.loadByTag, projectController.index);
page('/about', aboutController.index);



page();
