const UseCase = require('./UseCase');
const UseCaseError = require('./UseCaseError');

it('should throw an error if Execute is not implemented', async function () {
    class TestUseCase extends UseCase {}
    const domain = new TestUseCase();

    expect(domain.Execute()).rejects.toThrow(UseCaseError);
});

it('should not throw an error if Execute is implemented', function () {
    class TestUseCase extends UseCase {async Execute() {}}
    const domain = new TestUseCase();

    expect(domain.Execute).not.toThrow();
});
