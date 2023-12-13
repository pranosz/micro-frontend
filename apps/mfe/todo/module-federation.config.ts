import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'todo',
  exposes: {
    './Routes': 'apps/mfe/todo/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
