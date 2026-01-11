export const enum SIGN{
  NEGATIVE = -1,
  ZERO = 0,
  POSITIVE = 1
}

export function is_all_numeric(input_str : string){
  const rule = /^\d+$/;
  return rule.test(input_str);
}

export function is_zeros(input_str : string){
  const rule = /^0+$/;
  return rule.test(input_str);
}


export function check_sign(input_str : string){
  if (input_str[0] == '-'){
    
    return SIGN.NEGATIVE;
  }
  return SIGN.POSITIVE;
}