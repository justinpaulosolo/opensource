import { type NextRequest } from 'next/server';

export default async function handler(req: NextRequest) {
  console.log(req.body, '--------------->');
  return 'hello';
}
