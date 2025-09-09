'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  FileText,
  Handshake,
  LayoutDashboard,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';

import { CivitasAILogo } from './icons';

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  {
    href: '/voter-registration',
    label: 'Voter Registration',
    icon: UserPlus,
  },
  { href: '/candidates', label: 'Candidates', icon: Users },
  { href: '/ballot-measures', label: 'Ballot Measures', icon: FileText },
  { href: '/civic-engagement', label: 'Civic Engagement', icon: Handshake },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <CivitasAILogo className="h-8 w-8 text-primary" />
            <h1 className="font-headline text-xl font-semibold">CivitasAI</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map(item => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={{ children: item.label, side: 'right' }}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <Link href="/profile" legacyBehavior passHref>
            <SidebarMenuButton
              isActive={pathname === '/profile'}
              tooltip={{ children: 'Profile', side: 'right' }}
            >
              <User className="h-4 w-4" />
              <span>My Profile</span>
            </SidebarMenuButton>
          </Link>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:justify-end md:px-6">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://picsum.photos/100"
                alt="User avatar"
                data-ai-hint="user avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
