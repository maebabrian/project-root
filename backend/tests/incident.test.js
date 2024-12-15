const request = require('supertest');
const app = require('../app'); // Path to your Express app

describe('Incident API', () => {
  it('should create a new incident', async () => {
    const response = await request(app)
      .post('/api/incidents')
      .send({
        type: 'Fire',
        location: { lat: -1.286389, lng: 36.817223 },
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.type).toBe('Fire');
  });

  it('should fetch all incidents', async () => {
    const response = await request(app).get('/api/incidents');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
