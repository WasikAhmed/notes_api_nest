import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { NoteListsModule } from './note-lists/note-lists.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './note-lists/config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), NotesModule, NoteListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
