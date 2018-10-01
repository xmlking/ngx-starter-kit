export interface Schema {
  name: string;
  /**
   * Target apps
   */
  projects?: string;
  /**
   * dry run
   */
  dryRun?: boolean;
}
