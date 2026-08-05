import { expect, test } from "@playwright/test";

import { TodoPage } from "../pages/todo-page";

test("adds a task", async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.open();
  await todoPage.addTask("Review pull request");

  await expect(todoPage.items).toHaveText(["Review pull request"]);
});
