// import { PartialType } from '@nestjs/mapped-types';
// import { CreateNoteDto } from './create-note.dto';
//
// export class UpdateNoteDto extends PartialType(CreateNoteDto) {}

import { IsNotEmpty, Length } from 'class-validator';

export class UpdateNoteDto {
  @IsNotEmpty({ message: 'Title is required' })
  @Length(1, 100, {
    message: 'Title must be between 1 and 100 characters long',
  })
  title: string;

  @IsNotEmpty({ message: 'Content is required' })
  content: string;
}
