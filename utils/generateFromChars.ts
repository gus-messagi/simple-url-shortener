const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generate(currentShortedUrl: String): String | Function {
  const generatedChar = chars.charAt(Math.floor(Math.random() * chars.length));

  currentShortedUrl += generatedChar;

  return currentShortedUrl.length !== 16 ? generate(currentShortedUrl) : currentShortedUrl;
}

export {
  generate
}