module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2019,
        "sourceType": "module"
    },
    "extends": [
        'plugin:react/recommended',
    ],//定义文件继承的子规范
    "settings": {
        "react": {
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "detect"
        }
    },
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        // 代码风格
        "no-multi-spaces": 1, // 不能用多余的空格
        "indent": ["error", "tab"], // 使用tab缩进
        "jsx-quotes": ["error", "prefer-double"], // jsx属性引号
    }
};