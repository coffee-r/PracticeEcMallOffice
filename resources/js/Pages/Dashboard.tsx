import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@/Components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/Components/ui/collapsible';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/Components/ui/dropdown-menu";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/Components/ui/table";
import { Badge } from "@/Components/ui/badge";
import { SVGProps } from 'react';
import { BellIcon } from 'lucide-react';

export default function Dashboard({ auth }: PageProps<{}>) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <Link href="#" className="flex items-center gap-2 font-semibold">
                        <Package2Icon className="h-6 w-6" />
                        <span className="">Acme Mall</span>
                        </Link>
                        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <BellIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-4 text-sm font-medium">
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        >
                            <HomeIcon className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Collapsible className="grid gap-2">
                            <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 [&[data-state=open]>svg]:rotate-90">
                            <PackageIcon className="h-4 w-4" />
                            Seller Applications
                            <ChevronRightIcon className="ml-auto h-4 w-4 transition-transform" />
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                            <nav className="grid gap-1 px-6">
                                <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            
                                >
                                <FileIcon className="h-4 w-4" />
                                Pending
                                </Link>
                                <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            
                                >
                                <CircleCheckIcon className="h-4 w-4" />
                                Approved
                                </Link>
                                <Link
                                href="#"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            
                                >
                                <CircleXIcon className="h-4 w-4" />
                                Rejected
                                </Link>
                            </nav>
                            </CollapsibleContent>
                        </Collapsible>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        
                        >
                            <UsersIcon className="h-4 w-4" />
                            Sellers
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        
                        >
                            <LineChartIcon className="h-4 w-4" />
                            Analytics
                        </Link>
                        </nav>
                    </div>
                    
                    </div>
                </div>
                <div className="flex flex-col">
                    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                    <Link href="#" className="lg:hidden">
                        <Package2Icon className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <div className="w-full flex-1">
                        <form>
                        <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <Input
                            type="search"
                            placeholder="Search seller applications..."
                            className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                            />
                        </div>
                        </form>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                        >
                            <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                            <span className="sr-only">Toggle user menu</span>
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
                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center">
                        <h1 className="font-semibold text-lg md:text-2xl">Seller Applications</h1>
                        <Button className="ml-auto" size="sm">
                        Add Application
                        </Button>
                    </div>
                    <div className="border shadow-sm rounded-lg">
                        <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Seller</TableHead>
                            <TableHead>Product</TableHead>
                            <TableHead className="hidden md:table-cell">Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                            <TableCell className="font-medium">John Doe</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                <img
                                    src="/placeholder.svg"
                                    width="48"
                                    height="48"
                                    alt="Product image"
                                    className="aspect-square rounded-md object-cover"
                                />
                                <div>
                                    <div className="font-medium">Acme Widgets</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Home Decor</div>
                                </div>
                                </div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                <Badge variant="outline" className="rounded-full px-2 py-1">
                                Pending
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                    <MoveHorizontalIcon className="w-4 h-4" />
                                    <span className="sr-only">Actions</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Approve</DropdownMenuItem>
                                    <DropdownMenuItem>Reject</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell className="font-medium">Jane Smith</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                <img
                                    src="/placeholder.svg"
                                    width="48"
                                    height="48"
                                    alt="Product image"
                                    className="aspect-square rounded-md object-cover"
                                />
                                <div>
                                    <div className="font-medium">Eco Planters</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Gardening</div>
                                </div>
                                </div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                <Badge
                                variant="solid"
                                className="rounded-full bg-green-500/10 px-2 py-1 text-green-500 dark:bg-green-500/20"
                                >
                                Approved
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                    <MoveHorizontalIcon className="w-4 h-4" />
                                    <span className="sr-only">Actions</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell className="font-medium">Michael Johnson</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                <img
                                    src="/placeholder.svg"
                                    width="48"
                                    height="48"
                                    alt="Product image"
                                    className="aspect-square rounded-md object-cover"
                                />
                                <div>
                                    <div className="font-medium">Zest Juicers</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Kitchen Appliances</div>
                                </div>
                                </div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                <Badge
                                variant="solid"
                                className="rounded-full bg-red-500/10 px-2 py-1 text-red-500 dark:bg-red-500/20"
                                >
                                Rejected
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                    <MoveHorizontalIcon className="w-4 h-4" />
                                    <span className="sr-only">Actions</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell className="font-medium">Sarah Lee</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                <img
                                    src="/placeholder.svg"
                                    width="48"
                                    height="48"
                                    alt="Product image"
                                    className="aspect-square rounded-md object-cover"
                                />
                                <div>
                                    <div className="font-medium">Flexi Wearables</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Fitness</div>
                                </div>
                                </div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                <Badge variant="outline" className="rounded-full px-2 py-1">
                                Pending
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                    <MoveHorizontalIcon className="w-4 h-4" />
                                    <span className="sr-only">Actions</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Approve</DropdownMenuItem>
                                    <DropdownMenuItem>Reject</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                            </TableRow>
                        </TableBody>
                        </Table>
                    </div>
                    </main>
                </div>
            </div>
        </>
    );
}

const ChevronRightIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }
  
  
  const CircleCheckIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
  
  
  const CircleXIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    )
  }
  
  
  const FileIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      </svg>
    )
  }
  
  
  const HomeIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
  const LineChartIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    )
  }
  
  
  const MoveHorizontalIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 8 22 12 18 16" />
        <polyline points="6 8 2 12 6 16" />
        <line x1="2" x2="22" y1="12" y2="12" />
      </svg>
    )
  }
  
  
  const Package2Icon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    )
  }
  
  
  const PackageIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    )
  }
  
  
  const SearchIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  const UsersIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
