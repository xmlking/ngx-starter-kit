// import { Architect } from '@angular-devkit/architect/src/index2';
// import { TestingArchitectHost } from '@angular-devkit/architect/testing/index2';
// import { logging, schema } from '@angular-devkit/core';
//
// const { join } = require('path');
//
// describe('Command Runner Builder', () => {
//   let architect: Architect;
//   let architectHost: TestingArchitectHost;
//
//
//   beforeEach(async () => {
//     const registry = new schema.CoreSchemaRegistry();
//     registry.addPostTransform(schema.transforms.addUndefinedDefaults);
//
//
//     // Arguments to TestingArchitectHost are workspace and current directories.
//     // Since we don't use those, both are the same in this case.
//     architectHost = new TestingArchitectHost(__dirname, __dirname);
//     architect = new Architect(architectHost, registry);
//
//
//     // This will either take a Node package name, or a path to the directory
//     // for the package.json file.
//     await architectHost.addBuilderFromPackage(join(__dirname, '..'));
//     console.log('#', Array.from((architectHost as any)._builderMap.keys()))
//   });
//
//
//   // This might not work in Windows.
//   it('can run ls', async () => {
//     // Create a logger that keeps an array of all messages that were logged.
//     const logger = new logging.Logger('');
//     const logs: string[] = [];
//     logger.subscribe(ev => logs.push(ev.message));
//
//     // A "run" can contain multiple outputs, and contains progress information.
//     const run = await architect.scheduleBuilder('@ngx-starter-kit/tools:command', {
//       command: 'ls',
//       args: [__dirname],
//     }, { logger });  // We pass the logger for checking later.
//
//
//     // The "result" member is the next output of the runner.
//     // This is of type BuilderOutput.
//     const output = await run.result;
//
//     // Stop the builder from running. This really stops Architect from keeping
//     // the builder associated states in memory, since builders keep waiting
//     // to be scheduled.
//     await run.stop();
//
//     // Expect that it succeeded.
//     expect(output.success).toBe(true);
//
//     // Expect that this file was listed. It should be since we're running
//     // `ls $__dirname`.
//     expect(logs.toString()).toContain('index_spec.ts');
//   });
// });
//
