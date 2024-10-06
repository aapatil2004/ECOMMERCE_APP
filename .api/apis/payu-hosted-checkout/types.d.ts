import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type CreatePaymentLinkApiBodyParam = FromSchema<typeof schemas.CreatePaymentLinkApi.body>;
export type CreatePaymentLinkApiMetadataParam = FromSchema<typeof schemas.CreatePaymentLinkApi.metadata>;
export type CreatePaymentLinkApiResponse200 = FromSchema<typeof schemas.CreatePaymentLinkApi.response['200']>;
