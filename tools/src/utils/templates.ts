import { strings } from '@angular-devkit/core'
import {
  FilePredicate,
  Rule,
  chain,
  mergeWith,
  apply,
  url,
  template,
  filter,
  noop,
  move,
} from '@angular-devkit/schematics'

interface Options {
  filter?: FilePredicate<boolean>
  params?: {
    [key: string]: any
  }
}

/**
 * Allows rendering the template files for a schematic.
 *
 * @param path - The template file directory
 * @param target - The target directory
 * @param options - The template options
 * @returns - A schematic rule
 */
export function renderTemplates(path: string, target: string, options: Options = {}): Rule {
  return chain([
    mergeWith(
      apply(url(path), [
        options.filter ? filter(options.filter) : noop(),
        template({
          ...strings,
          ...(options.params ? options.params : {}),
        }),
        move(target),
      ]),
    ),
  ])
}
