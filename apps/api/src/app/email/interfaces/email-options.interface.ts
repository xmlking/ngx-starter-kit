export class EmailModuleOptions {
  transport: {
    host: string;
    port?: number;
    secure?: boolean;
    auth?: {
      user: string;
      pass: string;
    };
  };
  defaults: {
    forceEmbeddedImages?: boolean;
    from: string;
  };
  templateDir?: string;
}
