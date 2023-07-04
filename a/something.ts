function functionReturningClass() {
  return class ClassInsideFunction {
    get r() {
      return 7;
    }
  };
}

class Something extends functionReturningClass() {
  override get r() {
    return 8;
  }
}

export default Something;
