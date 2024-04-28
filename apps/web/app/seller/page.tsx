import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Slider } from "@ui/components/slider";

import { Badge } from "@ui/components/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@ui/components/breadcrumb";
import { Button } from "@ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/components/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui/components/dropdown-menu";
import { Input } from "@ui/components/input";
import { Progress } from "@ui/components/progress";
import { Sheet, SheetContent, SheetTrigger } from "@ui/components/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ui/components/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/components/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui/components/tooltip";

export default function Dashboard() {
  return (
    <div className="bg-muted/40 flex min-h-screen w-full flex-col">
      <TooltipProvider>
        <aside className="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
            <Link
              href="#"
              className="bg-primary text-primary-foreground group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:h-8 md:w-8 md:text-base"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="bg-accent text-accent-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Orders</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Orders</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Products</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Customers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Customers</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
                  >
                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="text-foreground flex items-center gap-4 px-2.5"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Orders
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                  >
                    <Package className="h-5 w-5" />
                    Products
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                  >
                    <Users2 className="h-5 w-5" />
                    Customers
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                  >
                    <LineChart className="h-5 w-5" />
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="#">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="#">Products</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[320px]"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <Image
                    src="/avatar.png"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                  <CardHeader className="pb-3">
                    <CardTitle>Your Products</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      Manage all of your products and view their contributions
                      to your local neighborhood.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button>Enable Crowdfunding</Button>
                  </CardFooter>
                </Card>
                <Card x-chunk="dashboard-05-chunk-1">
                  <CardHeader className="pb-2">
                    <CardDescription>This Project</CardDescription>
                    <CardTitle className="text-4xl">$1,329</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-muted-foreground text-xs">
                      +25% from last week
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Progress value={25} aria-label="25% increase" />
                  </CardFooter>
                </Card>
                <Card x-chunk="dashboard-05-chunk-2">
                  <CardHeader className="pb-2">
                    <CardDescription>All Time</CardDescription>
                    <CardTitle className="text-4xl">$5,329</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-muted-foreground text-xs">
                      +10% from last month
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Progress value={12} aria-label="12% increase" />
                  </CardFooter>
                </Card>
              </div>
              <Tabs defaultValue="week">
                <div className="flex items-center">
                  <TabsList>
                    <TabsTrigger value="week">Recent</TabsTrigger>
                    <TabsTrigger value="month">Bestseller</TabsTrigger>
                    <TabsTrigger value="year">Archived</TabsTrigger>
                  </TabsList>
                  <div className="ml-auto flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 gap-1 text-sm"
                        >
                          <ListFilter className="h-3.5 w-3.5" />
                          <span className="sr-only sm:not-sr-only">Filter</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem checked>
                          Fulfilled
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                          Declined
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                          Refunded
                        </DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <TabsContent value="week">
                  <Card>
                    <CardHeader>
                      <CardTitle>Products</CardTitle>
                      <CardDescription>
                        Manage your products and view their sales performance.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                              <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="hidden md:table-cell">
                              Total Sales
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                              Crowdfunding Percentage
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="hidden sm:table-cell">
                              <Image
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=3696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width="64"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              Laser Lemonade Machine
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">Draft</Badge>
                            </TableCell>
                            <TableCell>$499.99</TableCell>
                            <TableCell className="hidden md:table-cell">
                              25
                            </TableCell>
                            <TableCell className="hidden gap-2 md:table-cell">
                              <div className="flex flex-row items-center gap-2">
                                <Slider
                                  defaultValue={[64]}
                                  max={100}
                                  step={1}
                                />

                                <Input
                                  type="number"
                                  defaultValue={64}
                                  className="w-20"
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="hidden sm:table-cell">
                              <Image
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=3696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width="64"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              Hypernova Headphones
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">Active</Badge>
                            </TableCell>
                            <TableCell>$129.99</TableCell>
                            <TableCell className="hidden md:table-cell">
                              100
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              <div className="flex flex-row items-center gap-2">
                                <Slider defaultValue={[0]} max={100} step={1} />

                                <Input
                                  type="number"
                                  defaultValue={0}
                                  className="w-20"
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="hidden sm:table-cell">
                              <Image
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=3696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width="64"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              AeroGlow Desk Lamp
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">Active</Badge>
                            </TableCell>
                            <TableCell>$39.99</TableCell>
                            <TableCell className="hidden md:table-cell">
                              50
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              <div className="flex flex-row items-center gap-2">
                                <Slider
                                  defaultValue={[33]}
                                  max={100}
                                  step={1}
                                />

                                <Input
                                  type="number"
                                  defaultValue={33}
                                  className="w-20"
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="hidden sm:table-cell">
                              <Image
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=3696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width="64"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              TechTonic Energy Drink
                            </TableCell>
                            <TableCell>
                              <Badge variant="secondary">Draft</Badge>
                            </TableCell>
                            <TableCell>$2.99</TableCell>
                            <TableCell className="hidden md:table-cell">
                              0
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              <div className="flex flex-row items-center gap-2">
                                <Slider defaultValue={[5]} max={100} step={1} />

                                <Input
                                  type="number"
                                  defaultValue={5}
                                  className="w-20"
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="hidden sm:table-cell">
                              <Image
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=3696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width="64"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              Gamer Gear Pro Controller
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">Active</Badge>
                            </TableCell>
                            <TableCell>$59.99</TableCell>
                            <TableCell className="hidden md:table-cell">
                              75
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              <div className="flex flex-row items-center gap-2">
                                <Slider defaultValue={[0]} max={100} step={1} />

                                <Input
                                  type="number"
                                  defaultValue={0}
                                  className="w-20"
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="hidden sm:table-cell">
                              <Image
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=3696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                width="64"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              Luminous VR Headset
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">Active</Badge>
                            </TableCell>
                            <TableCell>$199.99</TableCell>
                            <TableCell className="hidden md:table-cell">
                              30
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              <div className="flex flex-row items-center gap-2">
                                <Slider
                                  defaultValue={[33]}
                                  max={100}
                                  step={1}
                                />

                                <Input
                                  type="number"
                                  defaultValue={33}
                                  className="w-20"
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter>
                      <div className="text-muted-foreground text-xs">
                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                        products
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <div>
              <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
                <div className="col-span-2 h-full rounded-lg">
                  <Image
                    priority
                    src="https://images.unsplash.com/photo-1611153532158-7fbd608cbb2a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={600}
                    height={400}
                    alt="ALS"
                    className="h-96 w-full rounded-lg object-cover"
                  />

                  <div className="flex flex-col gap-2 p-4">
                    <h2 className="text-xl font-medium">
                      Baut einen neuen Spielplatz ihr Nudeln
                    </h2>

                    <div className="flex flex-row items-baseline gap-2">
                      <div className="font-semibold">21.445€</div>
                      <div className="text-xs text-neutral-600">
                        of 50.000€ goal reached
                      </div>
                    </div>
                    <div className="relative h-2 rounded-full bg-sky-200">
                      <div className="h-2 w-4/5 rounded-full bg-sky-500" />
                    </div>
                  </div>
                  <p className="p-4">
                    Join us for a heartwarming community initiative as we embark
                    on a fundraising journey to build a brand new playground in
                    the vibrant Karlsruher Oststadt! With laughter, joy, and
                    boundless imagination in mind, were rallying together to
                    create a safe and engaging space for children to explore,
                    play, and grow. Our fundraiser promises to be an event
                    filled with fun and purpose, as we gather friends, families,
                    and neighbors alike to support this important cause.
                  </p>

                  <p className="p-4">
                    Picture a bustling scene of bake sales, raffles, and live
                    entertainment, all set against the backdrop of our shared
                    vision for a brighter, more playful future. Every donation,
                    no matter how big or small, brings us one step closer to
                    realizing this dream. Together, lets transform our community
                    by providing a haven where children can unleash their
                    creativity, make new friends, and forge lasting memories.
                    Mark your calendars and join us in making a difference in
                    the Karlsruher Oststadt. Together, we can build more than
                    just a playground – we can build a legacy of togetherness,
                    joy, and endless possibilities.
                  </p>
                </div>{" "}
              </Card>
            </div>
          </main>
        </div>
      </TooltipProvider>
    </div>
  );
}
