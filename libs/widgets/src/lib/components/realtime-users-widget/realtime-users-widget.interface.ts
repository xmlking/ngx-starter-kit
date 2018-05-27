export class RealtimeUsersWidgetOptions {
  data: { page: string; views: string }[];
}

export type RealtimeUsersWidgetPages = {
  id?: number;
  page: string;
  users: number;
};
export type RealtimeUsersWidgetData = {
  id?: number;
  label: string;
  value: number;
};
