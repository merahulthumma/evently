import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Hello World</h1>
      <Button variant="destructive" className="px-10">
        Click me
      </Button>
    </main>
  );
}
