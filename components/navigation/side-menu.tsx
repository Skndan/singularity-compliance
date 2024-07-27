"use client";

import { usePathname } from "next/navigation";

import { Disclosure } from '@headlessui/react'
import { BarChartIcon, CalendarIcon, CardStackIcon, ChevronDownIcon, DashboardIcon, HomeIcon, PaperPlaneIcon, RocketIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/auth-provider";

const SidebarNav = () => {
  const pathname = usePathname();

  const { roles } = useAuth();

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
      href: `/my-space`,
      label: "My Space",
      icon: RocketIcon,
      active: pathname.match(`/my-space`),
      role: ["hr", "admin", "user"],
      children: []
    }
  ];

  return (
    <>

      <div className="space-y-4 py-4 flex flex-col h-full">
        <div className="px-3 py-2 flex-1">
          <Link href="/dashboard" className="flex items-center pl-3 mb-14">
            <Image src="/compliance-dark.svg" className="hidden dark:block" width={180} height={56} alt="Logo" />
            <Image src="/compliance-light.svg" className="block dark:hidden" width={180} height={56} alt="Logo" />
          </Link>
          {/* <div className="space-y-1">
            {routes.map((item, index) => {
              return (
                item.href && (
                  <Link key={index} href={item.href}>
                    <span
                      className={cn(
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg hover:text-accent-foreground",

                      )}
                    >
                      <p className="pl-4">{item.label}</p>
                    </span>
                  </Link>
                )
              );
            })}
          </div> */}

          {routes.map((item, index) => {
            return (
              <>
                <a
                  href={item.href}
                  className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 flex flex-row items-center"
                >
                  <item.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                  {item.label}
                </a>
              </>
            );
          })}

        </div>
      </div>
    </>
  );
};

export default SidebarNav;

// (
//   <nav className="grid items-start gap-2">
//     {items.map((item, index) => {
//       const Icon = Icons[item.icon || 'arrowRight'];
//       return (
//         item.href && (
//           <Link key={index} href={item.disabled ? '/' : item.href}>
//             <span
//               className={cn(
//                 'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
//                 path === item.href ? 'bg-accent' : 'transparent',
//                 item.disabled && 'cursor-not-allowed opacity-80'
//               )}
//             >
//               <Icon />
//               <p className='pl-4'>{item.title}</p>
//             </span>
//           </Link>
//         )
//       );
//     })}
//   </nav>
// )
