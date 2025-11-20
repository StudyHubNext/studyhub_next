import mongoose from 'mongoose';
import { describe, it, expect, vi, afterEach, beforeEach, Mock } from 'vitest';

vi.mock('mongoose', () => ({
  default: {
    connect: vi.fn(),
  },
  Mongoose: vi.fn(),
}));

describe('lib/dbConnect', () => {
  beforeEach(() => {
    const globalCache = globalThis as typeof globalThis & {
      mongooseCache?: { conn: unknown; promise: unknown };
    };
    if (globalCache.mongooseCache) {
      globalCache.mongooseCache = { conn: null, promise: null };
    }

    process.env.MONGODB_URI = 'mongodb://localhost:27017/testdb';
  });

  afterEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it('MONGODB_URI 환경 변수가 없으면 에러를 던져야 합니다', async () => {
    const originalUri = process.env.MONGODB_URI;
    delete process.env.MONGODB_URI;

    await expect(import('../../utils/dbConnect')).rejects.toThrow(
      'Please define the MONGODB_URI environment variable inside .env.local',
    );

    process.env.MONGODB_URI = originalUri;
  });

  it('첫 호출 시 새로운 데이터베이스 연결을 생성해야 합니다', async () => {
    const mockConnection = { connection: 'mocked' };
    (mongoose.connect as Mock).mockResolvedValue(mockConnection);

    const dbConnect = (await import('../../utils/dbConnect')).default;
    const result = await dbConnect();

    expect(mongoose.connect).toHaveBeenCalledTimes(1);
    expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGODB_URI, {
      bufferCommands: false,
    });
    expect(result).toBe(mockConnection);
  });

  it('여러 번 호출되어도 기존 연결을 재사용해야 합니다 (캐싱)', async () => {
    const mockConnection = { connection: 'mocked' };
    (mongoose.connect as Mock).mockResolvedValue(mockConnection);

    const dbConnect = (await import('../../utils/dbConnect')).default;

    await dbConnect();
    await dbConnect();

    const result = await dbConnect();

    expect(mongoose.connect).toHaveBeenCalledTimes(1);
    expect(result).toBe(mockConnection);
  });
});
