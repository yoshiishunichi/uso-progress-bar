import type { NextApiRequest, NextApiResponse } from "next";

export type ResponseData = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  setTimeout(() => {
    res.status(500).json({ message: "error" });
    res.end();
  }, 15000);
}
