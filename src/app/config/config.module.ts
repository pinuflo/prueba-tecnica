import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
    providers: [
        {
            provide: ConfigService,
            useValue: new ConfigService()
        }
    ],
    exports: [ConfigService]
    
})
export class ConfigModule {}
