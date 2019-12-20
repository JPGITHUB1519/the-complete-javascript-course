export const name = 'square';


// With export default we can import thi by omitting the curly braces:
export default class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log('Drawing: ' + this.width + ' ' + this.height);
  }
}

export function test() {
  console.log('Testing Export function...');
}

//export { Square, test };