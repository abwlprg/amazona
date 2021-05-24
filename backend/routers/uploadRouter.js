import multer from 'multer';
import express from 'express';
import { isAuth } from '../utils.js';
import aws from 'aws-sdk';
import { config } from 'dotenv';
import { keyBy } from 'lodash';

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

uploadRouter.post('/', isAuth, upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`);
});

aws.config.update({
  accessKeyId:config.accessKeyId,
  secretAccessKey:config.secretAccessKey,
});

const s3 = new aws.S3();
const storageS3 = multerS3 ({
  s3,
  bucket: 'amazonatestbucket',
  acl:'public_read',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  keyBy(req, file, cb) {
    cb(null, file.originalname)
  },
});
const uploadS3 = multer ({storage:storageS3});
router.post('/s3', uplopadS3.single('image'), (req, res) => {
  res.send(req.file.location);
})

export default uploadRouter;
