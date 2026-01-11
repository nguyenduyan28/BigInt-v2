import {is_all_numeric, is_zeros, SIGN, check_sign} from "../utils/helper"

export class BigNum{
  private input_str: string;
  private data: number[]; // faster than Array<Number>
  private readonly CHUNK_DIGITS: number = 1;
  private SIGN: SIGN

  constructor(inp : string){
    // check for this string is valid

    if (inp.trim() == '' || !inp){
      throw new Error("The number cannot be empty");
    }
    inp = inp.trim();
    // check for sign



    // TODO: Check sign function 
    this.SIGN = check_sign(inp);

    // TODO: Check for zeros
    if (is_zeros(inp)){
      this.SIGN = SIGN.ZERO;
    }

    inp = inp.substring(1)

    if (!is_all_numeric(inp)){
      throw new Error("The number is not valid");
    }
    this.input_str = inp;
    let num_size : number = inp.length;
    let arr_size : number = Math.ceil(num_size / this.CHUNK_DIGITS);
  
    this.data = new Array(arr_size);
    let tail : number = num_size;
    let idx: number = 0;

    for (; tail > 0; tail -= this.CHUNK_DIGITS, idx++){
      let head : number = Math.max(tail - this.CHUNK_DIGITS, 0);
      let temp_num : number = parseInt(inp.slice(head, tail));
      this.data[idx] = temp_num;
    }
  }
  public output(){
    return [this.data, this.SIGN];
  }
  public add(other : BigNum){

  } 
  // public sub
  // public mul
  // public mod
}

