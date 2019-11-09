class Hello {
  constructor() {
    this.hello = 'world';
  }
}

class Hi extends Hello {
  constructor() {
    super();
    this.hello = 'folks';
  }
}

module.exports = Hi;
