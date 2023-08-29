import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { UserModule } from './user/user.module';
import { JwtService } from './customService/jwt.service';
import { AuthInterceptors } from './auth/auth.interceptors';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Global()
@Module({
  imports: [DataModule, UserModule],
  controllers: [AppController],
  providers: [AppService, JwtService, {
    provide:APP_INTERCEPTOR,
    useClass:AuthInterceptors
  }],
  exports:[JwtService],
})
export class AppModule {}
