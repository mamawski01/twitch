import express from 'express';
import ExpressValidation from 'express-joi-validation';
import Joi from 'joi';
import { getChannelDetails } from '../controllers/channels/getChannelDetails.js';
import { getChannels } from '../controllers/channels/getChannels.js';

const router = express.Router();

const channelDetailsSchema = Joi.object({
  channelId: Joi.string().required(),
});

const validator = ExpressValidation.createValidator({});

router.get(
  '/:channelId',
  validator.params(channelDetailsSchema),
  getChannelDetails
);

router.get('/', getChannels);

export default router;
