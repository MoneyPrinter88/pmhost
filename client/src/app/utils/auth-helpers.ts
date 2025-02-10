import * as crypto from 'crypto-js';

export const calculateSecretHash = (username: string): string => {
  const clientId = process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!;
  const clientSecret = process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET!;
  
  // Cognito requires the message to be USERNAME + CLIENT_ID
  const message = crypto.enc.Utf8.parse(username + clientId);
  const key = crypto.enc.Utf8.parse(clientSecret);
  
  const hmac = crypto.HmacSHA256(message, key);
  return crypto.enc.Base64.stringify(hmac);
};
