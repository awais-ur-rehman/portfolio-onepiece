import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-4 px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">
        {siteConfig.name}
      </h1>
      <p className="max-w-xl text-lg text-neutral-600">
        Portfolio coming soon.
      </p>
    </main>
  );
}
