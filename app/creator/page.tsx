"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Share2, MoreHorizontal } from "lucide-react"
import { useState } from "react"

const nfts = [
  {
    id: 1,
    title: "Battle for Digital",
    image: "/abstract-digital-art-with-flowers.jpg",
    auction: 2.6,
    buyNow: 14.5,
    likes: 19,
  },
  {
    id: 2,
    title: "A Rare Path",
    image: "/purple-pink-abstract-cube-design.jpg",
    auction: 2.9,
    buyNow: 18.5,
    likes: 20,
  },
  {
    id: 3,
    title: "Software Secret Algorithms",
    image: "/abstract-white-cloud-formation.jpg",
    auction: 1.45,
    buyNow: 19.99,
    likes: 12,
  },
  {
    id: 4,
    title: "Blazeon Killer",
    image: "/gradient-sphere-abstract-art.jpg",
    auction: 2.75,
    buyNow: 29.0,
    likes: 15,
  },
  {
    id: 5,
    title: "Wait Before Buying",
    image: "/cloudy-abstract-landscape.jpg",
    auction: 3.2,
    buyNow: 15.0,
    likes: 8,
  },
  {
    id: 6,
    title: "Repeal of Online Privacy",
    image: "/layered-abstract-shapes-sunset.jpg",
    auction: 1.9,
    buyNow: 14.5,
    likes: 11,
  },
]

const tabs = ["On Sale", "Owned", "Created", "Collections", "Following", "Activity"]

export default function CreatorPage() {
  const [activeTab, setActiveTab] = useState("On Sale")

  return (
    <div className="min-h-screen bg-background">
      {/* Header Banner */}
      <div className="h-48 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 relative">
        <Link href="/" className="absolute top-4 left-4 text-foreground hover:text-primary">
          ← Back
        </Link>
      </div>

      {/* Creator Info */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Avatar and Info */}
          <div className="flex flex-col md:flex-row gap-6 flex-1">
            <div className="w-32 h-32 rounded-full bg-background border-4 border-background overflow-hidden flex-shrink-0">
              <img src="/diverse-profile-avatars.png" alt="Waiano Akarana" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 pt-4">
              <h1 className="text-3xl font-bold text-foreground mb-2">Waiano Akarana</h1>
              <p className="text-muted-foreground mb-4">0x69485...82580</p>
              <p className="text-foreground leading-relaxed mb-4 max-w-2xl">
                8,888 NFTs of beautiful, Asian women paintakingly-crafted where even the most intricate details are
                steeped
              </p>

              {/* Stats */}
              <div className="flex gap-8 mb-6">
                <div>
                  <p className="text-2xl font-bold text-foreground">96</p>
                  <p className="text-sm text-muted-foreground">followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">64</p>
                  <p className="text-sm text-muted-foreground">items</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">28</p>
                  <p className="text-sm text-muted-foreground">following</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                  <span>✓</span> Follow
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 border-b border-border overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 whitespace-nowrap font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? "text-blue-600 border-blue-600"
                  : "text-muted-foreground hover:text-foreground border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filter and Grid */}
        <div className="mb-8 flex justify-end">
          <Button variant="outline" size="sm">
            ⚙️ Apply filter
          </Button>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {nfts.map((nft) => (
            <Link key={nft.id} href={`/nft/${nft.id}`}>
              <div className="group cursor-pointer overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden bg-muted h-60">
                  <img
                    src={nft.image || "/placeholder.svg"}
                    alt={nft.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {nft.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Auction</p>
                      <p className="font-bold text-foreground">${nft.auction.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Buy now</p>
                      <p className="font-bold text-foreground">${nft.buyNow.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      <img src="/diverse-profile-avatars.png" alt="Creator" className="w-6 h-6 rounded-full" />
                      <span className="text-xs text-muted-foreground">Waiano Akarana</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Heart className="w-4 h-4" />
                      {nft.likes}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
