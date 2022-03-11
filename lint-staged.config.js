module.exports = {
  "*.{js,ts}": ["eslint --fix"],
  "*.{ts,json,md,mdx,html}": ["prettier --write"],
  "*.ts": () => "tsc -p tsconfig.json --noEmit --incremental false",
};
