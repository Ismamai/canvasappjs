(function(Component, sampleViews) {
    "use strict";

    class FullScreens extends Component {
        constructor() {
            super();

            this.state = {
                showOverlay : false
            };

            var view = this;

        }


        render() {
            var MapControls = sampleViews.MapControls;
            var Next = sampleViews.Next;
            return (
                <div className={"fullScreenMain"}>
                    <ReactRouterDOM.HashRouter >
                        <div>
                            <ReactRouterDOM.Route path="*" component={MapControls} />
                            <ReactRouterDOM.Route path="/Next/:featureId" component={Next} />
                        </div>
                    </ReactRouterDOM.HashRouter>
                </div>
            );
        }
    }




sampleViews.FullScreens = FullScreens;

}(React.Component, sampleViews));