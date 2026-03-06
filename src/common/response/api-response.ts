export class ApiResponse<T> {
  public success: boolean;
  public message: string;
  public data: T | null;
  public timestamp: string;

  constructor(
    data: T | null,
    message: string = 'Success',
    success: boolean = true,
  ) {
    this.data = data;
    this.message = message;
    this.success = success;
    this.timestamp = new Date().toISOString();
  }

  static success<T>(
    data: T,
    message: string = 'Request successful',
  ): ApiResponse<T> {
    return new ApiResponse(data, message, true);
  }
}
