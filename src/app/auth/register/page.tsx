import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { RegisterSection } from "./components/new-register";

export const metadata: Metadata = {
  title: "Sign up",
  description:
    "Sign up for an account to access exclusive features and content.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-4 md:top-4"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10  dark:border-r lg:flex">
          <div className="absolute inset-0 ">
            <Image src="/logo.png" alt="login image" objectFit="contain" fill />
          </div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <h1 className="text-2xl font-black">
              <Link href={"/"}>
                <span className="text-primary">Share</span> Surplus
              </Link>
            </h1>
          </div>
          {/* <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div> */}
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] lg:w-[450px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {"Let's create your account"}
              </h1>
              <p className="text-sm text-muted-foreground">
                Sign up for an account to access exclusive features and content.
              </p>
            </div>
            <RegisterSection />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
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
}
