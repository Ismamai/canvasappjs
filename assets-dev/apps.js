

var MobileScreensComponent = sampleViews.FullScreens;

var routes = {
    '/Next/:value': function(value) {
        console.log("Next screen." +value);
    },
    '' : function () {
        console.log("initial screen");
    }
};

sampleViews.appRouter = new DirectorRouter(routes);

sampleViews.appRouter.init();


ReactDOM.render(<MobileScreensComponent/>, document.getElementById("mobileScreen"));