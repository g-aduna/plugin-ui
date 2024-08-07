import React from "react";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/mode-toggle";
import { RootLayoutProps } from "../types";
import { Button } from "../components/ui/button";

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
      <div className="fixed inset-0 h-full w-full z-0">
        <iframe src='https://my.spline.design/retrofuturismbganimation-70525e6537ee974c12ca59b71dc02db8/' width='100%' height='100%'></iframe>
      </div>
      <div className="p-4 flex flex-col flex-grow z-10">
        <ModeToggle />
        <div className="flex-grow items-center justify-center inline-flex">
          <p className="font-[Inter] font-medium text-xl dark:text-white w-fit">
            Hello, this is a dark mode themed component with Spline!
          </p>
        </div>
      </div>
    </RootLayout>
  );
};

export default App;