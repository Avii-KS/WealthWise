import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard, Brain, Sparkles } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="glass border-b border-white/20 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src={"/logo.png"}
                alt="Wealthwise Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Brain className="w-4 h-4 text-blue-500" />
              <Sparkles className="w-3 h-3 text-purple-500 animate-pulse" />
            </div>
          </Link>

          {/* Navigation Links - Different for signed in/out users */}
          <div className="hidden md:flex items-center space-x-8">
            <SignedOut>
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Testimonials
              </a>
            </SignedOut>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 hover:bg-white/20 transition-all duration-200"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Button>
              </Link>
              <Link href="/transaction/create">
                <Button className="gradient shadow-glow hover:shadow-glow-lg transition-all duration-200 flex items-center gap-2">
                  <PenBox className="w-4 h-4" />
                  <span className="hidden sm:inline">Add Transaction</span>
                </Button>
              </Link>
              <div className="relative">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-10 h-10 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-200",
                    },
                  }}
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="hover:bg-white/20 transition-all duration-200"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button className="gradient shadow-glow hover:shadow-glow-lg transition-all duration-200">
                  Get Started
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
