import { IsNotEmpty } from 'class-validator';

export class CreatePizzaDto {
  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  style: string;

  @IsNotEmpty()
  recipe: string;

  photo: File | null;
}
