import { ConfigModule } from "@nestjs/config";
import { DataSource } from "typeorm";

import dbConfig from "./src/app/config/database/db.config";

ConfigModule.forRoot({
    isGlobal: true,
    load:[dbConfig]
});

const datasource = new DataSource(dbConfig());
datasource.initialize();

export default datasource;