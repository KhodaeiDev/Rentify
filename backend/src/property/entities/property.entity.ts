import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { PropertyEnum } from '../enums/property-enum';
import { UnitType } from '../enums/unitType-enum';
import { OrientationEnum } from '../enums/orientation-enum';
import { AdStatusEnum } from '../enums/propStatus-enum';

@Entity('properties')
@Index(['code'], { unique: true })
@Index(['city'])
@Index(['rent'])
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  // عددی یونیک قابل نمایش به کاربر (مثال: 5443)
  @Column({ type: 'int', unique: true })
  code: number;

  @Column()
  title: string; // عنوان آگهی

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'enum', enum: PropertyEnum, default: PropertyEnum.APARTMENT })
  type: PropertyEnum; // نوع ملک ( ویلایی اپارتمان تجاری و.. )

  @Column({ type: 'enum', enum: UnitType, nullable: true })
  unitType: UnitType; // نوع واحد (دوبلکس فول و ....)

  @Column({ type: 'enum', enum: OrientationEnum, nullable: true })
  orientation: OrientationEnum; // موقعیت جغرافیایی

  @Column()
  city: string; // مثال: Tehran

  @Column({ nullable: true })
  area: string; // مثال: الهیه

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'int', nullable: true })
  builtYear: number;

  @Column({ type: 'float', nullable: true })
  lat?: number;
  @Column({ type: 'float', nullable: true })
  lng?: number;

  @Column({ type: 'int', nullable: true })
  builtArea: number; // زیربنا (متر مربع)

  @Column({ type: 'int', nullable: true })
  landArea: number; // مساحت کل زمین

  @Column({ type: 'int', nullable: true })
  totalFloors: number; // مجموع طبقات

  @Column({ type: 'int', nullable: true })
  floorNumber: number; // این واحد روی کدام طبقه است

  @Column({ type: 'int', nullable: true })
  rooms: number; // تعداد خواب

  @Column({ type: 'bigint', nullable: true })
  rent: number; // اجاره ماهانه (تومان)

  @Column({ type: 'bigint', nullable: true })
  deposit: number; // رهن

  // فعلاً به جای آپلود عکس، متن/لیست رشته‌ای قرار میدیم
  @Column({ type: 'text', array: true, nullable: false })
  images: string[];

  // امکانات به صورت آرایه رشته‌ای (Postgres text[])
  @Column({ type: 'text', array: true, nullable: true })
  amenities?: string[];

  @ManyToOne(() => User, (u) => u.properties, { eager: true })
  creator: User;

  @Column({ type: 'enum', enum: AdStatusEnum, default: AdStatusEnum.PENDING })
  status: AdStatusEnum;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
