import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteListDto } from './create-note-list.dto';

export class UpdateNoteListDto extends PartialType(CreateNoteListDto) {}
