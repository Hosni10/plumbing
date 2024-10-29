import express from 'express';
import { getAllCategories, getOneCategory } from './category.controller.js';

const categoryRouter = express.Router();

categoryRouter.get('/getallcategories', getAllCategories);
categoryRouter.get('/getonecategory', getOneCategory);

export default categoryRouter;