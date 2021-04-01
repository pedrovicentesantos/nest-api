import { ConnectionOptions } from 'typeorm';
import * as path from 'path';

const config: ConnectionOptions = {
  type: 'sqlite',
  database: 'db/dogbreeds.db',
  synchronize: false,
  migrationsRun: true,
  migrationsTableName: 'migration_history',
  entities: [path.resolve(__dirname, 'src/database/entities/**/*.entity{.ts,.js}')],
  migrations: [path.resolve(__dirname, 'src/database/migrations/**')],
  cli: {
    entitiesDir: 'src/database/entities',
    migrationsDir: 'src/database/migrations'
  }
}

export default config;
