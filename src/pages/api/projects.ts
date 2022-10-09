import { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "../../server/common/get-server-auth-session";

const projects = async(req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerAuthSession({ req, res});

  if (session) {
    
  }
}