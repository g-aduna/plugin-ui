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
      <div className="p-4 flex flex-col flex-grow">
        <ModeToggle />
        <div className="flex-grow self-center justify-center">
          <p className=
          "font-[Inter] font-medium text-xl animate-bounce dark:bg-gray-800 dark:text-white w-fit">
            Hello, this is a dark mode themed component!</p>
        </div>
      </div>
    </RootLayout>
  );
};

export default App;
