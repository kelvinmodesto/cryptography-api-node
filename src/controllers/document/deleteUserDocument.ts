import ContextStrategy from '../../db/base/contextStrategy';

export default function deleteUserDocument(router: any = {}, context: ContextStrategy) {
  router.delete('/:id', async (req: any, res: any, next: any) => {
    try {
      const { n } = await context.delete(req.params.id);
      if (n === 1) {
        res.send({});
      }
    } catch (error) {
      next(error);
    }
  })
}
