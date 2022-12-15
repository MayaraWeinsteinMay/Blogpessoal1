/*export class Usuario {
    id: number
    public usuario : string
    public senha : string
}*/

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({name: "tb_usuarios"})
export class Usuarios {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number


    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    nome: string

    @IsEmail()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    usuario: string //e-mail

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false})
    @ApiProperty()
    senha: string

    @Column({length: 5000})
    @ApiProperty()
    foto: string

    @ApiProperty()
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]


}

