import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { NoteListsService } from './note-lists.service';
import { CreateNoteListDto } from './dto/create-note-list.dto';
import { UpdateNoteListDto } from './dto/update-note-list.dto';
import { NoteList } from './entities/note-list.entity';

@Controller('note-lists')
export class NoteListsController {
  constructor(private readonly noteListsService: NoteListsService) {}

  @Post('/')
  @UsePipes(new ValidationPipe())
  async create(
    @Body() createNoteListDto: CreateNoteListDto,
  ): Promise<NoteList> {
    return await this.noteListsService.create(createNoteListDto);
  }

  @Get('/')
  async findAll(): Promise<NoteList[]> {
    return await this.noteListsService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<NoteList> {
    return await this.noteListsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNoteListDto: UpdateNoteListDto,
  ): Promise<NoteList> {
    return await this.noteListsService.update(+id, updateNoteListDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.noteListsService.remove(+id);
  }
}
