export class InvalidTokenError extends Error {
  constructor() {
    super('The password reset link has expired or is invalid.');
    this.name = 'InvalidTokenError';
  }
}
