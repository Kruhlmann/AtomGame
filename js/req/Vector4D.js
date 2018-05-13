class Vector4D {
  constructor(a1, a2, a3, a4) {
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4
  }

  get r(){ return a1; }
  get g(){ return a2; }
  get b(){ return a3; }
  get a(){ return a4; }
  get repr() { return "rgba(" + this.a1 + ", "+ this.a2 + " ," + this.a3 + " ," + this.a4 + ")"; }

}