export class Todo {
  constructor(title, description, due, priority) {
    (this.title = title),
      (this.description = description),
      (this.due = due),
      (this.priority = priority);
  }
}
