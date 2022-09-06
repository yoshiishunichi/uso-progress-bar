import type { NextApiRequest, NextApiResponse } from "next";

export type ResponseData = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  setTimeout(() => {
    res.status(200).json({ message: "success!" });
    res.end();
  }, 10000);
}
