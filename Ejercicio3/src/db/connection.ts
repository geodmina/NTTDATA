import { Sequelize } from 'sequelize-cockroachdb';

const db = new Sequelize(process.env.DATABASE_URL || 'postgresql://geodmina:4VCiLXgeCn4YFrXqKgBoZA@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dblonde-spitz-1634');

export default db;