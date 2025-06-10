module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            connectionString: env('DATABASE_URL'),
            ssl: env.bool('DATABASE_SSL', false)
        },
        debug: env.bool('DATABASE_DEBUG', false),
        pool: { 
            min: env.int('DATABASE_POOL_MIN', 0),
            max: env.int('DATABASE_POOL_MAX', 7)
        },
    }
});
