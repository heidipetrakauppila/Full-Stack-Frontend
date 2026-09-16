import { useState } from "react";
import { greeting } from "./lib/greeting.ts";

const stack = [
  { label: "Runtime", value: "Deno 2.9" },
  { label: "Build tool", value: "Vite 8" },
  { label: "UI", value: "React 19" },
  { label: "Language", value: "TypeScript 6" },
] as const;

export default function App() {
  const [count, setCount] = useState(0);
  const title = "Hello FullStack"; //import.meta.env.VITE_APP_TITLE ?? "Deno + Vite Starter";

  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Container-ready
        </div>

        <h1 id="page-title">{title}</h1>
        <p className="lede">
          {greeting("builder")} Toimiiiiko. Toimii.
        </p>

        <div className="actions">
          <code>deno task dev</code>
          <a href="https://docs.deno.com/examples/vite_tutorial/" target="_blank" rel="noreferrer">
            Read the Deno + Vite guide
          </a>
        </div>
      </section>

      <section className="stack-grid" aria-label="Included technology">
        {stack.map((item) => (
          <article className="stack-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className="demo-card" aria-labelledby="demo-title">
        <div>
          <span className="section-label">Hot reload demo</span>
          <h2 id="demo-title">Edit, save, see it instantly.</h2>
          <p>
            Change{" "}
            <code>src/App.tsx</code>. Vite preserves this component state while the page updates.
          </p>
        </div>

        <button type="button" onClick={() => setCount((current) => current + 1)}>
          Count is <span aria-live="polite">{count}</span>
        </button>
      </section>

      <footer>
        <span>Ready for your next idea.</span>
        <code>deno task ci</code>
      </footer>
    </main>
  );
}
