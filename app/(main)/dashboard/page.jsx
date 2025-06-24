import { Suspense } from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { BudgetProgress } from "./_components/budget-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Brain, Sparkles, TrendingUp, Shield } from "lucide-react";
import { DashboardOverview } from "./_components/transaction-overview";
import AIInsights from "@/components/ai-insights";
import AIAssistant from "@/components/ai-assistant";
import AIPredictions from "@/components/ai-predictions";

export default async function DashboardPage() {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  // Get budget for default account
  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <div className="space-y-8">
      {/* AI-Powered Header */}
      <div className="glass rounded-2xl p-6 shadow-glow animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <Brain className="w-8 h-8 text-blue-500" />
            <Sparkles className="w-4 h-4 text-purple-500 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              AI-Powered Dashboard
            </h1>
            <p className="text-gray-600">
              Your intelligent financial companion
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/50 rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-600">
                Total Balance
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              $
              {accounts
                .reduce((sum, acc) => sum + acc.balance, 0)
                .toLocaleString()}
            </div>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-600">
                Accounts
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {accounts.length}
            </div>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-600">
                AI Insights
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900">4</div>
          </div>
          <div className="bg-white/50 rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <span className="text-sm font-medium text-gray-600">
                This Month
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {transactions?.length || 0}
            </div>
          </div>
        </div>
      </div>

      {/* Budget Progress with Enhanced Styling */}
      <div className="animate-slide-up">
        <BudgetProgress
          initialBudget={budgetData?.budget}
          currentExpenses={budgetData?.currentExpenses || 0}
        />
      </div>

      {/* AI Components Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* AI Insights */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <AIInsights transactions={transactions || []} accounts={accounts} />
        </div>

        {/* AI Predictions */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <AIPredictions
            transactions={transactions || []}
            accounts={accounts}
          />
        </div>

        {/* AI Assistant */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <AIAssistant />
        </div>
      </div>

      {/* Dashboard Overview with Enhanced Styling */}
      <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <DashboardOverview
          accounts={accounts}
          transactions={transactions || []}
        />
      </div>

      {/* Enhanced Accounts Grid */}
      <div className="animate-fade-in" style={{ animationDelay: "1.0s" }}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Your Accounts
          </h2>
          <p className="text-gray-600">
            Manage and monitor your financial accounts
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CreateAccountDrawer>
            <Card className="card-hover cursor-pointer border-dashed border-2 border-gray-300 hover:border-blue-400 transition-all duration-300">
              <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-3">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-medium">Add New Account</p>
                <p className="text-xs text-gray-500 mt-1">
                  Connect your bank or create a new account
                </p>
              </CardContent>
            </Card>
          </CreateAccountDrawer>

          {accounts.length > 0 &&
            accounts?.map((account, index) => (
              <div
                key={account.id}
                className="animate-scale-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <AccountCard account={account} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
