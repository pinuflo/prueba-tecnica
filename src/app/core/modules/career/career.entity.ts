import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, JoinColumn, Index, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { Student } from "../student/student.entity";


@Entity('core_career')
export class Career extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'varchar', length: 45 })
    name: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @OneToMany(type => Student, s => s.career, { cascade: true, eager: false })
    students: Student[];

}