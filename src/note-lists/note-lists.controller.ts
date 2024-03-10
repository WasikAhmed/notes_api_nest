import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoteListsService } from './note-lists.service';
import { CreateNoteListDto } from './dto/create-note-list.dto';
import { UpdateNoteListDto } from './dto/update-note-list.dto';

@Controller('note-lists')
export class NoteListsController {
  constructor(private readonly noteListsService: NoteListsService) {}

  @Post()
  create(@Body() createNoteListDto: CreateNoteListDto) {
    return this.noteListsService.create(createNoteListDto);
  }

  @Get()
  findAll() {
    return this.noteListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteListsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteListDto: UpdateNoteListDto) {
    return this.noteListsService.update(+id, updateNoteListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteListsService.remove(+id);
  }
}
