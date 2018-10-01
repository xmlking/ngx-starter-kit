import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function ngxs(schema: any): Rule {
  return chain([
    externalSchematic('@nrwl/schematics', 'class',
      schema)
      // {
      // name: schema.name,
      // project: schema.project,
      // }),
  ]);
}
