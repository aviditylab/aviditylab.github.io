exports.onCreateBabelConfig = ({ actions }: {actions: any}) => {
    actions.setBabelPlugin({
      name: '@babel/plugin-transform-react-jsx',
      options: {
        runtime: 'automatic',
      },
    });
  };