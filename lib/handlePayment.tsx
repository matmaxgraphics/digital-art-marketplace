import {
  useAccount,
  useConnect,
  useDisconnect,
  useSendTransaction,
} from "wagmi";
import { parseEther } from "viem";

type NFT = {
  buyNowPrice: string | number | bigint;
};

const { address, isConnected } = useAccount();
const { sendTransaction } = useSendTransaction();

export const handlePurchase = async (nft: NFT): Promise<void> => {
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
