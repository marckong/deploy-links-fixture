// Reports whether the visitor's key arrived. Never returns the key itself.
exports.handler = async () => {
  const key = process.env.OPENAI_API_KEY || '';
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ openai_api_key_set: key.length > 0, length: key.length }),
  };
};
