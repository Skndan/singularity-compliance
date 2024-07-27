"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { BarChartIcon, CalendarIcon, DashboardIcon, HomeIcon, PaperPlaneIcon, ReaderIcon, RocketIcon } from "@radix-ui/react-icons";

import React from "react";
import { useAuth } from "@/context/auth-provider";

export function MainNav({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const { user, roles } = useAuth();

  const routes = [
    {
      href: `/dashboard`,
      label: "Dashboard",
      icon: DashboardIcon,
      active: pathname.match(`/dashboard`),
      role: ["hr", "admin", "user"],
      children: []
    },
    {
      href: `/query`,
      label: "Query",
      icon: RocketIcon,
      active: pathname.match(`/query`),
      role: ["hr", "admin", "user"],
      children: []
    }
  ];
  return (
    <NavigationMenu className="pl-8 hidden md:flex">
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.href}>
          <Link href={route.href} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                route.active
                  ? "text-black dark:text-white"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
              {/* <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">New</span> */}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> 
        ))}

      </NavigationMenuList>
    </NavigationMenu>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}
            {/* <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">New</span> */}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>

        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
