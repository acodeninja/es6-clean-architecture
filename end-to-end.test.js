const {Boundary, UseCase} = require('.');

describe('Executing a UseCase', function () {
    it('should get a response when executing a use case', async function () {
        class TestRequest extends Boundary.Request {}
        class TestResponse extends Boundary.Response {}
        class TestUseCase extends UseCase.UseCase {
            async Execute() {
                return new TestResponse();
            }
        }

        const getAResponse = new TestUseCase(new TestRequest());
        const response = await getAResponse.Execute();
        expect(response instanceof Boundary.Response).toBeTruthy();
    });
});
