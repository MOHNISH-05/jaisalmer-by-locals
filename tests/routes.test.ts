import {paths} from '../src/lib/content';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
test('published content paths are unique and resolve to supported route patterns',()=>{assert.equal(new Set(paths).size,paths.length);for(const p of paths)assert.match(p,/^\//)});
test('no visible placeholder links are authored',()=>{const content=['src/app/page.tsx','src/components/ui.tsx','src/components/header.tsx','src/components/footer.tsx'].map(path=>readFileSync(path,'utf8')).join('\n');assert.equal(content.includes('href="#"'),false)});
test('required public assets exist',()=>['public/logo.svg','public/fort.jpg','public/desert.jpg','public/heritage.jpg'].forEach(p=>assert.equal(existsSync(p),true)));
