class BSTIterator{
  constructor(root){
    this.s= [];
    this.p= root;
  }

  next(){
    while(this.p){
        this.s.push(this.p);
        this.p= this.p.left;
    }
    let x= this.s.pop();
    this.p= x.right;
    return x.val;
  }

  hasNext(){
    return this.s.length>0||this.p!== null;
  }
}