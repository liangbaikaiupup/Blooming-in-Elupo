module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // vue文件名
    // 'vue/multi-word-component-names': [
    //   'error',
    //   {
    //     ignores: ['index'],
    //   },
    // ],
    'vue/multi-word-component-names': 0,
    // any类型
    '@typescript-eslint/no-explicit-any': ['off'],
  }
}
