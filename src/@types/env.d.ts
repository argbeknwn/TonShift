interface ImportMetaEnv extends Readonly<Record<string, string | boolean | undefined>> {
  readonly VITE_APP_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
