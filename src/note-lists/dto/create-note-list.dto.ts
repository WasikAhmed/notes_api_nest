import {
  ArrayMaxSize,
  ArrayMinSize,
  IsNotEmpty,
  Length,
} from 'class-validator';

export class CreateNoteListDto {
  @IsNotEmpty({ message: 'Title is required' })
  @Length(1, 255, {
    message: 'Title must be between 1 and 255 characters long',
  })
  title: string;

  @ArrayMinSize(1, { message: 'Note list must contain at least one note' })
  @ArrayMaxSize(10, { message: 'Note list can not contain more than 10 notes' })
  notes: CreateNoteListDto[];

  created_at?: Date;
  modified_at?: Date;
}
