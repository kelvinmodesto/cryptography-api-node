import * as _ from 'lodash';
import { ContextStrategy } from '../../db';
import { RequestError } from '../../utils';

export default function listUserDocuments(router: any = {}, context: ContextStrategy) {
  router.get('/', async (req: any, res: any, next: any) => {
    try {
      const { value } = req.query;
      const list = await context.read(_.pick({ value }));
      let data = list;
      if (list.length > 0) {
        data = list.map((it: any) => {
          let { value, _id:id } = it;
          return { value, id };
        });
      }
      if (res.status(200)) {
        res.send({ data });
      }  else {
        return new RequestError();
      }
    } catch(error) {
      next(error)
    }
  });
}
