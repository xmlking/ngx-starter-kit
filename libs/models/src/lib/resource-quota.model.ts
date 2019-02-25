export interface Requests {
  cpu: number;
  gpu: number;
  memory: number;
}

export interface Limits {
  cpu: number;
  memory: number;
}

export interface ResourceQuota {
  requests: Requests;
  limits: Limits;
  cpu?: number;
  memory?: number;
}
