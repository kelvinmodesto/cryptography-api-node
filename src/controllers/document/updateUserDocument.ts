import { Router } from 'express';
import crypto from 'crypto';

import ContextStrategy from '../../db/base/contextStrategy';
import { RequestError } from '../../utils/exception';

export default function updateUserDocument(router: Router, context: ContextStrategy) {
  router.put('/:id', async (req: any, res: any, next: any) => {
    try {
      const { value } = req.query;
      const { id } = req.params;
      const document = await context.read({ _id: id });
      if (document.length > 0 && value) {
        const userDocument = crypto.createHash('sha256').update(value.toString()).digest('base64');
        const creditCardToken = crypto.createHash('sha256').update(value.toString()).digest('hex');
        const { n } = await context.update(id, { value, userDocument, creditCardToken });
        if (n === 1) {
          res.send({ value, userDocument, creditCardToken });
        }  else {
          return new RequestError();
        }
      } else {
        res.send({});
      }

    } catch(error) {
      next(error);
    }
  })
}
