import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IsNotEmpty, Length } from 'class-validator';
import { NoteList } from '../../note-lists/entities/note-list.entity';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'Title is required' })
  @Length(1, 100, {
    message: 'Title must be between 1 and 100 characters long',
  })
  title: string;

  @Column({ type: 'text' })
  @IsNotEmpty({ message: 'Content is required' })
  content: string;

  @ManyToOne(() => NoteList, (noteList) => noteList.notes)
  @JoinColumn({ name: 'note_list_id' })
  noteList: NoteList;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  modified_at: Date;
}
