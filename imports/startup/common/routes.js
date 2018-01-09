import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

// Create index route
FlowRouter.route('/', {
  name: 'index',
  action() {
    // Do something here
    // After route is followed
    this.render('mainPage');
  }
});

// Create 404 route (catch-all)
FlowRouter.route('*', {
  action() {
    // Show 404 error page
    this.render('notFound');
  }
});