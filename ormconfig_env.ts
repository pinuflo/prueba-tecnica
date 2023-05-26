import { DataSource } from 'typeorm';
export default new DataSource({

  type: 'postgres',
  host: "host",
  port: 5432,
  username: "username",
  password: "password",
  database: "database",
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  migrations: ['src/app/config/database/migrations/*{.ts,.js}'],
});
