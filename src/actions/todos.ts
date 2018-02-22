import { auth, db } from "ssb-appstack-client";
import { Todo } from "../types";
import exception from "../exception";

/*
  Create a new list.
*/
export async function createList(name: string) {
  const store = await db.open("taskbutt");
  const list = { name, createAt: Date.now() };
  return await store.insert("lists", list);
}

/*
  Give a user permissions to a list
*/
export async function shareListWithUser(name: string, user: string) {
  const store = await db.open("taskbutt");
  const lists = await store.query("SELECT * FROM lists WHERE name=$name", {
    name
  });
  return lists.length
    ? (async () => {
      
    })()
    : exception(`A list by the name ${name} was not found.`)
  const list = lists[0];
  store.setPermissions("lists");
}

export async function addTodo(todo: Todo) {
  const store = await db.open("taskbutt", auth.getToken());
  const permissions = {
    owner: [auth.getCurrentUser()]
  };
  return await store.insert("todos", todo, permissions);
}

export async function getAllTodos() {}
