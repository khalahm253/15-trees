'use strict';

let tree = '';

const inOrderTraversal = (rootNode) => { 
  if (!rootNode) {
    return undefined;
  }

  inOrderTraversal(rootNode.left);
  tree += rootNode.value;
  inOrderTraversal(rootNode.right);

  console.log(tree);
  return tree;
};

export default inOrderTraversal;