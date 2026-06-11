import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { DemoProvider } from "@/contexts/DemoContext";
import { RoleProvider } from "@/contexts/RoleContext";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Buckskart — Financial Planning & Investments" },
      { name: "description", content: "Buckskart, a unit of SEK Finserve LLP, offers insurance, mutual funds, retirement planning and expert financial guidance for individuals and businesses." },
      { name: "author", content: "Buckskart" },
      { property: "og:title", content: "Buckskart — Financial Planning & Investments" },
      { property: "og:description", content: "Buckskart, a unit of SEK Finserve LLP, offers insurance, mutual funds, retirement planning and expert financial guidance for individuals and businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Buckskart" },
      { name: "twitter:title", content: "Buckskart — Financial Planning & Investments" },
      { name: "twitter:description", content: "Buckskart, a unit of SEK Finserve LLP, offers insurance, mutual funds, retirement planning and expert financial guidance for individuals and businesses." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <DemoProvider>
      <RoleProvider>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
        <Toaster position="bottom-right" richColors />
      </RoleProvider>
    </DemoProvider>
  );
}
