import { Module } from '@nestjs/common';
import { NoteListsService } from './note-lists.service';
import { NoteListsController } from './note-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteList } from './entities/note-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NoteList])],
  controllers: [NoteListsController],
  providers: [NoteListsService],
})
export class NoteListsModule {}
