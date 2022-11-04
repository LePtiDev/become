module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'plugin:prettier/recommended', '@vue/eslint-config-typescript'],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/no-mutating-props': 0,
    'vue/script-setup-uses-vars': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
}
