import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Note } from '../../notes/entities/note.entity';
import { IsNotEmpty, Length } from 'class-validator';

@Entity()
export class NoteList {
  @PrimaryGeneratedColumn({ comment: 'Note List unique identifier' })
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @IsNotEmpty({ message: 'Title is required' })
  @Length(1, 255, {
    message: 'Title must be between 1 and 255 characters long',
  })
  title: string;

  @OneToMany(() => Note, (note) => note.noteList, { cascade: true })
  @JoinColumn({ name: 'note_list_id' })
  notes: Note[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  modified_at: Date;
}
