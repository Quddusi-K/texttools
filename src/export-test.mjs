let a=123;
let b=392;
let c='jasl';

export default a;
export {b};
export {c};
 
// dz will export default value while b and c should be called with their original names-->

// import dz, {c,d} from './module2.mjs'