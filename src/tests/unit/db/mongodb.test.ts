import { ContextStrategy as Context } from '../../../db';
import { MongoDBStrategy as MongoDB } from '../../../db';
import { document as Document } from '../../../models';

const MOCK_CREATE_DOCUMENT = {
  userDocument: '1rxyrx80ybrc28',
  creditCardToken: '1x3nr38ndk2nlende',
  value: 5585
};

const MOCK_UPDATE_DOCUMENT = {
  userDocument: 'h2hin92hc',
  creditCardToken: 'cnoid23zz32dhxhf32ph2hd',
  value: 1007
};

let MOCK_DOCUMENT_ID = '';
const context = new Context(new MongoDB(MongoDB.connect(), Document));
describe('MongoDB Test Suit', () => {
  beforeAll(async () => {
    const document = await context.create(MOCK_UPDATE_DOCUMENT);
    MOCK_DOCUMENT_ID = document._id;
  });

  it('Verify connection', async () => {
    expect(await context.isConnected()).toBe(1);
  });

  it('Create item', async () => {
    const {
      userDocument,
      value,
      creditCardToken
    } = await context.create(MOCK_CREATE_DOCUMENT);
    expect([{ userDocument, value, creditCardToken}]).toStrictEqual([MOCK_CREATE_DOCUMENT]);
  });

  it('Read item', async () => {
    const [{
      value,
      userDocument,
      creditCardToken
    }] = await context.read(MOCK_CREATE_DOCUMENT);
    expect([{ value, userDocument, creditCardToken }]).toStrictEqual([MOCK_CREATE_DOCUMENT]);
  });

  it('Update item', async () => {
    const res = await context.update(MOCK_DOCUMENT_ID, {
      value: '5555',
    });
    expect(res.nModified).toBe(1);
  });

  it('Delete item by id', async () => {
    const res = await context.delete(MOCK_DOCUMENT_ID);
    expect(res.n).toBe(1);
  });
});
