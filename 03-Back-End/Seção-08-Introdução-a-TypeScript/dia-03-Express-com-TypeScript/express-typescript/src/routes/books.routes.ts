// ./routes/books.routes.ts

import { Router } from 'express';

import BooksController from '../controllers/books.controller';

const router = Router();

const booksController = new BooksController();

router
  .route('/books')
  .get(booksController.getAll)
  .post(booksController.create);

router
  .route('/books/:id')
  .get(booksController.getById)
  .put(booksController.update)
  .delete(booksController.remove);

// Alternativa ao uso do bind
// router
//   .route('/books')
//   .get((req, res) => booksController.getAll(req, res))
//   .post((req, res) => booksController.create (req, res));

// router
//   .route('/books/:id')
//   .get((req, res) => booksController.getById(req, res))
//   .put((req, res) => booksController.update(req, res))
//   .delete((req, res) => booksController.remove(req, res));

export default router;

// ====================================================================================================
// antes de refatorar

// router.get('/books', booksController.getAll);
// router.get('/books/:id', booksController.getById);
// router.post('/books', booksController.create);
// router.put('/books/:id', booksController.update);

// alternativa ao uso do bind
// router.get('/books', (req, res) => booksController.getAll(req, res));
// router.get('/books/:id', (req, res) => booksController.getById(req, res));
// router.post('/books', (req, res) => booksController.create(req, res));
// router.put('/books/:id', (req, res) => booksController.update(req, res));
