import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { Schema as featureOptions } from './schema';

export default function store(options: featureOptions): Rule {
  return chain([
    externalSchematic('@nrwl/schematics', 'class',
      options)
      // {
      // name: options.name,
      // project: options.project,
      // }),
  ]);
}
