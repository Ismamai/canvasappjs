
Sfdc.canvas(function() {
    // Save the token
    Sfdc.canvas.oauth.token(window.signedRequestJson.oauthToken);
    window.alert("hello, " + window.signedRequestJson.context.user.fullName);
    console.log("hello, " + window.signedRequestJson.context.user.fullName);
});
var es = {

};
es.SFDC = {
    signedRequest: req.body.signed_request
};
es.SFDC.client = new sfdcClient();