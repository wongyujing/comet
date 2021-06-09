import { Stability } from '../core';

class JsError extends Stability {
  constructor() {
    super();
    console.log(this.category);
  }
}

export default JsError;