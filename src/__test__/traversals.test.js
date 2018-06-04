'use strict';

import Tree from '../lib/tree';
import Node from '../lib/node';
import inOrderTraversal from '../lib/traversal';

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const tree = new Tree(one);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

describe('#inOrderTraversal', () => {
  it('should return undefined if no tree', () => {
    const emptyTree = new Tree(null);
    expect(inOrderTraversal(emptyTree.root)).toEqual(undefined);
  });

  it('should return string of unbalanced tree', () => {
    expect(inOrderTraversal(tree.root)).toEqual('687921435');
  });

  it('should return string of balanced tree', () => {
    expect(typeof inOrderTraversal(tree.root)).toEqual('string');
  });
});
