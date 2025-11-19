import Link from "next/link"
import { Heart } from "lucide-react"
import { nfts } from "@/lib/nft"
import {ConnectButton} from '@rainbow-me/rainbowkit'


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-between border-b border-border">
        <div className="">
          <h1 className="text-3xl font-bold text-foreground">NFT Marketplace</h1>
          <p className="text-muted-foreground mt-2">Discover unique digital collectibles</p>
        </div>

        <ConnectButton />
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <Link key={nft.id} href={`/nft/${nft.id}`}>
              <div className="group cursor-pointer overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-muted h-60">
                  <img
                    src={nft.image || "/placeholder.svg"}
                    alt={nft.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Like Badge */}
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-2 flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    <span className="text-sm font-medium text-foreground">{nft.likes}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {nft.title}
                  </h3>

                  {/* Creator Info */}
                  <div className="flex items-center gap-2 my-3">
                    <img
                      src={nft.creatorImage || "/placeholder.svg"}
                      alt={nft.creator}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm text-muted-foreground">{nft.creator}</span>
                  </div>

                  {/* Pricing */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Auction</p>
                      <p className="font-bold text-foreground">${nft.auction.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Buy now</p>
                      <p className="font-bold text-foreground">{nft.buyNowPrice.toFixed(2)} ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
