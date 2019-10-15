/**
 * @type {UseCaseError}
 */
module.exports = class UseCaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "UseCaseError";
    }
};
