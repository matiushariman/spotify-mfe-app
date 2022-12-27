export interface Followers {
  /**
   * - This will always be set to null, as the Web API does not support it at the moment.
   */
  readonly href: string | null;
  /**
   * - The total number of followers.
   */
  readonly total: number;
}
