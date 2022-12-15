import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuarios } from "../../usuario/entities/usuario.entity";

@Entity({ name: "tb_postagens" })
export class Postagem {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number
    
    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100, nullable: false })
    titulo: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    texto: string

    @ApiProperty()
    @UpdateDateColumn()
    data: Date

    @ApiProperty()
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

    @ApiProperty({ type:() => Usuarios}) 
    @ManyToOne(() => Usuarios, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuarios

}





/*import { IsNotEmpty, MaxLength } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity ({name:"tb_postagens"})
export class Postagem{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length: 100, nullable:false})
    titulo: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string

    @IsNotEmpty()
    @UpdateDateColumn()
    data: Date

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })

        tema: Tema
}*/