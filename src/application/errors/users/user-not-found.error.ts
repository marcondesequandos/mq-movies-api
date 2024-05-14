export class UserNotFoundError extends Error {
  constructor(msg?: string) {
    super(msg || "User not found");
    this.name = "UserNotFoundError";
  }
}
