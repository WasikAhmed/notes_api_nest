import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Note } from '../../notes/entities/note.entity';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsNotEmpty,
  Length,
} from 'class-validator';

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
  @ArrayMinSize(1, { message: 'Note list must contain at least one note' })
  @ArrayMaxSize(10, { message: 'Note list can not contain more than 10 notes' })
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
