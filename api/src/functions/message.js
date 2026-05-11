const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Synthetic test function invoked');
        return { body: JSON.stringify({ "text": "Hello from the API!" }) };
    }
});