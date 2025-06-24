"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sparkles,
  Brain,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aiFeatures = [
    { icon: Brain, text: "AI-Powered Insights", delay: "0.1s" },
    { icon: TrendingUp, text: "Smart Predictions", delay: "0.2s" },
    { icon: Shield, text: "Fraud Detection", delay: "0.3s" },
    { icon: Zap, text: "Real-time Analysis", delay: "0.4s" },
  ];

  return (
    <section className="relative pt-40 pb-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* AI Features Badge */}
        <div className="flex justify-center mb-8">
          <div className="glass rounded-full px-6 py-3 flex items-center gap-2 shadow-glow animate-fade-in">
            <Sparkles className="w-5 h-5 text-blue-500 animate-pulse-slow" />
            <span className="text-sm font-medium text-gray-700">
              Powered by Advanced AI
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-responsive-xl pb-6 gradient-title animate-slide-up">
          Manage Your Finances <br />
          <span className="relative">
            with Intelligence
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce-slow"></div>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-responsive text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights and
          predictive analytics.
        </p>

        {/* AI Features Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 card-hover animate-scale-in"
              style={{ animationDelay: feature.delay }}
            >
              <feature.icon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-xs font-medium text-gray-700">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className="flex justify-center mb-16 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold gradient shadow-glow-lg hover:shadow-glow transition-all duration-300 group"
            >
              Get Started with AI
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div
          className="hero-image-wrapper mt-5 md:mt-0 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          <div ref={imageRef} className="hero-image">
            <div className="relative">
              <Image
                src="/banner.jpeg"
                width={1280}
                height={720}
                alt="Wealthwise AI Dashboard Preview"
                className="rounded-2xl shadow-2xl border border-white/20"
                priority
              />
              {/* Floating AI indicators */}
              <div className="absolute top-4 left-4 glass rounded-lg px-3 py-2 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">
                    AI Active
                  </span>
                </div>
              </div>
              <div
                className="absolute top-4 right-4 glass rounded-lg px-3 py-2 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">
                    Real-time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
            <div className="text-sm text-gray-600">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600 mb-1">AI</div>
            <div className="text-sm text-gray-600">Powered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
