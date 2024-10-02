import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  Task: a
    .model({
      name: a.string(),
      done: a.boolean(),
      dueDate: a.datetime(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
