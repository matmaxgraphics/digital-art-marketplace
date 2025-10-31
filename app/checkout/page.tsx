"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"

export default function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState("eth")
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Complete your purchase</h1>
          <p className="text-lg text-muted-foreground">Review your order and complete your payment.</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="border border-border rounded-lg p-8 bg-card">
            <h2 className="text-2xl font-bold text-foreground mb-8">Order Summary</h2>

            {/* NFT Item */}
            <div className="flex gap-4 pb-6 border-b border-border">
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <img src="/abstract-digital-art-with-flowers.jpg" alt="Battle for Digital" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Waiano Akarana</p>
                <h3 className="font-bold text-lg text-foreground mb-1">Battle for Digital</h3>
                <p className="text-right font-bold">
                  <span className="text-sm text-muted-foreground">0.5 ETH</span>
                  <br />
                  <span className="text-foreground">$1,450.00</span>
                </p>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-4 pt-6">
              <div className="flex justify-between items-center text-foreground">
                <span>Subtotal</span>
                <span className="font-semibold">$1,450.00</span>
              </div>
              <div className="flex justify-between items-center text-foreground">
                <span>Service Fee</span>
                <span className="font-semibold">$29.00</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-foreground pt-4 border-t border-border">
                <span>You pay</span>
                <span>$1,479.00</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border border-border rounded-lg p-8 bg-card">
            <h2 className="text-2xl font-bold text-foreground mb-8">Payment Method</h2>

            {/* ETH Wallet Option */}
            <button
              onClick={() => setSelectedPayment("eth")}
              className={`w-full mb-4 p-4 rounded-lg border-2 transition-colors ${
                selectedPayment === "eth"
                  ? "border-blue-600 bg-blue-600/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedPayment === "eth" ? "border-blue-600 bg-blue-600" : "border-border"
                    }`}
                  >
                    {selectedPayment === "eth" && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-foreground">ETH Wallet</p>
                    <p className="text-sm text-muted-foreground">Balance: 1.25 ETH</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-foreground">◎</span>
                </div>
              </div>
            </button>

            {/* Credit Card Option */}
            <button
              onClick={() => setSelectedPayment("card")}
              className={`w-full p-4 rounded-lg border-2 transition-colors ${
                selectedPayment === "card"
                  ? "border-blue-600 bg-blue-600/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedPayment === "card" ? "border-blue-600 bg-blue-600" : "border-border"
                    }`}
                  >
                    {selectedPayment === "card" && <Check className="w-4 h-4 text-white" />}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-foreground">Credit Card</p>
                    <p className="text-sm text-muted-foreground">Visa ending in 1234</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-foreground">💳</span>
                </div>
              </div>
            </button>

            {/* Complete Purchase Button */}
            <Button size="lg" className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Complete Purchase
            </Button>

            {/* Terms */}
            <p className="text-xs text-muted-foreground text-center mt-4">
              By completing your purchase, you agree to our{" "}
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
