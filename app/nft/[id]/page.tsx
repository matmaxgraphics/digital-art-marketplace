"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart } from "lucide-react"
import { useParams } from "next/navigation"

const nftDetails: Record<string, any> = {
  "1": {
    title: "Battle for Digital",
    description:
      "A stunning piece exploring the intersection of nature and technology. This 1 of 1 edition represents the constant struggle for dominance in our evolving digital landscape.",
    image: "/abstract-digital-art-with-flowers.jpg",
    creator: "Waiano Akarana",
    creatorImage: "/diverse-profile-avatars.png",
    currentBid: 2.6,
    currentBidUSD: 4350.12,
    buyNowPrice: 14.5,
    auctionEndsIn: { hours: 18, minutes: 42, seconds: 5 },
    likes: 19,
  },
}

export default function NFTDetail() {
  const params = useParams()
  const id = params.id as string
  const nft = nftDetails[id] || nftDetails["1"]
  const [likes, setLikes] = useState(nft.likes)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors w-fit">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Marketplace</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted">
              <img src={nft.image || "/placeholder.svg"} alt={nft.title} className="w-full h-full object-cover" />
              <button
                onClick={handleLike}
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-3 hover:bg-background transition-colors"
              >
                <Heart className={`w-6 h-6 ${isLiked ? "fill-red-500 text-red-500" : "text-foreground"}`} />
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">{nft.title}</h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{nft.description}</p>

            {/* Owner */}
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-border">
              <img src={nft.creatorImage || "/placeholder.svg"} alt={nft.creator} className="w-12 h-12 rounded-full" />
              <div>
                <p className="text-sm text-muted-foreground">Owned by</p>
                <p className="font-bold text-foreground">{nft.creator}</p>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-2">Current Bid</p>
                <p className="text-3xl font-bold text-foreground">{nft.currentBid} ETH</p>
                <p className="text-sm text-muted-foreground mt-1">
                  (${nft.currentBidUSD.toLocaleString("en-US", { minimumFractionDigits: 2 })})
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-2">Buy now price</p>
                <p className="text-3xl font-bold text-foreground">{nft.buyNowPrice} ETH</p>
              </div>
            </div>

            {/* Auction Timer */}
            <div className="border border-border rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-3">Auction ends in</p>
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-foreground">{nft.auctionEndsIn.hours}</p>
                  <p className="text-xs text-muted-foreground">h</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{nft.auctionEndsIn.minutes}</p>
                  <p className="text-xs text-muted-foreground">m</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{nft.auctionEndsIn.seconds}</p>
                  <p className="text-xs text-muted-foreground">s</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Place a Bid
              </Button>
              <Link href="/checkout">
                <Button variant="outline" size="lg" className="w-full font-semibold bg-transparent">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
