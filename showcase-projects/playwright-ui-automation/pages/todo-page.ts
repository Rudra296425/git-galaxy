import { Locator, Page } from "@playwright/test";

export class TodoPage {
  readonly newTodo: Locator;
  readonly addButton: Locator;
  readonly items: Locator;

  constructor(private readonly page: Page) {
    this.newTodo = page.getByLabel("New task");
    this.addButton = page.getByRole("button", { name: "Add task" });
    this.items = page.getByRole("listitem");
  }

  async open(): Promise<void> {
    await this.page.setContent(`
      <label>New task <input aria-label="New task" /></label>
      <button>Add task</button>
      <ul></ul>
      <script>
        document.querySelector('button').addEventListener('click', () => {
          const input = document.querySelector('input');
          if (input.value) document.querySelector('ul').insertAdjacentHTML(
            'beforeend', '<li>' + input.value + '</li>'
          );
        });
      </script>
    `);
  }

  async addTask(task: string): Promise<void> {
    await this.newTodo.fill(task);
    await this.addButton.click();
  }
}
