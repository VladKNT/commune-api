import { ConnectionOptions } from 'typeorm';

const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '../../../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '../../migrations/**/*.ts'],
  subscribers: [__dirname + '../../database/subscribers/**/*.ts'],
  cli: {
    entitiesDir: 'src/',
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'src/database/subscribers',
  },
  synchronize: false,
  logging: true,
};

export = ormconfig;
