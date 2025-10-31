import Link from "next/link"
import { Heart } from "lucide-react"

const nfts = [
  {
    id: 1,
    title: "Battle for Digital",
    image: "/abstract-digital-art-with-flowers.jpg",
    creator: "Waiano Akarana",
    creatorImage: "/diverse-profile-avatars.png",
    auction: 2.6,
    buyNow: 14.5,
    likes: 19,
  },
  {
    id: 2,
    title: "A Rare Path",
    image: "/purple-pink-abstract-cube-design.jpg",
    creator: "Waiano Akarana",
    creatorImage: "/diverse-profile-avatars.png",
    auction: 2.9,
    buyNow: 18.5,
    likes: 20,
  },
  {
    id: 3,
    title: "Software Secret Algorithms",
    image: "/abstract-white-cloud-formation.jpg",
    creator: "Waiano Akarana",
    creatorImage: "/diverse-profile-avatars.png",
    auction: 1.45,
    buyNow: 19.99,
    likes: 12,
  },
  {
    id: 4,
    title: "Blazeon Killer",
    image: "/gradient-sphere-abstract-art.jpg",
    creator: "Waiano Akarana",
    creatorImage: "/diverse-profile-avatars.png",
    auction: 2.75,
    buyNow: 29.0,
    likes: 15,
  },
  {
    id: 5,
    title: "Wait Before Buying",
    image: "/cloudy-abstract-landscape.jpg",
    creator: "Waiano Akarana",
    creatorImage: "/diverse-profile-avatars.png",
    auction: 3.2,
    buyNow: 15.0,
    likes: 8,
  },
  {
    id: 6,
    title: "Repeal of Online Privacy",
    image: "/layered-abstract-shapes-sunset.jpg",
    creator: "Waiano Akarana",
    creatorImage: "/diverse-profile-avatars.png",
    auction: 1.9,
    buyNow: 14.5,
    likes: 11,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">NFT Marketplace</h1>
          <p className="text-muted-foreground mt-2">Discover unique digital collectibles</p>
        </div>
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
                      <p className="font-bold text-foreground">${nft.buyNow.toFixed(2)}</p>
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
