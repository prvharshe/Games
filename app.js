var airbrake = new airbrakeJs.Client({
  projectId: 156356,
  projectKey: 'c9794c1bf0988f8b7ed7073d6dadbb65'
});
airbrake.addFilter(function (notice) {
  notice.context.environment = 'production';
  return notice;
});