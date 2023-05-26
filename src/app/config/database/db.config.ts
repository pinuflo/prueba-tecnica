import {registerAs} from "@nestjs/config";

export default registerAs('database', () => {
    return {
        type: 'postgres' as 'postgres',
        subscribers: [__dirname + '/../../subscribers/*.subscriber{.ts,.js}'],
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        port: parseInt(process.env.PGPORT),
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        synchronize: false,
        migrations: [__dirname + '/migrations/*{.ts,.js}' ],
        migrationsTableName: 'migrations',
        cli:{
            migrationsDir: __dirname + '/migrations'
        }
    }
});