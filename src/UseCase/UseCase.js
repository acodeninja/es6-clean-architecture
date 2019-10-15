const UseCaseError = require('./UseCaseError');

/**
 * @type {UseCase}
 */
module.exports = class UseCase {
    /**
     * @param request {Request}
     */
    constructor(request) {
        this.request = request;
    }

    /**
     * @returns {Promise<void>}
     * @constructor
     */
    async Execute() {
        throw new UseCaseError('Execute() must be implemented on the Domain');
    }
};
