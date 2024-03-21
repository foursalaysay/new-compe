// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";
// import LoginForm from "./components/LoginForm";
// import { getServerSession } from "next-auth";
// import { authConfig } from "@/lib/auth.config";

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import LoginForm from "./components/LoginForm"

import LoginImage from './components/share.jpg'

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="register"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Register
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <Image
              src={LoginImage}
              alt='login-image'
              fill={true}
              layout="fill"
              className="absolute inset-0"
              />
          <div className="relative z-20 flex items-center text-lg font-medium">
            ShareSurplus
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              
              <p className="text-lg">
                &ldquo;This app help companies to share and distribute their 
                donations to deserving organizations who most need their help.
                &rdquo;
              </p>
              {/* <footer className="text-sm">Sofia Davis</footer> */}
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login Here
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <LoginForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Click here to see our {" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Mission
              </Link>{" "}
              and{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Vision
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}