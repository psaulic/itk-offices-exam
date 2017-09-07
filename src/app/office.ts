export class Office {
  id: number;
  title: string;
  description: string;
  photoURL: string;
  constructor(title: string, description: string, photoURL: string) {
    this.title = title;
    this.description = description;
    this.photoURL = photoURL;
  }
}
