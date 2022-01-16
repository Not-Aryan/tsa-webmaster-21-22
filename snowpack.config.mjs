/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        "public": {
            url: "/",
        },
        "src": {
            url: "/dist",
        },
    },
    devOptions: {
        tailwindConfig: "./tailwind.config.js",
    },
    plugins: [
        "@snowpack/plugin-postcss"
    ],
    optimize: {
        bundle: true,
        minify: true,
        target: 'es2018',
    },
};
