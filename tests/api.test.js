const request = require('supertest');
const app = require('../server'); // Adjust if your structure is different

describe('Books API', () => {
    test('GET /api/books should return all books', async () => {
        const res = await request(app).get('/api/books');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
