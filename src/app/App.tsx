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
} from "../components/ui/navigation-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../components/ui/menubar"
import DynamicIframe from "../components/iframe";
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
        <DynamicIframe />
      </div>
      <div className="p-2 flex flex-col flex-grow z-10 gap-2">
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
        <div className="flex flex-auto">
          <Card className="flex flex-row justify-center items-center gap-6 flex-auto">
            <CardContent className="flex flex-auto flex-col gap-6 items-center">
              <p className="font-normal text-base dark:text-zinc-200 text-zinc-800 w-fit">
                Select an auto layout to begin export.
              </p>
              <div className="flex-col justify-start items-center gap-2 inline-flex">
                <p className=
                  "text-center text-zinc-700 dark:text-zinc-300 text-sm font-medium leading-tight">
                    Component type for selection.
                </p>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        New Window <MenubarShortcut>⌘N</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem disabled>New Incognito Window</MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>Share</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>Email link</MenubarItem>
                          <MenubarItem>Messages</MenubarItem>
                          <MenubarItem>Notes</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem>
                        Print... <MenubarShortcut>⌘P</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>Find</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>Search the web</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Find...</MenubarItem>
                          <MenubarItem>Find Next</MenubarItem>
                          <MenubarItem>Find Previous</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem>Cut</MenubarItem>
                      <MenubarItem>Copy</MenubarItem>
                      <MenubarItem>Paste</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                    <MenubarContent>
                      <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                      <MenubarCheckboxItem checked>
                        Always Show Full URLs
                      </MenubarCheckboxItem>
                      <MenubarSeparator />
                      <MenubarItem inset>
                        Reload <MenubarShortcut>⌘R</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem disabled inset>
                        Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem inset>Hide Sidebar</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Profiles</MenubarTrigger>
                    <MenubarContent>
                      <MenubarRadioGroup value="benoit">
                        <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                        <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                        <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                      </MenubarRadioGroup>
                      <MenubarSeparator />
                      <MenubarItem inset>Edit...</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem inset>Add Profile...</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center items-stretch">
          <Button className="w-full">Export</Button>
        </div>
      </div>
    </RootLayout>
  );
};

export default App;