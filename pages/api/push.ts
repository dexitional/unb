import { isValidRequest } from "@sanity/webhook"
import type { NextApiRequest, NextApiResponse } from "next"
import { client } from '../../onesignal'

const secret: any = process.env.SANITY_WEBHOOK_SECRET

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    console.error("Must be a POST request")
    return res.status(401).json({ message: "Must be a POST request" })
  }

  if (!isValidRequest(req, secret)) {
    res.status(401).json({ message: "Invalid signature" })
    return
  }

  try {
    const { body: { type, slug } } = req
    if (type) {

      const notification = {
        contents: {
          'tr': 'Yeni bildirim',
          'en': 'New notification',
        },
        included_segments: ['Subscribed Users'],
        filters: [
          { field: 'tag', key: 'level', relation: '>', value: 10 }
        ]
      };

      // using async/await
      try {
        const response = await client.createNotification(notification);
        console.log(response)
        return res.json(response)
      } catch (e) {
        if (e) {
          console.log(e);
        }
      }

    }

  } catch (err) {
    return res.status(500).send({ message: "Error revalidating" })
  }
}