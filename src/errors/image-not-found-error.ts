export class ImageNotFoundError extends Error {
  public readonly name = "ImageNotFoundError";

  constructor() {
    super("Image not found.");
  }
}
