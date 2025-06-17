// pages/api/fetch-nft.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cidOrPath = searchParams.get("cidOrPath");

  if (!cidOrPath) {
    return NextResponse.json({ error: "Invalid CID or path" }, { status: 400 });
  }

  try {
    // Extraire le CID du chemin IPFS
    const cid = cidOrPath
      .replace("ipfs://", "")
      .replace("https://ipfs.io/ipfs/", "")
      .replace("https://gateway.pinata.cloud/ipfs/", "")
      .replace("https://the-antonios.mypinata.cloud/ipfs/", "");

    const response = await fetch(`https://ipfs.io/ipfs/${cid}`);

    const resJson = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch metadata" },
        { status: response.status }
      );
    }

    return NextResponse.json(resJson);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
