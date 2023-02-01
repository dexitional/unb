import { isValidRequest } from "@sanity/webhook"
import type { NextApiRequest, NextApiResponse } from "next"
import { client } from '../../onesignal'
import { sanityClient, urlFor } from '../../sanity'
import PortableText, { blockContentToPlainText } from 'react-portable-text'

// const secret: any = process.env.SANITY_WEBHOOK_SECRET || 'DHRCdodowa1'
const secret: any = 'DHRCdodowa1'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    console.error("Must be a POST request")
    return res.status(401).json({ message: "Must be a POST request" })
  }


  // if (!isValidRequest(req, secret)) {
  //   res.status(401).json({ message: `Invalid signature: ${secret}` })
  //   return
  // }

  try {
    const { body: { _id, title, slug, mainImage, body, _createdAt } } = req
    const content = blockContentToPlainText(body);
    const image = urlFor(mainImage).width(360).height(180).url()
    const icon = `https://www.uccnoticeboard.info/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ae4f36d1.png&w=96&q=75`
    const notification = {
      headings: { 'en': title },
      contents: { 'en': content.length < 126 ? content : content.substring(0, 126) + ' ...' },
      chrome_web_icon: icon,
      firefox_icon: icon,
      chrome_web_image: image,
      url: `https://www.uccnoticeboard.info/${slug?.current}`,
      included_segments: ['Subscribed Users'],
      //  filters: [{ field: 'tag', key: 'level', relation: '>', value: 10 }]
    };

    const response = await client.createNotification(notification);
    console.log(response)
    return res.json(response)

  } catch (err) {
    console.log(err)
    return res.status(500).send({ message: "Error revalidating" })
  }
}