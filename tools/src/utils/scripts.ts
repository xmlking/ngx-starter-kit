import { JsonAstObject, parseJsonAst, JsonParseMode } from '@angular-devkit/core';
import { Rule, Tree, SchematicContext, SchematicsException } from '@angular-devkit/schematics';
import { findPropertyInAstObject, appendPropertyInAstObject } from '@schematics/angular/utility/json-utils';
import { readSafe } from './files';

function readPackageJson(tree: Tree): JsonAstObject {
  const content = readSafe(tree, 'package.json');
  const pkg = parseJsonAst(content, JsonParseMode.Strict);

  if (pkg.kind !== 'object') {
    throw new SchematicsException('Invalid package.json. Expected an object.');
  }

  return pkg;
}

/**
 * Allows adding a script entry to the package json.
 *
 * @param name - The script name
 * @param value - The command line which should be executed with this script
 * @returns - A schematic rule
 */
export function addScript(name: string, value: string): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const pkg: JsonAstObject = readPackageJson(tree);
    const scripts = findPropertyInAstObject(pkg, 'scripts');
    const script = findPropertyInAstObject(scripts as any, name);
    const recorder = tree.beginUpdate('package.json');

    if (!script) {
      appendPropertyInAstObject(recorder, scripts as any, name, value, 4);
    } else {
      const { end, start } = script;

      recorder.remove(start.offset, end.offset - start.offset);
      recorder.insertRight(start.offset, JSON.stringify(value));
    }

    tree.commitUpdate(recorder);

    return tree;
  };
}
