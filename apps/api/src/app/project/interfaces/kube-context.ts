import { Labels } from '@ngx-starter-kit/models';

export interface KubeContext {
  readonly cluster: string;
  readonly namespace: string;
  readonly labels?: Labels;
}
