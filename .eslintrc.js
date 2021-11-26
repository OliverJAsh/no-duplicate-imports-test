const config = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/no-duplicate-imports": 2
    },
};

module.exports = config;
