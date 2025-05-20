export class Project {
  constructor(title, description, notes, color) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.notes = notes;
    this.color = color;
    this.todos = [];
  }
}
