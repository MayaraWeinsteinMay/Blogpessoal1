import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "src/postagem/controller/postagem.controller";
import { UsuarioController } from "src/usuario/controller/usuario.controller";
import { Temacontroller } from "./controller/tema.controller";
import { Tema } from "./entities/tema.entity";
import { TemaService } from "./service/tema.service";

@Module({
    imports:[TypeOrmModule.forFeature([Tema])],
    providers:[TemaService],
    controllers:[ Temacontroller],
    exports:[TypeOrmModule],

})

export class TemaModule{
  static forRoot(arg0: { type: string; url: string; logging: boolean; dropSchema: boolean; ssl: { rejectUnauthorized: boolean; }; synchronize: boolean; autoLoadEntities: boolean; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
    throw new Error('Method not implemented.');
  }
}