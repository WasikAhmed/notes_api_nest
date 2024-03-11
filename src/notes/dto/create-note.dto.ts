import { IsNotEmpty, Length } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty({ message: 'Title is required' })
  @Length(1, 255, {
    message: 'Title muse be between 1 and 100 characters long',
  })
  title: string;

  @IsNotEmpty({ message: 'Content is required' })
  content: string;
}
