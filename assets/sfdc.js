var signedRequestJson = decode(req.body.signed_request, consumerSecret);
Sfdc.canvas(function() {
    // Save the token
    Sfdc.canvas.oauth.token(window.signedRequestJson.oauthToken);
    window.alert("hello, " + window.signedRequestJson.context.user.fullName);
    console.log("hello, " + window.signedRequestJson.context.user.fullName);
});
var es = {

};
es.SFDC = {
    signedRequest: signedRequestJson
};
es.SFDC.client = new sfdcClient();