class Node {
  constructor(name) {
    this.name = name;
    this.innerHtml = "";
    this.child = [];
  }

  appendChild(node) {
    this.child.push(node);
  }
}

class VDocument extends Node {
  createElement(name) {
    return new Node(name);
  }

  render() {
    const INITIAL_SPACE = 4;
    function getSpaces(len) {
      return Array(len).fill(" ").join("");
    }

    function printTree(currNode, level) {
      let output = "";
      let spaces = getSpaces(level * INITIAL_SPACE);
      output = `${spaces}<${currNode.name}>\n`;
      if (currNode.innerHTML) {
        output += `${spaces}${getSpaces(2)}${currNode.innerHTML}\n`;
      }
      for (let i = 0; i < currNode.child.length; i++) {
        output += printTree(currNode.child[i], level + 1);
      }
      output += `${spaces}</${currNode.name}>\n`;
      return output;
    }
    let tree = printTree(this, 0);
    console.log(tree);
  }
}

const vDocument = new VDocument("html");
const body = vDocument.createElement("body");
const div = vDocument.createElement("div");

div.innerHTML = "Hello, I am a div!";
body.appendChild(div);
body.appendChild(div);
body.appendChild(div);
vDocument.appendChild(body);

// proper html structure
const html = vDocument.render();
