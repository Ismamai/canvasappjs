(function (Component, sampleViews) {
    "use strict";

    class Next extends Component {
        constructor() {
            super();
            this.goNext = this.goNext.bind(this)
            this.goBack = this.goBack.bind(this)
        }

        goNext() {
            var nextValue = parseInt(this.props.match.params.featureId) + 1;
            window.location.hash = "Next/" + nextValue;
        }

        goBack() {
            es.SFDC.client.navigateBack();
            // history.back()
        }

        open() {
            es.SFDC.client.openObject("00Q1t000004EoE8");
        }


        render() {
            return (
                <div>
                    <h1>This is the main page</h1>
                    <h2> We are currently on {this.props.match.params.featureId} </h2>
                    <button onClick={this.goNext}> Next</button>
                    <button onClick={this.goBack}> Back</button>
                    <button onClick={this.open}> Open record</button>

                </div>
            );
        }
    }

    sampleViews.Next = Next;
}(React.Component, sampleViews));
