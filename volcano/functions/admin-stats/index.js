// Reports whether the service key was granted. Never returns the key itself.
exports.handler = async () => ({
  statusCode: 200,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ service_key_granted: Boolean(process.env.VOLCANO_SERVICE_KEY) }),
});
