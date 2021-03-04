import { APIGatewayProxyEvent } from 'aws-lambda';
import { generate } from '../utils/generateFromChars';

const handler = async (event: APIGatewayProxyEvent) => {
  const { body } = event;

  const shortUrl = generate("");

  const parsedBody = JSON.parse(body || '');

  if (!parsedBody?.originalUrl) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Missing original Url'
      })
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      originalUrl: parsedBody.originalUrl,
      shortUrl,
      link: `${process.env.DOMAIN}/${shortUrl}`
    })
  }

  return response;
};

export {
  handler
}
