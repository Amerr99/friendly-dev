import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amer App | Welcome" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <section><h2 className="text-center text-3xl text-white"> My app</h2></section>;
}
