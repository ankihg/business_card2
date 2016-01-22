page.base('');

page('/', indexController.index);
page('/projects', projectController.loadAll, projectController.index);
// page('/projects/*', '/');

page('/projects/:tags', projectController.loadByTag, projectController.index);
page('/about', aboutController.index);



page();
