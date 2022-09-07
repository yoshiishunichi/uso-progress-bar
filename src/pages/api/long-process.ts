import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    res.status(500).json({
      error: {
        message: `Error`,
        statusCode: 500,
      },
    });
    res.end();
  }, 15000);
};

export default handler;
