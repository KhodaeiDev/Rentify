import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UserRoleEnum } from '../enums/userRole-enum';
import { Property } from 'src/property/entities/property.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 11, nullable: false })
  phone: string;

  @Column({ nullable: false })
  first_name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ nullable: true })
  profile_picture?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  officeName?: string;

  @Column({ type: 'enum', enum: UserRoleEnum })
  role: UserRoleEnum;

  @Column({ nullable: true })
  job?: string;

  @Column()
  acceptedTerms: boolean;

  @OneToMany(() => Property, (p) => p.creator)
  properties: Property[];

  @ManyToMany(() => Property, (property) => property.savedBy)
  @JoinTable({
    name: 'user_save_property',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'property_id',
      referencedColumnName: 'id',
    },
  })
  saveProperties?: Property[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
