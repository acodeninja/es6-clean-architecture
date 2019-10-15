const Request = require('./Request');

it('should assign instantiated properties to the domain instance', function () {
    class TestRequest extends Request {}
    const request = new TestRequest({test: true});

    expect(request.test).toBeTruthy();
});
