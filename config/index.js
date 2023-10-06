require('dotenv').config();
const config = {
        storage: {
			dialect: 'postgres',
            timezone: '+05:30',
            collate: 'utf8_general_ci',
            username: process.env.NODE_DB_USER,
            password: process.env.NODE_DB_PASS,
            database: process.env.NODE_DB,
            host: process.env.NODE_DB_HOST,
            port: process.env.NODE_DB_PORT,
			pool: {
                max: 100,
                min: 0,
                idle: 10000,
                handleDisconnects: true,
            },
            retry: true,
            redis: {
                host: process.env.NODE_REDIS_HOST,
                port: process.env.NODE_REDIS_PORT,
                timeout: process.env.NODE_REDIS_TIMEOUT
            },
        },
	AWS: {
		accessKeyId: '',
		secretAccessKey: '',
		region: process.env.AWSREGION,
	},
	remotetimeout : '30',
};
module.exports = config;

