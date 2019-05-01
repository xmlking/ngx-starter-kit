import { Rule, Tree, SchematicContext, SchematicsException } from '@angular-devkit/schematics';

export function readSafe(tree: Tree, file: string, charset: string = 'utf-8'): string {
  const buffer = tree.read(file);

  if (buffer === null) {
    throw new SchematicsException(`Could not read ${file} from disk.`);
  }

  return buffer.toString(charset);
}

/**
 * Allows creating the given file using a creator function.
 *
 * @param file - The file to create
 * @param updater - A function which should return the new content
 * @returns - A schematic rule
 */
export function createFile(file: string, creator: () => string): Rule {
  return (tree: Tree, context: SchematicContext) => {
    tree.create(file, creator());
    return tree;
  };
}

/**
 * Allows updating the given file using a updater function.
 *
 * @param file - The file to update
 * @param updater - A function which receives the current content and should return the new content
 * @returns - A schematic rule
 */
export function updateFile(file: string, updater: (content: string) => string): Rule {
  return (tree: Tree, context: SchematicContext) => {
    tree.overwrite(file, updater(readSafe(tree, file)));
    return tree;
  };
}
