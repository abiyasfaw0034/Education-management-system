import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <NavBar />
      <div>
        <h1>Hello world</h1>
        <Button>Hello me</Button>
      </div>
    </>
  );
}
