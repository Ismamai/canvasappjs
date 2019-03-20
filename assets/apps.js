'use strict';

var MobileScreensComponent = sampleViews.FullScreens;

var routes = {
    '/Next/:value': function NextValue(value) {
        console.log("Next screen." + value);
    },
    '': function _() {
        console.log("initial screen");
    }
};

sampleViews.appRouter = new DirectorRouter(routes);

sampleViews.appRouter.init();

ReactDOM.render(React.createElement(MobileScreensComponent, null), document.getElementById("mobileScreen"));
//# sourceMappingURL=apps.js.map
