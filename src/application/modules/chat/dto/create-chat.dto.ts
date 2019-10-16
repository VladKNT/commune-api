export class CreateChatDto {
  readonly title: string;
  readonly photoUrl?: string;
  readonly creatorId: number;
  readonly membersId: number[];
}
