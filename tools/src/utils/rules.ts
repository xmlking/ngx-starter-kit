import { Tree, SchematicContext, Rule, chain } from '@angular-devkit/schematics';

/**
 * Allows conditionally add schematic rules.
 *
 * @param condition - The condition which adds or skips the given rules
 * @param rules - The rules to add
 * @returns - A schematic rule
 */
export function conditional(
  condition: ((tree: Tree, context: SchematicContext) => boolean) | boolean,
  rules: Rule[] = [],
): Rule {
  const check = (tree: Tree, context: SchematicContext): boolean => {
    switch (typeof condition) {
      case 'function':
        return condition(tree, context) === true;

      case 'boolean':
        return condition === true;
    }
  };

  return (tree: Tree, context: SchematicContext) => chain(check(tree, context) ? rules : []);
}
