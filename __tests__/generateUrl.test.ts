import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../lambdas/GenerateUrl';

JSON.parse = jest.fn().mockImplementationOnce((params) => (params));

describe('Unit test for generateUrl', () => {
  it ('verifies if return correctly body', async () => {
    const event: APIGatewayProxyEvent = {
      body: {
        originalUrl: 'www.google.com'
      }
    } as any;

    const response = await handler(event);

    const shortUrl = response.body.replace(/\"/g, '').split(/[,:]/)[3];

    expect(response.statusCode).toBe(200);
    expect(shortUrl).toHaveLength(16);
  });

  it('return statusCode 400 if does not have originalUrl on request', async () => {
    const event: APIGatewayProxyEvent = {
      body: {}
    } as any;

    const response = await handler(event);

    expect(response.statusCode).toBe(400);
  })
});