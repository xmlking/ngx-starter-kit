import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { KubernetesService } from '../kubernetes/kubernetes.service';

@ValidatorConstraint({ async: true })
export class IsNamespaceUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly kubernetesService: KubernetesService) {}

  async validate(namespace: string, args: ValidationArguments): Promise<boolean> {
    const clusterName = (args.object as any).clusterName;
    return !(await this.kubernetesService.hasNamespace({ cluster: clusterName, namespace }));
  }

  defaultMessage(args: ValidationArguments): string {
    const clusterName = (args.object as any).clusterName;
    return `Namespace with this name '${args.value}' already exists in '${clusterName}' cluster.`;
  }
}

export function IsNamespaceUnique(validationOptions?: ValidationOptions) {
  return (object, propertyName: string) => {
    registerDecorator({
      name: 'isNamespaceUnique',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNamespaceUniqueConstraint,
    });
  };
}
