import { Locator, Page } from "@playwright/test";

export class TodoPage {
  readonly newTodo: Locator;
  readonly addButton: Locator;
  readonly items: Locator;
  readonly completedItems: Locator;

  constructor(private readonly page: Page) {
    this.newTodo = page.getByLabel("New task");
    this.addButton = page.getByRole("button", { name: "Add task" });
    this.items = page.getByRole("listitem");
    this.completedItems = page.locator("li.completed");
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
            'beforeend', '<li><button aria-label="Complete task">○</button>' + input.value + '</li>'
          );
          document.querySelectorAll('[aria-label="Complete task"]').forEach(button =>
            button.addEventListener('click', () => button.parentElement.classList.toggle('completed'))
          );
        });
      </script>
    `);
  }

  async addTask(task: string): Promise<void> {
    await this.newTodo.fill(task);
    await this.addButton.click();
  }

  async completeTask(task: string): Promise<void> {
    await this.page.getByRole("listitem", { name: new RegExp(task) })
      .getByRole("button", { name: "Complete task" }).click();
  }
}
