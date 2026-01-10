
export class BigNum{
  input_str: string;
  data: Array<Number>;

  constructor(inp : string){
    this.input_str = inp;
    let num_size : number = inp.length;
    let arr_size : number = Math.ceil(num_size / 9);
  
    this.data = new Array(arr_size);
    let tail : number = num_size;
    let idx: number = 0;
    for (; tail > 0; tail -= 9, idx++){
      let head : number = Math.max(tail - 9, 0);
      let temp_num : number = parseInt(inp.slice(head, tail));
      this.data[idx] = temp_num;
    }
  }
  public output(){
    console.log(this.data)
  }
  public add(other : BigNum){

  } 
  // public sub
  // public mul
  // public mod
}

