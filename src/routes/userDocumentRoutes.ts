import { Router } from 'express';

// Database
import { ContextStrategy as Context } from '../db';
import { MongoDBStrategy as MongoDB } from '../db';

// handlers
import {
  createUserDocument,
  deleteUserDocument,
  getUserDocuments,
  updateUserDocument
} from '../controllers';

// Models
import { document } from '../models';

export default function userDocumentRouter() {
  const context = new Context(new MongoDB(MongoDB.connect(), document));
  const router = Router();

  createUserDocument(router, context);
  deleteUserDocument(router, context);
  getUserDocuments(router, context);
  updateUserDocument(router, context);

  return router;
}


