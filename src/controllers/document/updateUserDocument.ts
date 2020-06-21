import ContextStrategy from '@db/base/contextStrategy';
import crypto from "crypto";

export default function updateUserDocument(router: any = {}, context: ContextStrategy) {
  router.put('/:id', async (req: any, res: any) => {
    const hash = crypto.createHash('sha256').update('hi').digest('hex');
  })
}
