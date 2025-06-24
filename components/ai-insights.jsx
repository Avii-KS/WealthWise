"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Target,
  DollarSign,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
} from "lucide-react";

const AIInsights = ({ transactions, accounts }) => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI analysis
    setTimeout(() => {
      generateInsights();
      setLoading(false);
    }, 2000);
  }, [transactions, accounts]);

  const generateInsights = () => {
    const mockInsights = [
      {
        id: 1,
        type: "spending_pattern",
        title: "Unusual Spending Pattern Detected",
        description:
          "Your entertainment expenses increased by 45% this month compared to your 3-month average.",
        impact: "high",
        category: "expense_alert",
        icon: AlertTriangle,
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        action: "Review recent entertainment transactions",
        trend: "up",
        percentage: 45,
      },
      {
        id: 2,
        type: "savings_opportunity",
        title: "Savings Opportunity Identified",
        description:
          "You could save $200/month by optimizing your subscription services.",
        impact: "medium",
        category: "savings",
        icon: Lightbulb,
        color: "text-green-500",
        bgColor: "bg-green-50",
        action: "View subscription analysis",
        trend: "down",
        percentage: 200,
      },
      {
        id: 3,
        type: "investment_suggestion",
        title: "Investment Recommendation",
        description:
          "Based on your spending patterns, consider investing $500 in a high-yield savings account.",
        impact: "high",
        category: "investment",
        icon: Target,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        action: "Explore investment options",
        trend: "up",
        percentage: 500,
      },
      {
        id: 4,
        type: "budget_optimization",
        title: "Budget Optimization",
        description:
          "Your grocery spending is 15% below budget. Great job staying on track!",
        impact: "low",
        category: "positive",
        icon: TrendingUp,
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        action: "View budget details",
        trend: "down",
        percentage: 15,
      },
    ];

    setInsights(mockInsights);
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTrendIcon = (trend) => {
    return trend === "up" ? (
      <ArrowUpRight className="w-4 h-4 text-red-500" />
    ) : (
      <ArrowDownRight className="w-4 h-4 text-green-500" />
    );
  };

  if (loading) {
    return (
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-500" />
            AI Financial Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="ai-loading h-20 rounded-lg"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-hover shadow-glow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="relative">
            <Brain className="w-5 h-5 text-blue-500" />
            <Sparkles className="w-3 h-3 text-purple-500 absolute -top-1 -right-1 animate-pulse" />
          </div>
          AI Financial Insights
          <Badge variant="secondary" className="ml-auto">
            {insights.length} insights
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className={`p-4 rounded-xl border ${insight.bgColor} animate-fade-in`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${insight.bgColor}`}>
                    <insight.icon className={`w-5 h-5 ${insight.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {insight.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {insight.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getTrendIcon(insight.trend)}
                  <span className="text-sm font-medium text-gray-700">
                    {insight.trend === "up" ? "+" : "-"}
                    {insight.percentage}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge className={getImpactColor(insight.impact)}>
                  {insight.impact} impact
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:text-blue-700"
                >
                  {insight.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* AI Analysis Summary */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="font-semibold text-gray-900">
              AI Analysis Summary
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Based on your financial patterns, AI has identified{" "}
            {insights.length} key insights to help optimize your finances.
            Consider reviewing these recommendations to improve your financial
            health.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsights;
