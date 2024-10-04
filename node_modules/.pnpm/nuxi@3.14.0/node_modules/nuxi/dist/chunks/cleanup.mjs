import { d as defineCommand } from '../shared/nuxi.3e201632.mjs';
import { c as cleanupNuxtDirs } from '../shared/nuxi.37079f0a.mjs';
import { l as loadKit } from '../shared/nuxi.1c74a7a8.mjs';
import { s as sharedArgs, l as legacyRootDirArgs, r as resolve } from '../shared/nuxi.610c92ff.mjs';
import 'node:util';
import 'node:path';
import 'node:process';
import 'node:tty';
import 'node:url';
import 'node:fs';
import '../shared/nuxi.d2904056.mjs';
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

const cleanup = defineCommand({
  meta: {
    name: "cleanup",
    description: "Clean up generated Nuxt files and caches"
  },
  args: {
    ...sharedArgs,
    ...legacyRootDirArgs
  },
  async run(ctx) {
    const cwd = resolve(ctx.args.cwd || ctx.args.rootDir || ".");
    const { loadNuxtConfig } = await loadKit(cwd);
    const nuxtOptions = await loadNuxtConfig({ cwd });
    await cleanupNuxtDirs(nuxtOptions.rootDir, nuxtOptions.buildDir);
  }
});

export { cleanup as default };
