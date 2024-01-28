import { getFrameAccountAddress } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress = '';
  let img = '';

  try {
    const body: {
      untrustedData?: {
        fid?: number;
        url?: string;
        messageHash?: string;
        timestamp: number;
        network?: number;
        buttonIndex?: 1;
        castId?: { fid?: number; hash?: string };
      };
      trustedData?: { messageBytes?: string };
    } = await req.json();
    accountAddress = await getFrameAccountAddress(body, { NEYNAR_API_KEY: 'NEYNAR_API_DOCS' });

    if(body.untrustedData?.buttonIndex == 1) {
      img = 'https://first-frame-phi.vercel.app/lightpath.jpg'
    }
    else if(body.untrustedData?.buttonIndex == 2){
      img = 'https://first-frame-phi.vercel.app/darkpath.png'
    }

    
  } catch (err) {
    console.error(err);
  }

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://first-frame-phi.vercel.app/choice />
    <meta property="fc:frame:button:1" content="Farcaster" />
    <meta property="fc:frame:button:2" content="Twitter" />
    <meta property="fc:frame:post_url" content="https://first-frame-phi.vercel.app/api/frame" />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
