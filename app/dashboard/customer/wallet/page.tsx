"use client"

import { DashboardNav } from "@/components/navigation/dashboard-nav"
import { Button } from "@/components/ui/button"
import { Wallet, Plus, Send, History } from "lucide-react"

export default function WalletPage() {
  const transactions = [
    { id: 1, type: "charge", description: "General Cleaning Service", amount: "-45.00 BHD", date: "2025-12-14" },
    { id: 2, type: "credit", description: "Referral Bonus", amount: "+20.00 BHD", date: "2025-12-13" },
    { id: 3, type: "charge", description: "Booking Refund", amount: "+30.00 BHD", date: "2025-12-12" },
    { id: 4, type: "charge", description: "Deep Cleaning Service", amount: "-75.00 BHD", date: "2025-12-10" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="customer" userName="User" />

      <main className="lg:ml-64">
        <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Wallet</h1>
          <p className="text-white/80 mt-2">Manage your account balance</p>
        </div>

        <div className="p-6 sm:p-8">
          {/* Balance Card */}
          <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl p-8 mb-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg">Available Balance</h2>
              <Wallet size={32} />
            </div>
            <p className="text-5xl font-bold mb-2">285.50 BHD</p>
            <p className="text-white/80 text-sm">Updated today at 2:30 PM</p>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Button className="gap-2 h-auto py-4" size="lg">
              <Plus size={20} />
              Add Funds
            </Button>
            <Button variant="outline" className="gap-2 h-auto py-4 bg-white" size="lg">
              <Send size={20} />
              Send Money
            </Button>
            <Button variant="outline" className="gap-2 h-auto py-4 bg-white" size="lg">
              <History size={20} />
              History
            </Button>
          </div>

          {/* Transaction History */}
          <div className="bg-white rounded-lg border border-border shadow-sm">
            <div className="p-6 border-b border-border">
              <h2 className="font-bold text-foreground text-lg">Recent Transactions</h2>
            </div>
            <div className="divide-y divide-border">
              {transactions.map((tx) => (
                <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{tx.description}</p>
                    <p className="text-sm text-muted">{tx.date}</p>
                  </div>
                  <p className={`font-bold text-lg ${tx.type === "charge" ? "text-red-600" : "text-green-600"}`}>
                    {tx.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
