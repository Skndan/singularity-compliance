"use client";

import Link from "next/link";
import Login from "@/components/login";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useState } from "react";

const AuthenticationPage = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <>
      {/* {loading ? (
        <div className="grid h-screen place-items-center">
          <Loader className="animate-spin h-5 w-5 mr-3" />
        </div>
      ) : 
      <p></p>
      } */}
      <div className="relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative min-h-screen hidden flex-col bg-muted p-10 dark:border-r lg:flex">
          <div className="relative z-20 flex items-center ">
          <Image
                src="/mirror-dark.svg"
                className="hidden dark:block"
                width="200"
                height="64"
                alt="Logo"
              />
              <Image
                src="/mirror-light.svg"
                className="block dark:hidden"
                width="200"
                height="64"
                alt="Logo"
              />
          </div>
          <div className="relative z-20 mt-auto">
            <h1 className="text-4xl font-semibold tracking-tight">
              Give your business everything it need to grow.
            </h1>
            <p className="mt-4 text-lg">
              Manage your business at one place
            </p>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">Copyright &copy; skndan 2024</p>
            </blockquote>
          </div>
        </div>
        <div>
          <div className="container sm:mx-auto grid w-full grid-col-1 justify-center space-y-2 sm:w-[350px] ">
            <div className="flex justify-center align-middle p-8 lg:hidden">
            <Image
                src="/mirror-dark.svg"
                className="hidden dark:block"
                width="200"
                height="64"
                alt="Logo"
              />
              <Image
                src="/mirror-light.svg"
                className="block dark:hidden"
                width="200"
                height="64"
                alt="Logo"
              />
            </div>
            <Login />
            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div> */}
            {/* <Button variant="outline" type="button" disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.google className="mr-2 h-4 w-4" />
              )}{" "}
              Google
            </Button>
            <Button variant="outline" type="button" disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.twitter className="mr-2 h-4 w-4" />
              )}{" "}
              Twitter
            </Button>
            <Button variant="outline" type="button" disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.logo className="mr-2 h-4 w-4" />
              )}{" "}
              Continue with SSO
            </Button> */}
            <p className="px-8 text-center text-sm text-muted-foreground pb-6">
              By logging in, you agree to our <br />
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default AuthenticationPage;
