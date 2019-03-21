(function (Component, sampleViews) {
    "use strict";

    class MapControls extends Component {
        constructor() {
            super();
            this.goNext = this.goNext.bind(this)
        }

        goNext() {
            window.location.hash = "Next/0";
        }

        render() {
            return (
                <div>
                    <h1>This is the main page</h1>
                    <h2> We are currently on initial page</h2>
                    <button onClick={this.goNext}> Next</button>
                </div>
            );
        }
    }

    sampleViews.MapControls = MapControls;
}(React.Component, sampleViews));
