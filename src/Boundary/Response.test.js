const Response = require('./Response');

it('should assign instantiated properties to the domain instance', function () {
    class TestResponse extends Response {}
    const request = new TestResponse({test: true});

    expect(request.test).toBeTruthy();
});
