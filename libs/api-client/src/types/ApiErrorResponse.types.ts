const ApiErrorStatusEnum = {
  /**
   * - Bad or expired token.
   */
  401: 401,
  /**
   * - Bad OAuth request (wrong consumer key, bad nonce, expired timestamp...).
   */
  403: 403,
  /**
   * - The app has exceeded its rate limits.
   */
  429: 429,
} as const;

export interface ApiErrorResponse {
  error: {
    /**
     * - The HTTP status code (also returned in the response header).
     */
    status: keyof typeof ApiErrorStatusEnum;
    /**
     * - A short description of the cause of the error.
     */
    message: string;
  };
}
