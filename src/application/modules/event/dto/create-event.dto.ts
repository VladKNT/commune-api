export class CreateEventDto {
  readonly name: string;
  readonly description: string;
  readonly previewPhotoId: number;
  readonly creatorId: number;
  readonly statusId: number;
  readonly startDate: Date;
  readonly endDate: Date;
}
