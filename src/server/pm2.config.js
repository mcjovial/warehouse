module.exports = {
    apps: [
        {
            name: 'Warehouse',
            script: './dist/src/index.js',
            env_production: {
                NODE_ENV: "production"
            }
        },
    ],
};