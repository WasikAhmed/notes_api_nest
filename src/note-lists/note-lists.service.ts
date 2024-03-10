import { Injectable } from '@nestjs/common';
import { CreateNoteListDto } from './dto/create-note-list.dto';
import { UpdateNoteListDto } from './dto/update-note-list.dto';

@Injectable()
export class NoteListsService {
  create(createNoteListDto: CreateNoteListDto) {
    return 'This action adds a new noteList';
  }

  findAll() {
    return `This action returns all noteLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noteList`;
  }

  update(id: number, updateNoteListDto: UpdateNoteListDto) {
    return `This action updates a #${id} noteList`;
  }

  remove(id: number) {
    return `This action removes a #${id} noteList`;
  }
}
