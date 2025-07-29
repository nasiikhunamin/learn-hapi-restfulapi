const InvariantError = require('../../exceptions/InvariantError');
const { UserPayloadSchema } = require('./schema');

const UsersValidator = {
  validateUserPayload: (payload) => {
    const validateUserPayload = UserPayloadSchema.validate(payload);

    if (validateUserPayload.error) {
      throw new InvariantError(validateUserPayload.error.message);
    }
  },
};

module.exports = UsersValidator;
