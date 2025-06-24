"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  Brain,
  Sparkles,
  Calendar,
  DollarSign,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";

const AIPredictions = ({ transactions, accounts }) => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState("1M");

  useEffect(() => {
    // Simulate AI prediction analysis
    setTimeout(() => {
      generatePredictions();
      setLoading(false);
    }, 2500);
  }, [transactions, accounts, selectedPeriod]);

  const generatePredictions = () => {
    const mockPredictions = [
      {
        id: 1,
        type: "expense_forecast",
        title: "Monthly Expense Forecast",
        description:
          "Based on your spending patterns, you're projected to spend $2,450 this month.",
        currentAmount: 1850,
        predictedAmount: 2450,
        confidence: 85,
        trend: "up",
        icon: TrendingUp,
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        status: "warning",
        recommendations: [
          "Consider reducing dining out expenses",
          "Review subscription services",
          "Set up spending alerts",
        ],
      },
      {
        id: 2,
        type: "savings_prediction",
        title: "Savings Goal Progress",
        description:
          "You're on track to reach your $5,000 savings goal by December 2024.",
        currentAmount: 3200,
        predictedAmount: 5000,
        confidence: 92,
        trend: "up",
        icon: Target,
        color: "text-green-500",
        bgColor: "bg-green-50",
        status: "success",
        recommendations: [
          "Continue current saving habits",
          "Consider increasing monthly contributions",
          "Explore high-yield savings options",
        ],
      },
      {
        id: 3,
        type: "cash_flow_prediction",
        title: "Cash Flow Analysis",
        description:
          "Your cash flow is expected to remain positive with a surplus of $800 next month.",
        currentAmount: 650,
        predictedAmount: 800,
        confidence: 78,
        trend: "up",
        icon: DollarSign,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        status: "positive",
        recommendations: [
          "Maintain current income sources",
          "Consider investment opportunities",
          "Build emergency fund",
        ],
      },
      {
        id: 4,
        type: "budget_alert",
        title: "Budget Risk Assessment",
        description:
          "Low risk of exceeding budget this month. Current spending is 15% below limit.",
        currentAmount: 1850,
        predictedAmount: 2200,
        confidence: 88,
        trend: "down",
        icon: CheckCircle,
        color: "text-emerald-500",
        bgColor: "bg-emerald-50",
        status: "safe",
        recommendations: [
          "Continue current spending habits",
          "Consider reallocating surplus funds",
          "Review budget categories",
        ],
      },
    ];

    setPredictions(mockPredictions);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "danger":
        return "bg-red-100 text-red-800";
      case "positive":
        return "bg-blue-100 text-blue-800";
      case "safe":
        return "bg-emerald-100 text-emerald-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTrendIcon = (trend) => {
    return trend === "up" ? (
      <TrendingUp className="w-4 h-4 text-green-500" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-500" />
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  if (loading) {
    return (
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-500" />
            AI Financial Predictions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="ai-loading h-24 rounded-lg"></div>
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
          AI Financial Predictions
          <Badge variant="secondary" className="ml-auto">
            {predictions.length} predictions
          </Badge>
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>Updated every 24 hours</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {predictions.map((prediction) => (
            <div
              key={prediction.id}
              className={`p-4 rounded-xl border ${prediction.bgColor} animate-fade-in`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${prediction.bgColor}`}>
                    <prediction.icon
                      className={`w-5 h-5 ${prediction.color}`}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {prediction.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {prediction.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getTrendIcon(prediction.trend)}
                  <Badge className={getStatusColor(prediction.status)}>
                    {prediction.confidence}% confidence
                  </Badge>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>
                    Current: {formatCurrency(prediction.currentAmount)}
                  </span>
                  <span>
                    Predicted: {formatCurrency(prediction.predictedAmount)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      prediction.trend === "up"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500"
                        : "bg-gradient-to-r from-green-500 to-emerald-500"
                    }`}
                    style={{
                      width: `${Math.min((prediction.currentAmount / prediction.predictedAmount) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Recommendations */}
              <div>
                <h5 className="text-sm font-medium text-gray-900 mb-2">
                  AI Recommendations:
                </h5>
                <ul className="space-y-1">
                  {prediction.recommendations.map((rec, index) => (
                    <li
                      key={index}
                      className="text-xs text-gray-600 flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* AI Analysis Summary */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="font-semibold text-gray-900">
              AI Prediction Summary
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Based on your financial patterns and market trends, AI has generated{" "}
            {predictions.length} predictions to help you plan your finances
            better. These forecasts are updated daily using advanced machine
            learning algorithms.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIPredictions;
