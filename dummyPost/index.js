module.exports = function (context, req) {
    console.log('JavaScript HTTP trigger Dummy POST function processed a request.');
    context.res.body = "Dummy body";
    context.done();
};