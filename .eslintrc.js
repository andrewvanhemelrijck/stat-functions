// Eslint for React
module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-len": [1, 120, {"ignoreUrls": true}],
        "no-plusplus": 0,
        "prefer-template": 0,
        "no-use-before-define": 0,
        "react/jsx-filename-extension": [
            1,
            { "extensions": [".js", ".jsx"] }
        ],
        "import/no-named-as-default": 0
    }
};
