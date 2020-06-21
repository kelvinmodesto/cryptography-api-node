import * as _ from 'lodash';
import { ContextStrategy } from '../../db';
import { RequestError } from '../../utils';

export default function getUserDocuments(router: any = {}, context: ContextStrategy) {
  router.get('/', async (req: any, res: any, next: any) => {
    try {
      const { value, id:_id } = req.query;
      const list = await context.read(_.pick({ value, _id })).then((data: any) => {
        return data.map((it: any) => {
          let { value, _id:id } = it;
          return { value, id };
        });
      });
      if (res.status(200)) {
        res.send({ list });
      }  else {
        return new RequestError();
      }
    } catch(error) {
      next(error)
    }
  });
}
