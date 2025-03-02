import { Miniflare } from "miniflare";

const mf = new Miniflare({
    inspectorPort: 9229,
    workers: [
        {
            scriptPath: './worker.js',
            modules: true,
            compatibilityDate: "2025-01-21",
        },
    ],
});

// a delay to help the debugger connect
// await new Promise(r => setTimeout(r, 3_000));

const resp = await mf.dispatchFetch("http://localhost");

const text = await resp.text();

console.log(`response from worker: ${text}`);

console.log('');

await mf.dispose();