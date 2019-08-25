import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { NodeDependencyType, addPackageJsonDependency } from '@schematics/angular/utility/dependencies';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Adds dependencies to an angular project.
 *
 * @param type - The dependency type
 * @param dependencies - The dependencies to add
 * @param options - Some options for installing dependencies
 * @returns - A schematics rule
 */
// export function addDependencies(type: NodeDependencyType, dependencies: string[]): Rule {
//   return (tree: Tree, _context: SchematicContext) => {
//     return of(...dependencies).pipe(
//       map(name => {
//         addPackageJsonDependency(tree, {
//           type,
//           name,
//           version: 'latest',
//           overwrite: false,
//         });
//         return tree;
//       }),
//     );
//   };
// }

/**
 * Installs dependencies with users package manager.
 *
 * @returns - A schematics rule
 */
export function installDependencies(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}
