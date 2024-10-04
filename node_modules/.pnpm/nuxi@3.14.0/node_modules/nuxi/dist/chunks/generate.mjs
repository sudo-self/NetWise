import { d as defineCommand } from '../shared/nuxi.3e201632.mjs';
import buildCommand from './build.mjs';
import { s as sharedArgs, l as legacyRootDirArgs } from '../shared/nuxi.610c92ff.mjs';
import 'node:util';
import 'node:path';
import 'node:process';
import 'node:tty';
import 'node:url';
import '../shared/nuxi.1c74a7a8.mjs';
import 'node:fs';
import 'node:perf_hooks';
import '../shared/nuxi.eaa29140.mjs';
import './satisfies.mjs';
import '../shared/nuxi.2155838d.mjs';
import '../shared/nuxi.8193a556.mjs';
import '../shared/nuxi.4d6fa6e6.mjs';
import 'node:module';
import '../shared/nuxi.deb0a220.mjs';
import 'node:assert';
import 'node:v8';
import 'crypto';
import 'fs';
import 'module';
import 'path';
import 'perf_hooks';
import 'os';
import 'vm';
import 'url';
import 'assert';
import 'process';
import 'v8';
import 'util';
import 'tty';
import 'node:fs/promises';
import 'node:crypto';
import '../shared/nuxi.15c58622.mjs';
import '../shared/nuxi.9fc8068c.mjs';
import '../shared/nuxi.d2904056.mjs';
import '../shared/nuxi.2509f57e.mjs';
import '../shared/nuxi.a5aa4ada.mjs';
import '../shared/nuxi.d3241ca4.mjs';
import '../shared/nuxi.5aaa4630.mjs';

const generate = defineCommand({
  meta: {
    name: "generate",
    description: "Build Nuxt and prerender all routes"
  },
  args: {
    ...sharedArgs,
    ...legacyRootDirArgs,
    dotenv: {
      type: "string",
      description: "Path to .env file"
    }
  },
  async run(ctx) {
    ctx.args.prerender = true;
    await buildCommand.run(ctx);
  }
});

export { generate as default };
