import React from "react";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu"

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
      <div className="p-4 flex flex-col flex-grow z-10 gap-2">
        <div className="inline-flex flex-row items-center justify-between">
          <h3 className="font-[Inter] dark:text-white scroll-m-20 text-2xl font-semibold tracking-tight">
            Title
          </h3>   
          <ModeToggle />
        </div>
        <div className="inline-flex flex-row items-center h-fit">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Export</NavigationMenuTrigger>
                <NavigationMenuContent className="p-2 w-20">
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex-grow items-center justify-center inline-flex">
          <p className="font-[Inter] font-medium text-xl dark:text-white w-fit">
            Hello, this is a dark mode themed component with Spline!
          </p>
        </div>
        <div className="flex justify-center items-stretch">
          <Button className="w-full">Export</Button>
        </div>
      </div>
    </RootLayout>
  );
};

export default App;