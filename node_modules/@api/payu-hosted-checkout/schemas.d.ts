declare const CreatePaymentLinkApi: {
    readonly body: {
        readonly contentMediaType: "application/json";
        readonly title: "CreatePaymentLinkAPIRequest";
        readonly required: readonly ["description", "source"];
        readonly type: "object";
        readonly properties: {
            readonly invoiceNumber: {
                readonly type: "string";
                readonly description: "This parameter contains the unique string which is used for identifying a payment link. This must be alphanumeric.";
                readonly examples: readonly ["INV8446471886220"];
            };
            readonly isAmountFilledByCustomer: {
                readonly type: "boolean";
                readonly description: "This parameter contains any of the following values to specify whether it is an open invoices (when customer fills amount) or fixed amount:  * true - It is an open invoice where the customer can fill the amount. The subamount parameter must be null in this case.  * false - It is closed invoice and amount is fixed.";
                readonly default: false;
                readonly examples: readonly [false];
            };
            readonly subAmount: {
                readonly type: "integer";
                readonly description: "This parameter must contain the payment amount when the isAmountFilledByCustomer parameter is set to false. The value must be greater than or equal to 1.";
                readonly contentEncoding: "int64";
            };
            readonly minAmountForCustomer: {
                readonly type: "integer";
                readonly description: "This parameter contains the minimum amount a customer needs to pay in case of partial payment.";
                readonly contentEncoding: "int64";
            };
            readonly tax: {
                readonly type: "integer";
                readonly description: "This parameter must contain the tax amount for the payment transaction. This value must be greater than zero.";
                readonly contentEncoding: "int64";
                readonly examples: readonly [10];
            };
            readonly shippingCharge: {
                readonly type: "integer";
                readonly description: "This parameter must contain the shipping charges if any,";
                readonly contentEncoding: "int32";
                readonly examples: readonly [10];
            };
            readonly discount: {
                readonly type: "integer";
                readonly description: "This parameter must contains the discount given for the customer if any,";
                readonly contentEncoding: "int64";
                readonly examples: readonly [10];
            };
            readonly adjustment: {
                readonly type: "integer";
                readonly description: "This parameter must contains the adjustment amount if any,";
                readonly contentEncoding: "int64";
                readonly examples: readonly [10];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "This parameter must contain the description or purpose of creating the.payment link.";
                readonly examples: readonly ["10"];
            };
            readonly source: {
                readonly type: "string";
                readonly description: "This parameter contains the source of payment generation.";
                readonly examples: readonly ["API"];
            };
            readonly isPartialPaymentAllowed: {
                readonly type: "boolean";
                readonly description: "This parameter indicates whether partial payments allowed using the payment link sent.";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "This parameter contains the currency code of the currency that is used for collecting the amount.";
                readonly examples: readonly ["INR"];
            };
            readonly maxPaymentsAllowed: {
                readonly type: "integer";
                readonly description: "This parameter contains the max number of payments allowed using the payment link shared by the merchant. For example, you can share same payment link to 10 customers or 100 customers based on the requirement.";
                readonly contentEncoding: "int32";
                readonly examples: readonly [10];
            };
            readonly batchId: {
                readonly type: "string";
                readonly description: "This parameter contains the batch ID of the payment link.";
                readonly examples: readonly ["batch123"];
            };
            readonly expiryDate: {
                readonly type: "string";
                readonly description: "This parameter contains the expiry date of the payment link in the  <yyyy-MM-dd HH:mm:ss>  format (will be 365 days in all other cases). For exaample, 2016-06-23 09:07:21";
            };
            readonly scheduledFor: {
                readonly type: "string";
                readonly description: "This parameter contains the reason for scheduling this payment link.";
            };
            readonly customer: {
                readonly title: "Customer3";
                readonly required: readonly ["name", "email", "phone"];
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly email: {
                        readonly type: "string";
                    };
                    readonly phone: {
                        readonly type: "string";
                    };
                };
            };
            readonly address: {
                readonly title: "Address2";
                readonly required: readonly ["line1", "city", "state", "zipCode"];
                readonly type: "object";
                readonly properties: {
                    readonly line1: {
                        readonly type: "string";
                        readonly description: "This parameter contains the 1st line of the address.";
                    };
                    readonly line2: {
                        readonly type: "string";
                        readonly description: "This parameter contains the 2nd line of the address.";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "This parameter contains the city in the address.";
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly description: "This parameter contains the state in the address.";
                    };
                    readonly zipCode: {
                        readonly type: "string";
                        readonly description: "This parameter contains the zip code or PIN code for the address.";
                    };
                };
            };
            readonly udf: {
                readonly title: "Udf3";
                readonly type: "object";
                readonly properties: {
                    readonly udf1: {
                        readonly type: "string";
                        readonly description: "This parameter contains the user-defined field information.";
                    };
                    readonly udf2: {
                        readonly type: "string";
                        readonly description: "This parameter contains the user-defined field information.";
                    };
                    readonly udf3: {
                        readonly type: "string";
                        readonly description: "This parameter contains the user-defined field information.";
                    };
                    readonly udf4: {
                        readonly type: "string";
                        readonly description: "This parameter contains the user-defined field information.";
                    };
                    readonly udf5: {
                        readonly type: "string";
                        readonly description: "This parameter contains the user-defined field information.";
                    };
                };
            };
            readonly viaEmail: {
                readonly type: "string";
                readonly description: "This parameter is set to 1 to send the payment link via the email upon generation. Else, set to 0 (zero) so that email is not sent.";
                readonly examples: readonly ["1"];
            };
            readonly viaSms: {
                readonly type: "string";
                readonly description: "This parameter is set to 1 to send the payment link via the SMS upon generation. Else, set to 0 (zero) so that SMS is not sent.";
                readonly examples: readonly ["1"];
            };
            readonly emailTemplateName: {
                readonly type: "string";
                readonly description: "This parameter is contains the email template name that will be used when sending email.";
            };
            readonly smsTemplateName: {
                readonly type: "string";
                readonly description: "This parameter is contains the SMS template name that will be used when sending SNS.";
            };
            readonly timeUnit: {
                readonly type: "string";
                readonly description: "This parameter is contains the time unit used that is used while specifying the expiryDate.";
            };
            readonly notes: {
                readonly type: "string";
                readonly description: "This parameter is contains the custom notes about the payment link.";
            };
            readonly successURL: {
                readonly type: "string";
                readonly description: "The success URL, which is the page PayU will redirect to if the transaction is successful.";
                readonly examples: readonly ["https://test-payment-middleware.payu.in/simulatorResponse"];
            };
            readonly failureURL: {
                readonly type: "string";
                readonly description: "The Failure URL, which is the page PayU will redirect to if the transaction is failed.";
                readonly examples: readonly ["https://test-payment-middleware.payu.in/simulatorResponse"];
            };
            readonly customAttributes: {
                readonly type: "array";
                readonly description: "This parameter contains the customAttribute details in a JSON format.";
                readonly items: {
                    readonly title: "customAttributes";
                    readonly required: readonly ["custom1", "custom2"];
                    readonly type: "object";
                    readonly description: "You can create any number of custom fields as per your requirements.";
                    readonly properties: {
                        readonly custom1: {
                            readonly type: "string";
                            readonly description: "You can create custom fields in the customAttributes parameter. This parameter is for demo purpose only.";
                        };
                        readonly custom2: {
                            readonly type: "string";
                            readonly description: "You can create custom fields in the customAttributes parameter. This parameter is for demo purpose only.";
                        };
                    };
                };
            };
            readonly dropCategory: {
                readonly type: "string";
                readonly description: "This parameter can be used if you want to hide one or multiple payment options. For example, if you want to collect the payment using debit card and Net Banking, you can hide the credit card mode of payment.";
                readonly examples: readonly ["DC|VISA|MAST"];
            };
            readonly enforcePayment: {
                readonly type: "string";
                readonly description: "This parameter allows you to customize the payment options for each transaction. You can enforce specific payment modes, cards scheme, and specific banks under Net Banking using this method.";
                readonly examples: readonly ["creditcard|debitcard"];
            };
            readonly enforcePG: {
                readonly type: "string";
                readonly description: "This parameter allows you to enforce only a specific payment mode that you prefer.";
                readonly examples: readonly ["CC"];
            };
            readonly userToken: {
                readonly type: "string";
                readonly description: "This parameter must contain the user token if you are using a token for authentication.";
            };
            readonly userCredentials: {
                readonly type: "string";
                readonly description: "This parameter must contain the user credentials if you are credetails for authentication.";
            };
            readonly transactionId: {
                readonly type: "string";
                readonly description: "This parameter must contain the transaction ID of the transaction.";
                readonly examples: readonly ["TXN1234567"];
            };
            readonly cart_details: {
                readonly title: "CartDetails3";
                readonly required: readonly ["amount", "items", "sku_details"];
                readonly type: "object";
                readonly properties: {
                    readonly amount: {
                        readonly type: "string";
                        readonly description: "The cart total amount is specified in this field.";
                    };
                    readonly items: {
                        readonly type: "string";
                        readonly description: "The number of items in this cart is specified in this field.";
                    };
                    readonly sku_details: {
                        readonly type: "array";
                        readonly description: "This field contains SKU details as an object array.";
                        readonly items: {
                            readonly title: "sku_details";
                            readonly required: readonly ["quantity", "sku_id", "sku_name", "amount_per_sku"];
                            readonly type: "object";
                            readonly description: "This parameter contains the SKU details using custom fields.";
                            readonly properties: {
                                readonly quantity: {
                                    readonly type: "integer";
                                    readonly description: "This field must contain the SKU quantity.";
                                    readonly contentEncoding: "int32";
                                };
                                readonly sku_id: {
                                    readonly type: "string";
                                    readonly description: "This field must contain the SKU ID.";
                                };
                                readonly sku_name: {
                                    readonly type: "string";
                                    readonly description: "This field must contain the SKU name.";
                                };
                                readonly amount_per_sku: {
                                    readonly type: "string";
                                    readonly description: "This field must contain the amount per SKU.";
                                };
                                readonly offer_key: {
                                    readonly type: "array";
                                    readonly description: "This field must contain the offer key and can contain multiple offer keys as an array.";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                                readonly offer_auto_apply: {
                                    readonly type: "boolean";
                                    readonly description: "This field is used to indicate the offer is automatically applied. It is automatically applied if set to true.";
                                };
                            };
                        };
                    };
                };
            };
            readonly aggregatorSplitInfo: {
                readonly title: "AggregatorSplitInfo2";
                readonly required: readonly ["type", "splitInfo"];
                readonly type: "object";
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                        readonly description: "This parameter must contain split type that is Absolute or Percentage.";
                    };
                    readonly splitInfo: {
                        readonly type: "object";
                        readonly description: "This parameter must contain splitInfo details (Object).";
                        readonly additionalProperties: true;
                    };
                };
            };
            readonly validationPeriod: {
                readonly type: "string";
                readonly description: "This parameter must contain the validation period of the transaction.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly merchantId: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
                    readonly description: "This parameter must contain the merchant ID provided by PayU.";
                };
            };
            readonly required: readonly ["merchantId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
        };
    };
};
export { CreatePaymentLinkApi };
