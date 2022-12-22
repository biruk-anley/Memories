import express from 'express'

import { getPosts,createPost } from '../controllers/posts.js'
const router = express.Router()
 
// here it is find by local host:5000/posts due to index 
router.get('/', getPosts);
router.post('/', createPost)

export default router;