import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStyles from "~/styles/global.css";
export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
export const links = () => ([
  {
    rel: "stylesheet",
    href: globalStyles,
  },
  {
    rel: "stylesheet",
    href: "https://cdn.simplecss.org/simple.css",
  }
]);
export function ErrorBoundary({error}) {
  return (
    <>
    <head>
    </head>
    <Links />
      <div>
          <h1>Something went wrong &#x1F629;</h1>
      </div>
      </>
  )
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <title>My Blog</title>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <h1>My Blog &#x1F4D1;</h1>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
