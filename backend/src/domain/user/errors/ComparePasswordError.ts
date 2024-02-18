export class ComparePasswordError extends Error {
  constructor() {
    super('Invalid password');
    this.name = 'ComparePasswordError';
  }
}
