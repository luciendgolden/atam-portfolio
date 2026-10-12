import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { basename, join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';

const directory = mkdtempSync('src/pages/pagination-check-');
const route = basename(directory);
const output = mkdtempSync(join(tmpdir(), 'atam-pagination-'));
try {
    writeFileSync(join(directory, '[...page].astro'), `---
import Pagination from '../../components/Pagination.astro';
export function getStaticPaths({ paginate }) {
    return paginate(Array.from({ length: 13 }, (_, i) => i), { pageSize: 6 });
}
const { page } = Astro.props;
---
<Pagination page={page} />
`);
    execFileSync('npm', ['run', 'build', '--', '--outDir', output], { stdio: 'inherit' });
    const base = `/atam-portfolio/${route}`;
    const expected = [[`${base}/2`], [base, `${base}/3`], [`${base}/2`]];
    for (let page = 1; page <= 3; page++) {
        const file = page === 1 ? 'index.html' : `${page}/index.html`;
        const html = readFileSync(join(output, route, file), 'utf8');
        const links = [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((match) => match[1].replace(/\/$/, ''));
        assert.deepEqual(links, expected[page - 1], `Pagination page ${page}`);
    }
    console.log('Passed: real Astro pagination, 3 pages, previous/next links and boundaries');
} finally {
    rmSync(directory, { recursive: true, force: true });
    rmSync(output, { recursive: true, force: true });
}
