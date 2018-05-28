export class RealtimeUsersWidgetOptions {
  data: { page: string; views: string }[];
}

export interface RealtimeUsersWidgetPages {
  id?: number;
  page: string;
  users: number;
}
export interface RealtimeUsersWidgetData {
  id?: number;
  label: string;
  value: number;
}
