export class CreatePizzaDto {
  name: string;
  style: string;
  photo: Express.Multer.File;
}
