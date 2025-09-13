export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background text-foreground">
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
