page.base('');

page('/', indexController.index);
page('/projects', projectController.index);
// page('/projects/*', '/');

page('/projects/:tag', projectController.index);
page('/about', aboutController.index);



page();
