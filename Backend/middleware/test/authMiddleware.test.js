import authMiddleware from '../middleware/authMiddleware.js';
import jwt from 'jsonwebtoken';

jest.mock('jsonwebtoken'); // 🔁 This mocks jwt.verify()

describe('authMiddleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { headers: {}, body: {} };
    res = { json: jest.fn() };
    next = jest.fn();
  });

  test('❌ should return error if no token is provided', async () => {
    await authMiddleware(req, res, next);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Not Authorized, login again',
    });
    expect(next).not.toHaveBeenCalled();
  });

  test('✅ should call next() if valid token is provided', async () => {
    req.headers.token = 'valid_token';
    jwt.verify.mockReturnValue({ id: 'user123' });

    await authMiddleware(req, res, next);

    expect(req.body.userId).toBe('user123');
    expect(next).toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  test('❌ should return error if token is invalid', async () => {
    req.headers.token = 'invalid_token';
    jwt.verify.mockImplementation(() => { throw new Error('Invalid token') });

    await authMiddleware(req, res, next);

    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Error',
    });
    expect(next).not.toHaveBeenCalled();
  });
});
