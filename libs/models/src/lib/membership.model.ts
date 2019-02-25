export enum RoleType {
  Admin = 'Admin',
  Developer = 'Developer',
}

export enum MembershipType {
  User = 'User',
  Group = 'Group',
}

export interface Membership {
  name: string;
  type: MembershipType;
  roles: Set<RoleType>;
}
