# Deno + Vite starter

A current React and TypeScript web starter powered entirely by Deno. It includes Vite hot module replacement, Deno's formatter/linter/test runner, a frozen dependency lockfile, a Zed-ready development container, and a GitHub Actions verification workflow. Trusted Vite and TypeScript tooling runs through explicit `deno run -A npm:...` tasks, so no separate Node.js installation is needed.

## Included versions

- Deno 2.9.6
- Vite 8.2.2
- React 19.2.8
- TypeScript 6.0.3

Dependencies are pinned in `package.json` and resolved in `deno.lock` so local, container, and CI installs agree.

## Start in a development container

1. Install Docker or Podman and ensure it is available in your `PATH`.
2. Open this folder in Zed and choose **Open in Container** when prompted.
3. If you dismissed the prompt, run **Project: Open Remote** from the command palette and choose **Connect Dev Container**.
4. In Zed's terminal, run:

   ```sh
   deno task dev
   ```

The container installs Deno from its official binary image, works as a non-root user, restores dependencies with `deno ci`, installs Zed's `deno` extension, and forwards Vite on port `5173`. Project settings in `.zed/settings.json` select the Deno language server and formatter for JavaScript, TypeScript, and TSX. Common commands are also available through Zed's task picker.

The base image names its non-root account `vscode`; that username is an image convention and does not make the container dependent on VS Code. Optional VS Code customizations remain in the file for cross-editor compatibility.

The dev-container file intentionally uses the specification's base JSON schema. This validates portable container properties without pulling in VS Code's internal `vscode://` schema references, which Zed cannot resolve.

## Start locally

Install Deno 2.9.6 or newer, then run:

```sh
deno install
deno task dev
```

Open <http://localhost:5173>.

Copy `.env.example` to `.env.local` if you want to customize the example title.

## Tasks

| Command                | Purpose                                         |
| ---------------------- | ----------------------------------------------- |
| `deno task dev`        | Start Vite with hot module replacement          |
| `deno task build`      | Type-check and build optimized files in `dist/` |
| `deno task preview`    | Preview the production build on port `4173`     |
| `deno task typecheck`  | Type-check the app and Vite config              |
| `deno task check`      | Verify formatting, linting, and types           |
| `deno task test`       | Run Deno tests once                             |
| `deno task test:watch` | Re-run tests as files change                    |
| `deno task ci`         | Run every CI check and the production build     |

## Project layout

```text
.
├── .devcontainer/       Reproducible Deno development environment
├── .github/workflows/   Continuous integration
├── .zed/                Zed language-server settings and tasks
├── src/                 React application
├── tests/               Deno tests
├── deno.json            Deno tasks and tool configuration
├── deno.lock            Exact dependency graph
├── package.json         npm dependencies consumed by Deno
└── vite.config.ts       Vite and container-friendly server settings
```

## Update dependencies

Review available updates with `deno outdated`. After deliberately changing pinned versions in `package.json`, refresh and verify the lockfile:

```sh
deno install --frozen=false
deno task ci
```

Update `DENO_VERSION` in both `.devcontainer/Dockerfile` and `.devcontainer/devcontainer.json` when moving the project to a newer Deno release.

## Deploy

Run `deno task build` and publish the generated `dist/` directory to any static host.
