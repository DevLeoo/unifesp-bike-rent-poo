export class UserWithOpenRentError extends Error {
  public readonly name = "UserWithOpenRent";

  constructor() {
    super("User with Open Rent.");
  }
}
