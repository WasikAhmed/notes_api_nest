import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { NoteList } from '../note-lists/entities/note-list.entity';
import { Note } from '../notes/entities/note.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'password',
  database: 'my_notes_db',
  entities: [NoteList, Note],
  synchronize: true,
};
