ARG DENO_VERSION=2.9.6

FROM denoland/deno:bin-${DENO_VERSION} AS deno

FROM mcr.microsoft.com/devcontainers/base:1-bookworm

COPY --from=deno /deno /usr/local/bin/deno

ENV DENO_DIR=/home/vscode/.cache/deno

RUN mkdir -p "${DENO_DIR}" \
  && chown -R vscode:vscode "${DENO_DIR}"
