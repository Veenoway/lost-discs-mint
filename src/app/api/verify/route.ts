import { NextResponse } from "next/server";
import { verifyMessage } from "viem";

export async function POST(request: Request) {
  try {
    const { address, signature, message } = await request.json();

    if (!address || !signature || !message) {
      return NextResponse.json(
        { error: "Missing parameters" },
        { status: 400 }
      );
    }

    const recoveredAddress = await verifyMessage({
      message,
      signature,
      address,
    });

    return NextResponse.json({ isValid: recoveredAddress });
  } catch (error) {
    console.error("Error verifying signature:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }
}
