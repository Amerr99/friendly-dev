import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amer App | Welcome" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>homepage </>;
}
