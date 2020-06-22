import { ContextStrategy } from '@db/base';
import { Router } from 'express';
import crypto from 'crypto';
import { RequestError } from '../../utils';

export default function createUserDocument(router: Router, context: ContextStrategy) {
  router.post('/', async (req: any, res: any, next: any) => {
    try {
      const { value } = req.body;
      const userDocument = crypto.createHash('sha256').update(value.toString()).digest('base64');
      const creditCardToken = crypto.createHash('sha256').update(value.toString()).digest('hex');

      const { _id:id } = await context.create({ value, creditCardToken, userDocument });
      if (res.status(200)) {
        res.send({ value, creditCardToken, userDocument, id });
      } else {
        return new RequestError();
      }
    } catch(error) {
      next(error);
    }
  });
}
