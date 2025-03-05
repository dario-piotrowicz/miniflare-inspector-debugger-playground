import { Miniflare } from "miniflare";

const mf = new Miniflare({
    inspectorPort: 9229,
    inspectorProxy: true,
    workers: [
        {
            scriptPath: './worker.js',
            modules: true,
            compatibilityDate: "2025-01-21",
        },
    ],
});

for (let i = 0; i < 5; i++) {
    console.log(`\x1b[34m ${i}... \x1b[0m`)

    await new Promise((r) => setTimeout(r, 5_000));

    const resp = await mf.dispatchFetch("http://localhost");
    
    const text = await resp.text();
    
    console.log(`response from worker: ${text}`);
    
    console.log('');
}


await mf.dispose();