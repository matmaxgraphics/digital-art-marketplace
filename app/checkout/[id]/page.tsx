"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

import { nfts } from "@/lib/nft";

import {
  useAccount,
  useConnect,
  useDisconnect,
  useSendTransaction,
} from "wagmi";
import { parseEther } from "viem";

// type NFT = {
//   buyNowPrice: string | number | bigint;
// };

export default function Checkout() {
  const params = useParams();
  const id = Number(params.id);
  const nft = nfts.find((nft) => nft.id === id);

  const [selectedPayment, setSelectedPayment] = useState("eth");
  if (!nft) {
    return <div className="p-8 text-center text-red-500">NFT not found 😢</div>;
  }

  const totalPrice = nft.buyNowPriceUSD + nft.serviceFeeUSD;

  const { address, isConnected } = useAccount();
  const { sendTransaction } = useSendTransaction();

  const handlePurchase = async () => {
    if (!isConnected) {
      alert("Please connect your wallet");
      return;
    }

    try {
      const ethAmount = nft.buyNowPrice.toString();
      await sendTransaction({
        to: "0x5dff50b87F61FFb0dB39A1C6ADd9e607AC47c77F",
        value: parseEther(ethAmount),
      });
      alert("Transaction sent! Check your wallet to confirm.");
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Complete your purchase
          </h1>
          <p className="text-lg text-muted-foreground">
            Review your order and complete your payment.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="border border-border rounded-lg p-8 bg-card">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Order Summary
            </h2>

            {/* NFT Item */}
            <div className="flex gap-4 pb-6 border-b border-border">
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted shrink-0">
                <img
                  src={nft.image || "/placeholder.svg"}
                  alt={nft.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{nft.creator}</p>
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {nft.title}
                </h3>
                <p className="text-right font-bold">
                  <span className="text-sm text-muted-foreground">
                    {nft.buyNowPrice} ETH
                  </span>
                  <br />
                  <span className="text-foreground">${nft.buyNowPriceUSD}</span>
                </p>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-4 pt-6">
              <div className="flex justify-between items-center text-foreground">
                <span>Subtotal</span>
                <span className="font-semibold">${nft.buyNowPriceUSD}</span>
              </div>
              <div className="flex justify-between items-center text-foreground">
                <span>Service Fee</span>
                <span className="font-semibold">${nft.serviceFeeUSD}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-foreground pt-4 border-t border-border">
                <span>You pay</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border border-border rounded-lg p-8 bg-card">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Payment Method
            </h2>

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
                      selectedPayment === "eth"
                        ? "border-blue-600 bg-blue-600"
                        : "border-border"
                    }`}
                  >
                    {selectedPayment === "eth" && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-foreground">ETH Wallet</p>
                    <p className="text-sm text-muted-foreground">
                      Balance: 1.25 ETH
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-foreground">◎</span>
                </div>
              </div>
            </button>

            {/* Credit Card Option */}
            <button
              onClick={() => setSelectedPayment("eth")}
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
                      selectedPayment === "card"
                        ? "border-blue-600 bg-blue-600"
                        : "border-border"
                    }`}
                  >
                    {selectedPayment === "card" && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-foreground">Credit Card</p>
                    <p className="text-sm text-muted-foreground">
                      Visa ending in 1234
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-foreground">💳</span>
                </div>
              </div>
            </button>

            {/* Complete Purchase Button */}
            <Button
              size="lg"
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              onClick={handlePurchase}
            >
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
  );
}
