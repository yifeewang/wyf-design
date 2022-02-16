module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    rules: {
        "@typescript-eslint/no-this-alias": ["off"],
        "@typescript-eslint/no-shadow": ["off"],
        "no-param-reassign": [
            2,
            {
              "props": true,
              "ignorePropertyModificationsFor": [
                "el", // for el
                "evt", // for el
                "v", // for el
                "res", // for Express responses
                "item", // for Express responses
                "state" // for vuex state 解决assignment to property of function parameter ‘state‘
              ]
            }
        ]
    }
};
  