import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function ngxs(schema: any): Rule {
  return chain([
    externalSchematic('@schematics/angular', 'class', {
      name: schema.name,
    }),
  ]);
}
