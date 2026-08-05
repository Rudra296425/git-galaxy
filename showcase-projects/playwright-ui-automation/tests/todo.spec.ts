import { expect, test } from "@playwright/test";

import { TodoPage } from "../pages/todo-page";

test("adds a task", async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.open();
  await todoPage.addTask("Review pull request");

  await expect(todoPage.items).toHaveText(["Review pull request"]);
});

test("marks a task complete", async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.open();
  await todoPage.addTask("Run regression suite");
  await todoPage.completeTask("Run regression suite");

  await expect(todoPage.completedItems).toHaveText(["○Run regression suite"]);
});
