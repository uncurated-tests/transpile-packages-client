import { ClientComponent } from "my-package";

export default function Home() {
  return (
    <main>
      <h1>Using a client component from a package with transpilePackages</h1>
      <ClientComponent />
    </main>
  );
}
