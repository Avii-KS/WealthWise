"use client";

import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Send,
  Brain,
  Sparkles,
  Bot,
  User,
  Loader2,
  Mic,
  MicOff,
  Lightbulb,
  TrendingUp,
  Shield,
} from "lucide-react";

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm your AI financial assistant. I can help you with budgeting, investment advice, spending analysis, and financial planning. What would you like to know?",
      timestamp: new Date(),
      suggestions: [
        "How can I save more money?",
        "Analyze my spending patterns",
        "Investment recommendations",
        "Budget optimization tips",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (userInput) => {
    const responses = {
      save: {
        content:
          "Based on your spending patterns, here are some ways to save more money:\n\n1. **Subscription Audit**: Review and cancel unused subscriptions\n2. **Meal Planning**: Save 20-30% on groceries with planned meals\n3. **Energy Efficiency**: Switch to LED bulbs and smart thermostats\n4. **Transportation**: Consider carpooling or public transport\n5. **Entertainment**: Look for free community events\n\nWould you like me to analyze your specific spending categories?",
        suggestions: [
          "Analyze my subscriptions",
          "Create a meal plan",
          "Energy saving tips",
        ],
      },
      analyze: {
        content:
          "I've analyzed your recent transactions and found some interesting patterns:\n\n📊 **Top Spending Categories:**\n• Food & Dining: $450 (25% of total)\n• Transportation: $320 (18% of total)\n• Entertainment: $280 (16% of total)\n\n💡 **Insights:**\n• Your dining expenses are 15% higher than last month\n• You're spending 40% less on transportation (great job!)\n• Entertainment costs are within budget\n\nWould you like detailed recommendations for any category?",
        suggestions: [
          "Dining optimization",
          "Transportation analysis",
          "Entertainment budget",
        ],
      },
      investment: {
        content:
          "Here are some investment recommendations based on your financial profile:\n\n💰 **Conservative Portfolio (Low Risk):**\n• High-yield savings account: 4.5% APY\n• Treasury bonds: 3-5% return\n• Index funds: 7-10% average return\n\n🚀 **Growth Portfolio (Moderate Risk):**\n• S&P 500 ETF: 10-12% average return\n• Technology sector funds\n• Real estate investment trusts (REITs)\n\n⚡ **Aggressive Portfolio (High Risk):**\n• Individual stocks\n• Cryptocurrency (small allocation)\n• Venture capital funds\n\nWhat's your risk tolerance level?",
        suggestions: [
          "Conservative options",
          "Growth strategies",
          "Risk assessment",
        ],
      },
      budget: {
        content:
          "Let me help you optimize your budget! Here's a smart 50/30/20 budget breakdown:\n\n📈 **50% - Essential Expenses:**\n• Housing: $1,200\n• Utilities: $200\n• Food: $400\n• Transportation: $300\n\n🎯 **30% - Discretionary Spending:**\n• Entertainment: $300\n• Shopping: $200\n• Dining out: $250\n• Hobbies: $150\n\n💰 **20% - Savings & Debt:**\n• Emergency fund: $400\n• Investment: $300\n• Debt repayment: $200\n\nWould you like me to create a personalized budget plan?",
        suggestions: ["Create budget plan", "Track expenses", "Savings goals"],
      },
    };

    const input = userInput.toLowerCase();
    let response = responses.default || {
      content:
        "I understand you're asking about financial matters. Could you please be more specific? I can help with:\n\n• Budgeting and saving strategies\n• Investment advice and portfolio analysis\n• Spending pattern analysis\n• Financial goal planning\n• Debt management\n\nWhat specific area would you like to focus on?",
      suggestions: ["Budgeting help", "Investment advice", "Spending analysis"],
    };

    if (input.includes("save") || input.includes("saving")) {
      response = responses.save;
    } else if (input.includes("analyze") || input.includes("spending")) {
      response = responses.analyze;
    } else if (input.includes("investment") || input.includes("invest")) {
      response = responses.investment;
    } else if (input.includes("budget") || input.includes("budgeting")) {
      response = responses.budget;
    }

    return {
      id: Date.now() + 1,
      type: "ai",
      content: response.content,
      timestamp: new Date(),
      suggestions: response.suggestions,
    };
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Here you would integrate with speech recognition API
  };

  return (
    <Card className="card-hover shadow-glow h-[600px] flex flex-col">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2">
          <div className="relative">
            <Bot className="w-5 h-5 text-blue-500" />
            <Sparkles className="w-3 h-3 text-purple-500 absolute -top-1 -right-1 animate-pulse" />
          </div>
          AI Financial Assistant
          <Badge variant="secondary" className="ml-auto">
            <Brain className="w-3 h-3 mr-1" />
            AI Powered
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <div className="flex items-start gap-2">
                  {message.type === "ai" && (
                    <Bot className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="whitespace-pre-line text-sm">
                      {message.content}
                    </div>
                    {message.suggestions && (
                      <div className="mt-3 space-y-2">
                        {message.suggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            className={`text-xs ${
                              message.type === "user"
                                ? "text-blue-100 hover:text-white"
                                : "text-blue-600 hover:text-blue-700"
                            }`}
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-blue-500" />
                  <div className="flex items-center gap-1">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm text-gray-600">
                      AI is thinking...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me about your finances..."
              className="flex-1"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={isLoading}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleVoiceInput}
              className={isListening ? "text-red-500" : "text-gray-500"}
            >
              {isListening ? (
                <MicOff className="w-4 h-4" />
              ) : (
                <Mic className="w-4 h-4" />
              )}
            </Button>
            <Button
              size="sm"
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="gradient"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
