'use strict';
var sfdcClient = function () {
    console.log('Initializing sfdcClient...');

    initialize();

    function initialize() {
        if (!Sfdc) {
            throw new Error("SFDC not found");
        }
        publish('ess_cnv.resize');
    }

    function publish(event, payload) {
        Sfdc.canvas.client.publish(es.SFDC.signedRequest.client, {
            "name": event,
            "payload": payload
        });
    }



    /**
     * Adapts operation information to an event that will be sent
     * to the remote visualforce page
     * @param operation
     * @returns
     *      {
     *          {
     *              channel: string,
     *              payload: {
     *                  object: *,
     *                  action: (string|*),
     *                  params: *
     *              }
     *          }
     *     }
     */
    function createEventFromOperation(operation) {
        return {
            channel: 'ess_cnv.' + operation.action,
            payload: {
                object: operation.object,
                action: operation.action,
                params: operation.params,
                recordTypeId: operation.recordTypeId
            }
        };
    }

    function sendEventToRemoteCanvas(operation) {
        var event = createEventFromOperation(operation);
        publish(event.channel, event.payload);
    }

    function openObject(objectId) {
        var operation = {
            object: 'Lead',
            action: 'Open',
            params: {id: objectId}
        };
        sendEventToRemoteCanvas(operation);
    }

    function navigateBack() {
        var event = {
            channel: 'ess_cnv.HistoryBack'
        };
        publish(event.channel);
    }

    return {
        openObject:openObject,
        navigateBack:navigateBack
    }
};
