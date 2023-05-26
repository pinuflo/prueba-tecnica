import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, JoinColumn, Index, UpdateDateColumn, ManyToOne } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { Career } from "../career/career.entity";


@Entity('core_student')
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'varchar', length: 45 })
    name: string;

    
    @ApiProperty()
    @Column({ type: 'varchar', length: 45, unique: true })
    rut: string;    

    @ApiProperty()
    @Column({ type: 'varchar', length: 45 })
    email: string;        

    @ApiProperty({ type: () => Student })
    @ManyToOne(type => Career, c => c.students)
    @Index()
    @JoinColumn({ name: 'career_id' })
    career: Career;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}