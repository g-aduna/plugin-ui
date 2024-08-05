// src/App.tsx
import React from "react";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/mode-toggle";
import { RootLayoutProps } from "../types"; // Make sure to define RootLayoutProps in your types file

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

const App = () => {
  return (
    <RootLayout>
      <div className="p-4">
        <ModeToggle />
        <div className="font-[Inter] font-medium text-xl animate-bounce dark:bg-gray-800 dark:text-white">
          <p>Hello, this is a dark mode themed component!</p>
        </div>
      </div>
    </RootLayout>
  );
};

export default App;
