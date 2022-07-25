import {  redirect, json } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { db } from "../../services/db.js";
export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");
  const description = form.get("description");
  await new Promise(resolve => {
    setTimeout(resolve, 5000);
  })
  const data = {
    title,
    body,
    description,
  };
  const post = await db.post.create({ data: { body, title, description } });
  return redirect(`/posts/${post.id}`);
};


export default function CreatePost() {
  const transition = useTransition()
  const actionData = useActionData()
  console.log(actionData);
  return (
    <div>
      <h2>Create Post</h2>
      <Form method='POST' disabled={transition.state === "submitting"}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body"></textarea>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>
        </div>
        <button type="submit">{transition.state === 'submitting' ? 'Sending request...' : 'Create Post'}</button>
      </Form>
    </div>
  );
}
