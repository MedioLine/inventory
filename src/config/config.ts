// config/config.ts
export const config = {
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/inventory',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  };
  