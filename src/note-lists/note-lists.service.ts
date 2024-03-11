import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteListDto } from './dto/create-note-list.dto';
import { UpdateNoteListDto } from './dto/update-note-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteList } from './entities/note-list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteListsService {
  constructor(
    @InjectRepository(NoteList)
    private noteListRepository: Repository<NoteList>,
  ) {}
  async create(createNoteListDto: CreateNoteListDto): Promise<NoteList> {
    const noteList: NoteList =
      this.noteListRepository.create(createNoteListDto);

    return await this.noteListRepository.save(noteList);
  }

  async findAll(): Promise<NoteList[]> {
    return await this.noteListRepository.find();
  }

  async findOne(id: number): Promise<NoteList> {
    const noteList: NoteList = await this.noteListRepository.findOneBy({ id });
    if (!noteList) {
      throw new NotFoundException(`Note List with id ${id} not found`);
    }
    return noteList;
  }

  async update(
    id: number,
    updateNoteListDto: UpdateNoteListDto,
  ): Promise<NoteList> {
    const noteList: NoteList = await this.noteListRepository.findOneBy({ id });
    if (!noteList) {
      throw new NotFoundException(`Note List with id ${id} not found`);
    }
    this.noteListRepository.merge(noteList, updateNoteListDto);
    return await this.noteListRepository.save(noteList);
  }

  async remove(id: number): Promise<void> {
    const result = await this.noteListRepository.delete(+id);
    if (result.affected === 0) {
      throw new NotFoundException(`Note List with id ${id} not found`);
    }
  }
}
