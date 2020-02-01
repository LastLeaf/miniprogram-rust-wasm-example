import { atob } from '../../polyfill';


  var scratchBuffer = new ArrayBuffer(8);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function legalimport$wasm2js_scratch_store_i64(low, high) {
    i32ScratchView[0] = low;
    i32ScratchView[1] = high;
  }
      
function asmFunc(global, env, buffer) {
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 var global$0 = 1048576;
 var i64toi32_i32$HIGH_BITS = 0;
 function dlmalloc__dlmalloc__Dlmalloc__malloc__h363feeec79793de2($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $6 = 0, $2 = 0, $3 = 0, $7 = 0, $8 = 0, $9 = 0, $5 = 0, $4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, $289 = 0, $346 = 0, $10 = 0, $10$hi = 0, $924 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     if ($1 >>> 0 < 245 >>> 0) {
      break label$3
     }
     $2 = 0;
     if ($1 >>> 0 >= -65587 >>> 0) {
      break label$1
     }
     $1 = $1 + 11 | 0;
     $3 = $1 & -8 | 0;
     $4 = HEAP32[($0 + 4 | 0) >> 2] | 0;
     if (!$4) {
      break label$2
     }
     $5 = 0;
     label$4 : {
      $1 = $1 >>> 8 | 0;
      if (!$1) {
       break label$4
      }
      $5 = 31;
      if ($3 >>> 0 > 16777215 >>> 0) {
       break label$4
      }
      $1 = Math_clz32($1);
      $5 = ((($3 >>> ((6 - $1 | 0) & 31 | 0) | 0) & 1 | 0) - ($1 << 1 | 0) | 0) + 62 | 0;
     }
     $2 = 0 - $3 | 0;
     label$5 : {
      label$6 : {
       label$7 : {
        $1 = HEAP32[(($0 + ($5 << 2 | 0) | 0) + 272 | 0) >> 2] | 0;
        if (!$1) {
         break label$7
        }
        $6 = 0;
        $7 = $3 << (($5 | 0) == (31 | 0) ? 0 : (25 - ($5 >>> 1 | 0) | 0) & 31 | 0) | 0;
        $8 = 0;
        label$8 : while (1) {
         label$9 : {
          $9 = (HEAP32[($1 + 4 | 0) >> 2] | 0) & -8 | 0;
          if ($9 >>> 0 < $3 >>> 0) {
           break label$9
          }
          $9 = $9 - $3 | 0;
          if ($9 >>> 0 >= $2 >>> 0) {
           break label$9
          }
          $2 = $9;
          $8 = $1;
          if ($2) {
           break label$9
          }
          $2 = 0;
          $8 = $1;
          break label$6;
         }
         $9 = HEAP32[($1 + 20 | 0) >> 2] | 0;
         $1 = HEAP32[(($1 + (($7 >>> 29 | 0) & 4 | 0) | 0) + 16 | 0) >> 2] | 0;
         $6 = $9 ? (($9 | 0) != ($1 | 0) ? $9 : $6) : $6;
         $7 = $7 << 1 | 0;
         if ($1) {
          continue label$8
         }
         break label$8;
        };
        label$10 : {
         if (!$6) {
          break label$10
         }
         $1 = $6;
         break label$6;
        }
        if ($8) {
         break label$5
        }
       }
       $8 = 0;
       $1 = 2 << ($5 & 31 | 0) | 0;
       $1 = ($1 | (0 - $1 | 0) | 0) & $4 | 0;
       if (!$1) {
        break label$2
       }
       $1 = HEAP32[(($0 + ((__wasm_ctz_i32($1 & (0 - $1 | 0) | 0 | 0) | 0) << 2 | 0) | 0) + 272 | 0) >> 2] | 0;
       if (!$1) {
        break label$2
       }
      }
      label$11 : while (1) {
       $6 = (HEAP32[($1 + 4 | 0) >> 2] | 0) & -8 | 0;
       $9 = $6 - $3 | 0;
       $7 = $6 >>> 0 >= $3 >>> 0 & $9 >>> 0 < $2 >>> 0 | 0;
       label$12 : {
        $6 = HEAP32[($1 + 16 | 0) >> 2] | 0;
        if ($6) {
         break label$12
        }
        $6 = HEAP32[($1 + 20 | 0) >> 2] | 0;
       }
       $8 = $7 ? $1 : $8;
       $2 = $7 ? $9 : $2;
       $1 = $6;
       if ($1) {
        continue label$11
       }
       break label$11;
      };
      if (!$8) {
       break label$2
      }
     }
     label$13 : {
      $1 = HEAP32[($0 + 400 | 0) >> 2] | 0;
      if ($1 >>> 0 < $3 >>> 0) {
       break label$13
      }
      if ($2 >>> 0 >= ($1 - $3 | 0) >>> 0) {
       break label$2
      }
     }
     dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__hafa48d776dcd75a2($0 | 0, $8 | 0);
     label$14 : {
      label$15 : {
       if ($2 >>> 0 < 16 >>> 0) {
        break label$15
       }
       HEAP32[($8 + 4 | 0) >> 2] = $3 | 3 | 0;
       $1 = $8 + $3 | 0;
       HEAP32[($1 + 4 | 0) >> 2] = $2 | 1 | 0;
       HEAP32[($1 + $2 | 0) >> 2] = $2;
       label$16 : {
        if ($2 >>> 0 < 256 >>> 0) {
         break label$16
        }
        dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h1fcac6f829185c8b($0 | 0, $1 | 0, $2 | 0);
        break label$14;
       }
       $2 = $2 >>> 3 | 0;
       $3 = ($0 + ($2 << 3 | 0) | 0) + 8 | 0;
       label$17 : {
        label$18 : {
         $6 = HEAP32[$0 >> 2] | 0;
         $2 = 1 << ($2 & 31 | 0) | 0;
         if (!($6 & $2 | 0)) {
          break label$18
         }
         $2 = HEAP32[($3 + 8 | 0) >> 2] | 0;
         break label$17;
        }
        HEAP32[$0 >> 2] = $6 | $2 | 0;
        $2 = $3;
       }
       HEAP32[($3 + 8 | 0) >> 2] = $1;
       HEAP32[($2 + 12 | 0) >> 2] = $1;
       HEAP32[($1 + 12 | 0) >> 2] = $3;
       HEAP32[($1 + 8 | 0) >> 2] = $2;
       break label$14;
      }
      $1 = $2 + $3 | 0;
      HEAP32[($8 + 4 | 0) >> 2] = $1 | 3 | 0;
      $1 = $8 + $1 | 0;
      HEAP32[($1 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0 | 1 | 0;
     }
     return $8 + 8 | 0 | 0;
    }
    label$19 : {
     label$20 : {
      label$21 : {
       $8 = HEAP32[$0 >> 2] | 0;
       $3 = $1 >>> 0 < 11 >>> 0 ? 16 : ($1 + 11 | 0) & -8 | 0;
       $2 = $3 >>> 3 | 0;
       $6 = $2 & 31 | 0;
       $1 = $8 >>> $6 | 0;
       if ($1 & 3 | 0) {
        break label$21
       }
       if ($3 >>> 0 <= (HEAP32[($0 + 400 | 0) >> 2] | 0) >>> 0) {
        break label$2
       }
       if ($1) {
        break label$20
       }
       $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
       if (!$1) {
        break label$2
       }
       $6 = HEAP32[(($0 + ((__wasm_ctz_i32($1 & (0 - $1 | 0) | 0 | 0) | 0) << 2 | 0) | 0) + 272 | 0) >> 2] | 0;
       $2 = ((HEAP32[($6 + 4 | 0) >> 2] | 0) & -8 | 0) - $3 | 0;
       $7 = $6;
       label$22 : while (1) {
        label$23 : {
         $1 = HEAP32[($6 + 16 | 0) >> 2] | 0;
         if ($1) {
          break label$23
         }
         $1 = HEAP32[($6 + 20 | 0) >> 2] | 0;
         if (!$1) {
          break label$19
         }
        }
        $6 = ((HEAP32[($1 + 4 | 0) >> 2] | 0) & -8 | 0) - $3 | 0;
        $289 = $6;
        $6 = $6 >>> 0 < $2 >>> 0;
        $2 = $6 ? $289 : $2;
        $7 = $6 ? $1 : $7;
        $6 = $1;
        continue label$22;
       };
      }
      $3 = (($1 ^ -1 | 0) & 1 | 0) + $2 | 0;
      $7 = $0 + ($3 << 3 | 0) | 0;
      $1 = HEAP32[($7 + 16 | 0) >> 2] | 0;
      $2 = $1 + 8 | 0;
      label$24 : {
       label$25 : {
        $6 = HEAP32[($1 + 8 | 0) >> 2] | 0;
        $7 = $7 + 8 | 0;
        if (($6 | 0) == ($7 | 0)) {
         break label$25
        }
        HEAP32[($6 + 12 | 0) >> 2] = $7;
        HEAP32[($7 + 8 | 0) >> 2] = $6;
        break label$24;
       }
       (wasm2js_i32$0 = $0, wasm2js_i32$1 = $8 & (__wasm_rotl_i32(-2 | 0, $3 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
      }
      $3 = $3 << 3 | 0;
      HEAP32[($1 + 4 | 0) >> 2] = $3 | 3 | 0;
      $1 = $1 + $3 | 0;
      HEAP32[($1 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0 | 1 | 0;
      break label$1;
     }
     label$26 : {
      label$27 : {
       $346 = $1 << $6 | 0;
       $1 = 2 << $6 | 0;
       $1 = $346 & ($1 | (0 - $1 | 0) | 0) | 0;
       $2 = __wasm_ctz_i32($1 & (0 - $1 | 0) | 0 | 0) | 0;
       $7 = $0 + ($2 << 3 | 0) | 0;
       $1 = HEAP32[($7 + 16 | 0) >> 2] | 0;
       $6 = HEAP32[($1 + 8 | 0) >> 2] | 0;
       $7 = $7 + 8 | 0;
       if (($6 | 0) == ($7 | 0)) {
        break label$27
       }
       HEAP32[($6 + 12 | 0) >> 2] = $7;
       HEAP32[($7 + 8 | 0) >> 2] = $6;
       break label$26;
      }
      (wasm2js_i32$0 = $0, wasm2js_i32$1 = $8 & (__wasm_rotl_i32(-2 | 0, $2 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
     }
     $6 = $1 + 8 | 0;
     HEAP32[($1 + 4 | 0) >> 2] = $3 | 3 | 0;
     $7 = $1 + $3 | 0;
     $2 = $2 << 3 | 0;
     $3 = $2 - $3 | 0;
     HEAP32[($7 + 4 | 0) >> 2] = $3 | 1 | 0;
     HEAP32[($1 + $2 | 0) >> 2] = $3;
     label$28 : {
      $1 = HEAP32[($0 + 400 | 0) >> 2] | 0;
      if (!$1) {
       break label$28
      }
      $8 = $1 >>> 3 | 0;
      $2 = ($0 + ($8 << 3 | 0) | 0) + 8 | 0;
      $1 = HEAP32[($0 + 408 | 0) >> 2] | 0;
      label$29 : {
       label$30 : {
        $9 = HEAP32[$0 >> 2] | 0;
        $8 = 1 << ($8 & 31 | 0) | 0;
        if (!($9 & $8 | 0)) {
         break label$30
        }
        $8 = HEAP32[($2 + 8 | 0) >> 2] | 0;
        break label$29;
       }
       HEAP32[$0 >> 2] = $9 | $8 | 0;
       $8 = $2;
      }
      HEAP32[($2 + 8 | 0) >> 2] = $1;
      HEAP32[($8 + 12 | 0) >> 2] = $1;
      HEAP32[($1 + 12 | 0) >> 2] = $2;
      HEAP32[($1 + 8 | 0) >> 2] = $8;
     }
     HEAP32[($0 + 408 | 0) >> 2] = $7;
     HEAP32[($0 + 400 | 0) >> 2] = $3;
     return $6 | 0;
    }
    dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__hafa48d776dcd75a2($0 | 0, $7 | 0);
    label$31 : {
     label$32 : {
      if ($2 >>> 0 < 16 >>> 0) {
       break label$32
      }
      HEAP32[($7 + 4 | 0) >> 2] = $3 | 3 | 0;
      $3 = $7 + $3 | 0;
      HEAP32[($3 + 4 | 0) >> 2] = $2 | 1 | 0;
      HEAP32[($3 + $2 | 0) >> 2] = $2;
      label$33 : {
       $1 = HEAP32[($0 + 400 | 0) >> 2] | 0;
       if (!$1) {
        break label$33
       }
       $8 = $1 >>> 3 | 0;
       $6 = ($0 + ($8 << 3 | 0) | 0) + 8 | 0;
       $1 = HEAP32[($0 + 408 | 0) >> 2] | 0;
       label$34 : {
        label$35 : {
         $9 = HEAP32[$0 >> 2] | 0;
         $8 = 1 << ($8 & 31 | 0) | 0;
         if (!($9 & $8 | 0)) {
          break label$35
         }
         $8 = HEAP32[($6 + 8 | 0) >> 2] | 0;
         break label$34;
        }
        HEAP32[$0 >> 2] = $9 | $8 | 0;
        $8 = $6;
       }
       HEAP32[($6 + 8 | 0) >> 2] = $1;
       HEAP32[($8 + 12 | 0) >> 2] = $1;
       HEAP32[($1 + 12 | 0) >> 2] = $6;
       HEAP32[($1 + 8 | 0) >> 2] = $8;
      }
      HEAP32[($0 + 408 | 0) >> 2] = $3;
      HEAP32[($0 + 400 | 0) >> 2] = $2;
      break label$31;
     }
     $1 = $2 + $3 | 0;
     HEAP32[($7 + 4 | 0) >> 2] = $1 | 3 | 0;
     $1 = $7 + $1 | 0;
     HEAP32[($1 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0 | 1 | 0;
    }
    return $7 + 8 | 0 | 0;
   }
   label$36 : {
    label$37 : {
     label$38 : {
      label$39 : {
       label$40 : {
        label$41 : {
         $2 = HEAP32[($0 + 400 | 0) >> 2] | 0;
         if ($2 >>> 0 >= $3 >>> 0) {
          break label$41
         }
         $1 = HEAP32[($0 + 404 | 0) >> 2] | 0;
         if ($1 >>> 0 > $3 >>> 0) {
          break label$38
         }
         $2 = 0;
         $6 = $3 + 65583 | 0;
         $1 = __wasm_memory_grow($6 >>> 16 | 0 | 0);
         if (($1 | 0) == (-1 | 0)) {
          break label$1
         }
         $8 = $1 << 16 | 0;
         if (!$8) {
          break label$1
         }
         $5 = $6 & -65536 | 0;
         $1 = (HEAP32[($0 + 416 | 0) >> 2] | 0) + $5 | 0;
         HEAP32[($0 + 416 | 0) >> 2] = $1;
         $6 = HEAP32[($0 + 420 | 0) >> 2] | 0;
         HEAP32[($0 + 420 | 0) >> 2] = $6 >>> 0 > $1 >>> 0 ? $6 : $1;
         $6 = HEAP32[($0 + 412 | 0) >> 2] | 0;
         if (!$6) {
          break label$40
         }
         $4 = $0 + 424 | 0;
         $1 = $4;
         label$42 : while (1) {
          $7 = HEAP32[$1 >> 2] | 0;
          $9 = HEAP32[($1 + 4 | 0) >> 2] | 0;
          if (($7 + $9 | 0 | 0) == ($8 | 0)) {
           break label$39
          }
          $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
          if ($1) {
           continue label$42
          }
          break label$37;
         };
        }
        $1 = HEAP32[($0 + 408 | 0) >> 2] | 0;
        label$43 : {
         label$44 : {
          $6 = $2 - $3 | 0;
          if ($6 >>> 0 > 15 >>> 0) {
           break label$44
          }
          HEAP32[($0 + 408 | 0) >> 2] = 0;
          HEAP32[($0 + 400 | 0) >> 2] = 0;
          HEAP32[($1 + 4 | 0) >> 2] = $2 | 3 | 0;
          $2 = $1 + $2 | 0;
          $3 = $2 + 4 | 0;
          $2 = HEAP32[($2 + 4 | 0) >> 2] | 0 | 1 | 0;
          break label$43;
         }
         HEAP32[($0 + 400 | 0) >> 2] = $6;
         $7 = $1 + $3 | 0;
         HEAP32[($0 + 408 | 0) >> 2] = $7;
         HEAP32[($7 + 4 | 0) >> 2] = $6 | 1 | 0;
         HEAP32[($1 + $2 | 0) >> 2] = $6;
         $2 = $3 | 3 | 0;
         $3 = $1 + 4 | 0;
        }
        HEAP32[$3 >> 2] = $2;
        return $1 + 8 | 0 | 0;
       }
       label$45 : {
        label$46 : {
         $1 = HEAP32[($0 + 444 | 0) >> 2] | 0;
         if (!$1) {
          break label$46
         }
         if ($1 >>> 0 <= $8 >>> 0) {
          break label$45
         }
        }
        HEAP32[($0 + 444 | 0) >> 2] = $8;
       }
       HEAP32[($0 + 448 | 0) >> 2] = 4095;
       HEAP32[($0 + 424 | 0) >> 2] = $8;
       $1 = 0;
       HEAP32[($0 + 436 | 0) >> 2] = 0;
       HEAP32[($0 + 428 | 0) >> 2] = $5;
       label$47 : while (1) {
        $6 = $0 + $1 | 0;
        $7 = $6 + 8 | 0;
        HEAP32[($6 + 16 | 0) >> 2] = $7;
        HEAP32[($6 + 20 | 0) >> 2] = $7;
        $1 = $1 + 8 | 0;
        if (($1 | 0) != (256 | 0)) {
         continue label$47
        }
        break label$47;
       };
       HEAP32[($0 + 412 | 0) >> 2] = $8;
       $1 = $5 + -40 | 0;
       HEAP32[($0 + 404 | 0) >> 2] = $1;
       HEAP32[($8 + 4 | 0) >> 2] = $1 | 1 | 0;
       HEAP32[(($8 + $1 | 0) + 4 | 0) >> 2] = 40;
       HEAP32[($0 + 440 | 0) >> 2] = 2097152;
       break label$36;
      }
      if (HEAP32[($1 + 12 | 0) >> 2] | 0) {
       break label$37
      }
      if ($8 >>> 0 <= $6 >>> 0) {
       break label$37
      }
      if ($7 >>> 0 > $6 >>> 0) {
       break label$37
      }
      HEAP32[($1 + 4 | 0) >> 2] = $9 + $5 | 0;
      $1 = HEAP32[($0 + 412 | 0) >> 2] | 0;
      $6 = ($1 + 15 | 0) & -8 | 0;
      HEAP32[($0 + 412 | 0) >> 2] = $6 + -8 | 0;
      $7 = (HEAP32[($0 + 404 | 0) >> 2] | 0) + $5 | 0;
      $8 = (($1 - $6 | 0) + $7 | 0) + 8 | 0;
      HEAP32[($0 + 404 | 0) >> 2] = $8;
      HEAP32[($6 + -4 | 0) >> 2] = $8 | 1 | 0;
      HEAP32[(($1 + $7 | 0) + 4 | 0) >> 2] = 40;
      HEAP32[($0 + 440 | 0) >> 2] = 2097152;
      break label$36;
     }
     $2 = $1 - $3 | 0;
     HEAP32[($0 + 404 | 0) >> 2] = $2;
     $1 = HEAP32[($0 + 412 | 0) >> 2] | 0;
     $6 = $1 + $3 | 0;
     HEAP32[($0 + 412 | 0) >> 2] = $6;
     HEAP32[($6 + 4 | 0) >> 2] = $2 | 1 | 0;
     HEAP32[($1 + 4 | 0) >> 2] = $3 | 3 | 0;
     return $1 + 8 | 0 | 0;
    }
    $1 = HEAP32[($0 + 444 | 0) >> 2] | 0;
    HEAP32[($0 + 444 | 0) >> 2] = $1 >>> 0 < $8 >>> 0 ? $1 : $8;
    $7 = $8 + $5 | 0;
    $1 = $4;
    label$48 : {
     label$49 : {
      label$50 : while (1) {
       if ((HEAP32[$1 >> 2] | 0 | 0) == ($7 | 0)) {
        break label$49
       }
       $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
       if ($1) {
        continue label$50
       }
       break label$48;
      };
     }
     if (HEAP32[($1 + 12 | 0) >> 2] | 0) {
      break label$48
     }
     HEAP32[$1 >> 2] = $8;
     HEAP32[($1 + 4 | 0) >> 2] = (HEAP32[($1 + 4 | 0) >> 2] | 0) + $5 | 0;
     HEAP32[($8 + 4 | 0) >> 2] = $3 | 3 | 0;
     $1 = $8 + $3 | 0;
     $3 = ($7 - $8 | 0) - $3 | 0;
     label$51 : {
      label$52 : {
       label$53 : {
        if ((HEAP32[($0 + 412 | 0) >> 2] | 0 | 0) == ($7 | 0)) {
         break label$53
        }
        if ((HEAP32[($0 + 408 | 0) >> 2] | 0 | 0) == ($7 | 0)) {
         break label$52
        }
        label$54 : {
         $2 = HEAP32[($7 + 4 | 0) >> 2] | 0;
         if (($2 & 3 | 0 | 0) != (1 | 0)) {
          break label$54
         }
         label$55 : {
          label$56 : {
           $6 = $2 & -8 | 0;
           if ($6 >>> 0 < 256 >>> 0) {
            break label$56
           }
           dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__hafa48d776dcd75a2($0 | 0, $7 | 0);
           break label$55;
          }
          label$57 : {
           $9 = HEAP32[($7 + 12 | 0) >> 2] | 0;
           $5 = HEAP32[($7 + 8 | 0) >> 2] | 0;
           if (($9 | 0) == ($5 | 0)) {
            break label$57
           }
           HEAP32[($5 + 12 | 0) >> 2] = $9;
           HEAP32[($9 + 8 | 0) >> 2] = $5;
           break label$55;
          }
          (wasm2js_i32$0 = $0, wasm2js_i32$1 = (HEAP32[$0 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $2 >>> 3 | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
         }
         $3 = $6 + $3 | 0;
         $7 = $7 + $6 | 0;
        }
        HEAP32[($7 + 4 | 0) >> 2] = (HEAP32[($7 + 4 | 0) >> 2] | 0) & -2 | 0;
        HEAP32[($1 + 4 | 0) >> 2] = $3 | 1 | 0;
        HEAP32[($1 + $3 | 0) >> 2] = $3;
        label$58 : {
         if ($3 >>> 0 < 256 >>> 0) {
          break label$58
         }
         dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h1fcac6f829185c8b($0 | 0, $1 | 0, $3 | 0);
         break label$51;
        }
        $2 = $3 >>> 3 | 0;
        $3 = ($0 + ($2 << 3 | 0) | 0) + 8 | 0;
        label$59 : {
         label$60 : {
          $6 = HEAP32[$0 >> 2] | 0;
          $2 = 1 << ($2 & 31 | 0) | 0;
          if (!($6 & $2 | 0)) {
           break label$60
          }
          $2 = HEAP32[($3 + 8 | 0) >> 2] | 0;
          break label$59;
         }
         HEAP32[$0 >> 2] = $6 | $2 | 0;
         $2 = $3;
        }
        HEAP32[($3 + 8 | 0) >> 2] = $1;
        HEAP32[($2 + 12 | 0) >> 2] = $1;
        HEAP32[($1 + 12 | 0) >> 2] = $3;
        HEAP32[($1 + 8 | 0) >> 2] = $2;
        break label$51;
       }
       HEAP32[($0 + 412 | 0) >> 2] = $1;
       $3 = (HEAP32[($0 + 404 | 0) >> 2] | 0) + $3 | 0;
       HEAP32[($0 + 404 | 0) >> 2] = $3;
       HEAP32[($1 + 4 | 0) >> 2] = $3 | 1 | 0;
       break label$51;
      }
      HEAP32[($0 + 408 | 0) >> 2] = $1;
      $3 = (HEAP32[($0 + 400 | 0) >> 2] | 0) + $3 | 0;
      HEAP32[($0 + 400 | 0) >> 2] = $3;
      HEAP32[($1 + 4 | 0) >> 2] = $3 | 1 | 0;
      HEAP32[($1 + $3 | 0) >> 2] = $3;
     }
     return $8 + 8 | 0 | 0;
    }
    $1 = $4;
    label$61 : {
     label$62 : while (1) {
      label$63 : {
       $7 = HEAP32[$1 >> 2] | 0;
       if ($7 >>> 0 > $6 >>> 0) {
        break label$63
       }
       $7 = $7 + (HEAP32[($1 + 4 | 0) >> 2] | 0) | 0;
       if ($7 >>> 0 > $6 >>> 0) {
        break label$61
       }
      }
      $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
      continue label$62;
     };
    }
    HEAP32[($0 + 412 | 0) >> 2] = $8;
    $1 = $5 + -40 | 0;
    HEAP32[($0 + 404 | 0) >> 2] = $1;
    HEAP32[($8 + 4 | 0) >> 2] = $1 | 1 | 0;
    HEAP32[(($8 + $1 | 0) + 4 | 0) >> 2] = 40;
    HEAP32[($0 + 440 | 0) >> 2] = 2097152;
    $1 = (($7 + -32 | 0) & -8 | 0) + -8 | 0;
    $9 = $1 >>> 0 < ($6 + 16 | 0) >>> 0 ? $6 : $1;
    HEAP32[($9 + 4 | 0) >> 2] = 27;
    i64toi32_i32$2 = $4;
    i64toi32_i32$0 = HEAP32[$4 >> 2] | 0;
    i64toi32_i32$1 = HEAP32[($4 + 4 | 0) >> 2] | 0;
    $10 = i64toi32_i32$0;
    $10$hi = i64toi32_i32$1;
    i64toi32_i32$2 = $4 + 8 | 0;
    i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
    i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
    $924 = i64toi32_i32$1;
    i64toi32_i32$1 = $9 + 16 | 0;
    HEAP32[i64toi32_i32$1 >> 2] = $924;
    HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
    i64toi32_i32$0 = $10$hi;
    i64toi32_i32$1 = $9;
    HEAP32[($9 + 8 | 0) >> 2] = $10;
    HEAP32[($9 + 12 | 0) >> 2] = i64toi32_i32$0;
    HEAP32[($0 + 436 | 0) >> 2] = 0;
    HEAP32[($0 + 428 | 0) >> 2] = $5;
    HEAP32[($0 + 424 | 0) >> 2] = $8;
    HEAP32[($0 + 432 | 0) >> 2] = $9 + 8 | 0;
    $1 = $9 + 28 | 0;
    label$64 : while (1) {
     HEAP32[$1 >> 2] = 7;
     $1 = $1 + 4 | 0;
     if ($7 >>> 0 > $1 >>> 0) {
      continue label$64
     }
     break label$64;
    };
    if (($9 | 0) == ($6 | 0)) {
     break label$36
    }
    HEAP32[($9 + 4 | 0) >> 2] = (HEAP32[($9 + 4 | 0) >> 2] | 0) & -2 | 0;
    $1 = $9 - $6 | 0;
    HEAP32[($6 + 4 | 0) >> 2] = $1 | 1 | 0;
    HEAP32[$9 >> 2] = $1;
    label$65 : {
     if ($1 >>> 0 < 256 >>> 0) {
      break label$65
     }
     dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h1fcac6f829185c8b($0 | 0, $6 | 0, $1 | 0);
     break label$36;
    }
    $7 = $1 >>> 3 | 0;
    $1 = ($0 + ($7 << 3 | 0) | 0) + 8 | 0;
    label$66 : {
     label$67 : {
      $8 = HEAP32[$0 >> 2] | 0;
      $7 = 1 << ($7 & 31 | 0) | 0;
      if (!($8 & $7 | 0)) {
       break label$67
      }
      $7 = HEAP32[($1 + 8 | 0) >> 2] | 0;
      break label$66;
     }
     HEAP32[$0 >> 2] = $8 | $7 | 0;
     $7 = $1;
    }
    HEAP32[($1 + 8 | 0) >> 2] = $6;
    HEAP32[($7 + 12 | 0) >> 2] = $6;
    HEAP32[($6 + 12 | 0) >> 2] = $1;
    HEAP32[($6 + 8 | 0) >> 2] = $7;
   }
   $1 = HEAP32[($0 + 404 | 0) >> 2] | 0;
   if ($1 >>> 0 <= $3 >>> 0) {
    break label$1
   }
   $2 = $1 - $3 | 0;
   HEAP32[($0 + 404 | 0) >> 2] = $2;
   $1 = HEAP32[($0 + 412 | 0) >> 2] | 0;
   $6 = $1 + $3 | 0;
   HEAP32[($0 + 412 | 0) >> 2] = $6;
   HEAP32[($6 + 4 | 0) >> 2] = $2 | 1 | 0;
   HEAP32[($1 + 4 | 0) >> 2] = $3 | 3 | 0;
   return $1 + 8 | 0 | 0;
  }
  return $2 | 0;
 }
 
 function core__fmt__write__h1f444f4312eb6c27($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0, $7 = 0, $6 = 0, $8 = 0, $9 = 0, $10 = 0;
  $3 = global$0 - 64 | 0;
  global$0 = $3;
  HEAP32[($3 + 36 | 0) >> 2] = $1;
  $4 = HEAP32[($2 + 20 | 0) >> 2] | 0;
  HEAP32[($3 + 52 | 0) >> 2] = $4;
  HEAP8[($3 + 56 | 0) >> 0] = 3;
  $5 = HEAP32[($2 + 16 | 0) >> 2] | 0;
  HEAP32[($3 + 44 | 0) >> 2] = $5 + ($4 << 3 | 0) | 0;
  HEAP32[($3 + 8 | 0) >> 2] = 0;
  HEAP32[($3 + 12 | 0) >> 2] = 32;
  HEAP32[($3 + 32 | 0) >> 2] = $0;
  $6 = 0;
  HEAP32[($3 + 24 | 0) >> 2] = 0;
  HEAP32[($3 + 16 | 0) >> 2] = 0;
  HEAP32[($3 + 48 | 0) >> 2] = $5;
  HEAP32[($3 + 40 | 0) >> 2] = $5;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       $7 = HEAP32[($2 + 8 | 0) >> 2] | 0;
       if ($7) {
        break label$5
       }
       $8 = HEAP32[$2 >> 2] | 0;
       $9 = HEAP32[($2 + 4 | 0) >> 2] | 0;
       $10 = $4 >>> 0 > $9 >>> 0 ? $9 : $4;
       if (!$10) {
        break label$4
       }
       $4 = 1;
       if (FUNCTION_TABLE[HEAP32[($1 + 12 | 0) >> 2] | 0]($0, HEAP32[$8 >> 2] | 0, HEAP32[($8 + 4 | 0) >> 2] | 0) | 0) {
        break label$1
       }
       $2 = $8 + 12 | 0;
       $6 = 1;
       label$6 : while (1) {
        label$7 : {
         if (!(FUNCTION_TABLE[HEAP32[($5 + 4 | 0) >> 2] | 0](HEAP32[$5 >> 2] | 0, $3 + 8 | 0) | 0)) {
          break label$7
         }
         $4 = 1;
         break label$1;
        }
        if ($6 >>> 0 >= $10 >>> 0) {
         break label$4
        }
        $0 = $2 + -4 | 0;
        $1 = HEAP32[$2 >> 2] | 0;
        $2 = $2 + 8 | 0;
        $5 = $5 + 8 | 0;
        $4 = 1;
        $6 = $6 + 1 | 0;
        if (!(FUNCTION_TABLE[HEAP32[((HEAP32[($3 + 36 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0](HEAP32[($3 + 32 | 0) >> 2] | 0, HEAP32[$0 >> 2] | 0, $1) | 0)) {
         continue label$6
        }
        break label$1;
       };
      }
      $8 = HEAP32[$2 >> 2] | 0;
      $9 = HEAP32[($2 + 4 | 0) >> 2] | 0;
      $5 = HEAP32[($2 + 12 | 0) >> 2] | 0;
      $10 = $5 >>> 0 > $9 >>> 0 ? $9 : $5;
      if (!$10) {
       break label$4
      }
      $4 = 1;
      if (FUNCTION_TABLE[HEAP32[($1 + 12 | 0) >> 2] | 0]($0, HEAP32[$8 >> 2] | 0, HEAP32[($8 + 4 | 0) >> 2] | 0) | 0) {
       break label$1
      }
      $2 = $8 + 12 | 0;
      $5 = $7 + 16 | 0;
      $6 = 1;
      label$8 : while (1) {
       HEAP32[($3 + 12 | 0) >> 2] = HEAP32[($5 + -8 | 0) >> 2] | 0;
       HEAP8[($3 + 56 | 0) >> 0] = HEAPU8[($5 + 16 | 0) >> 0] | 0;
       HEAP32[($3 + 8 | 0) >> 2] = HEAP32[($5 + -4 | 0) >> 2] | 0;
       $1 = 0;
       $4 = 0;
       label$9 : {
        label$10 : {
         switch (HEAP32[($5 + 8 | 0) >> 2] | 0 | 0) {
         default:
          $0 = HEAP32[($5 + 12 | 0) >> 2] | 0;
          $4 = 1;
          break label$9;
         case 1:
          label$13 : {
           $7 = HEAP32[($5 + 12 | 0) >> 2] | 0;
           $4 = HEAP32[($3 + 52 | 0) >> 2] | 0;
           if ($7 >>> 0 >= $4 >>> 0) {
            break label$13
           }
           $4 = 0;
           $7 = (HEAP32[($3 + 48 | 0) >> 2] | 0) + ($7 << 3 | 0) | 0;
           if ((HEAP32[($7 + 4 | 0) >> 2] | 0 | 0) != (17 | 0)) {
            break label$9
           }
           $0 = HEAP32[(HEAP32[$7 >> 2] | 0) >> 2] | 0;
           $4 = 1;
           break label$9;
          }
          core__panicking__panic_bounds_check__h48b559825fef6c92(1049640 | 0, $7 | 0, $4 | 0);
          abort();
         case 2:
          break label$10;
         case 3:
          break label$9;
         };
        }
        $4 = 0;
        $7 = HEAP32[($3 + 40 | 0) >> 2] | 0;
        if (($7 | 0) == (HEAP32[($3 + 44 | 0) >> 2] | 0 | 0)) {
         break label$9
        }
        HEAP32[($3 + 40 | 0) >> 2] = $7 + 8 | 0;
        $4 = 0;
        if ((HEAP32[($7 + 4 | 0) >> 2] | 0 | 0) != (17 | 0)) {
         break label$9
        }
        $0 = HEAP32[(HEAP32[$7 >> 2] | 0) >> 2] | 0;
        $4 = 1;
       }
       HEAP32[($3 + 20 | 0) >> 2] = $0;
       HEAP32[($3 + 16 | 0) >> 2] = $4;
       label$14 : {
        label$15 : {
         label$16 : {
          label$17 : {
           label$18 : {
            label$19 : {
             switch (HEAP32[$5 >> 2] | 0 | 0) {
             case 2:
              $0 = HEAP32[($3 + 40 | 0) >> 2] | 0;
              if (($0 | 0) != (HEAP32[($3 + 44 | 0) >> 2] | 0 | 0)) {
               break label$18
              }
              break label$14;
             case 3:
              break label$14;
             case 1:
              break label$19;
             default:
              break label$16;
             };
            }
            $0 = HEAP32[($5 + 4 | 0) >> 2] | 0;
            $4 = HEAP32[($3 + 52 | 0) >> 2] | 0;
            if ($0 >>> 0 >= $4 >>> 0) {
             break label$17
            }
            $0 = (HEAP32[($3 + 48 | 0) >> 2] | 0) + ($0 << 3 | 0) | 0;
            if ((HEAP32[($0 + 4 | 0) >> 2] | 0 | 0) != (17 | 0)) {
             break label$14
            }
            $4 = HEAP32[(HEAP32[$0 >> 2] | 0) >> 2] | 0;
            break label$15;
           }
           HEAP32[($3 + 40 | 0) >> 2] = $0 + 8 | 0;
           if ((HEAP32[($0 + 4 | 0) >> 2] | 0 | 0) != (17 | 0)) {
            break label$14
           }
           $4 = HEAP32[(HEAP32[$0 >> 2] | 0) >> 2] | 0;
           break label$15;
          }
          core__panicking__panic_bounds_check__h48b559825fef6c92(1049640 | 0, $0 | 0, $4 | 0);
          abort();
         }
         $4 = HEAP32[($5 + 4 | 0) >> 2] | 0;
        }
        $1 = 1;
       }
       HEAP32[($3 + 28 | 0) >> 2] = $4;
       HEAP32[($3 + 24 | 0) >> 2] = $1;
       label$21 : {
        label$22 : {
         if ((HEAP32[($5 + -16 | 0) >> 2] | 0 | 0) == (1 | 0)) {
          break label$22
         }
         $4 = HEAP32[($3 + 40 | 0) >> 2] | 0;
         if (($4 | 0) == (HEAP32[($3 + 44 | 0) >> 2] | 0 | 0)) {
          break label$3
         }
         HEAP32[($3 + 40 | 0) >> 2] = $4 + 8 | 0;
         break label$21;
        }
        $4 = HEAP32[($5 + -12 | 0) >> 2] | 0;
        $0 = HEAP32[($3 + 52 | 0) >> 2] | 0;
        if ($4 >>> 0 >= $0 >>> 0) {
         break label$2
        }
        $4 = (HEAP32[($3 + 48 | 0) >> 2] | 0) + ($4 << 3 | 0) | 0;
       }
       label$23 : {
        if (!(FUNCTION_TABLE[HEAP32[($4 + 4 | 0) >> 2] | 0](HEAP32[$4 >> 2] | 0, $3 + 8 | 0) | 0)) {
         break label$23
        }
        $4 = 1;
        break label$1;
       }
       if ($6 >>> 0 >= $10 >>> 0) {
        break label$4
       }
       $0 = $2 + -4 | 0;
       $1 = HEAP32[$2 >> 2] | 0;
       $2 = $2 + 8 | 0;
       $5 = $5 + 36 | 0;
       $4 = 1;
       $6 = $6 + 1 | 0;
       if (!(FUNCTION_TABLE[HEAP32[((HEAP32[($3 + 36 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0](HEAP32[($3 + 32 | 0) >> 2] | 0, HEAP32[$0 >> 2] | 0, $1) | 0)) {
        continue label$8
       }
       break label$1;
      };
     }
     label$24 : {
      if ($9 >>> 0 <= $6 >>> 0) {
       break label$24
      }
      $4 = 1;
      $5 = $8 + ($6 << 3 | 0) | 0;
      if (FUNCTION_TABLE[HEAP32[((HEAP32[($3 + 36 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0](HEAP32[($3 + 32 | 0) >> 2] | 0, HEAP32[$5 >> 2] | 0, HEAP32[($5 + 4 | 0) >> 2] | 0) | 0) {
       break label$1
      }
     }
     $4 = 0;
     break label$1;
    }
    core__panicking__panic__hb5daa85c7c72fc62(1049228 | 0, 43 | 0, 1049292 | 0);
    abort();
   }
   core__panicking__panic_bounds_check__h48b559825fef6c92(1049624 | 0, $4 | 0, $0 | 0);
   abort();
  }
  global$0 = $3 + 64 | 0;
  return $4 | 0;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__free__h57aed881a8c806e8($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $3 = 0, $5 = 0, $6 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $2 = $1 + -8 | 0;
  $3 = HEAP32[($1 + -4 | 0) >> 2] | 0;
  $1 = $3 & -8 | 0;
  $4 = $2 + $1 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if ($3 & 1 | 0) {
       break label$4
      }
      if (!($3 & 3 | 0)) {
       break label$3
      }
      $3 = HEAP32[$2 >> 2] | 0;
      $1 = $3 + $1 | 0;
      label$5 : {
       $2 = $2 - $3 | 0;
       if ((HEAP32[($0 + 408 | 0) >> 2] | 0 | 0) != ($2 | 0)) {
        break label$5
       }
       if (((HEAP32[($4 + 4 | 0) >> 2] | 0) & 3 | 0 | 0) != (3 | 0)) {
        break label$4
       }
       HEAP32[($0 + 400 | 0) >> 2] = $1;
       HEAP32[($4 + 4 | 0) >> 2] = (HEAP32[($4 + 4 | 0) >> 2] | 0) & -2 | 0;
       HEAP32[($2 + 4 | 0) >> 2] = $1 | 1 | 0;
       HEAP32[($2 + $1 | 0) >> 2] = $1;
       return;
      }
      label$6 : {
       if ($3 >>> 0 < 256 >>> 0) {
        break label$6
       }
       dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__hafa48d776dcd75a2($0 | 0, $2 | 0);
       break label$4;
      }
      label$7 : {
       $5 = HEAP32[($2 + 12 | 0) >> 2] | 0;
       $6 = HEAP32[($2 + 8 | 0) >> 2] | 0;
       if (($5 | 0) == ($6 | 0)) {
        break label$7
       }
       HEAP32[($6 + 12 | 0) >> 2] = $5;
       HEAP32[($5 + 8 | 0) >> 2] = $6;
       break label$4;
      }
      (wasm2js_i32$0 = $0, wasm2js_i32$1 = (HEAP32[$0 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $3 >>> 3 | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
     }
     label$8 : {
      label$9 : {
       $3 = HEAP32[($4 + 4 | 0) >> 2] | 0;
       if (!($3 & 2 | 0)) {
        break label$9
       }
       HEAP32[($4 + 4 | 0) >> 2] = $3 & -2 | 0;
       HEAP32[($2 + 4 | 0) >> 2] = $1 | 1 | 0;
       HEAP32[($2 + $1 | 0) >> 2] = $1;
       break label$8;
      }
      label$10 : {
       label$11 : {
        if ((HEAP32[($0 + 412 | 0) >> 2] | 0 | 0) == ($4 | 0)) {
         break label$11
        }
        if ((HEAP32[($0 + 408 | 0) >> 2] | 0 | 0) != ($4 | 0)) {
         break label$10
        }
        HEAP32[($0 + 408 | 0) >> 2] = $2;
        $1 = (HEAP32[($0 + 400 | 0) >> 2] | 0) + $1 | 0;
        HEAP32[($0 + 400 | 0) >> 2] = $1;
        HEAP32[($2 + 4 | 0) >> 2] = $1 | 1 | 0;
        HEAP32[($2 + $1 | 0) >> 2] = $1;
        return;
       }
       HEAP32[($0 + 412 | 0) >> 2] = $2;
       $1 = (HEAP32[($0 + 404 | 0) >> 2] | 0) + $1 | 0;
       HEAP32[($0 + 404 | 0) >> 2] = $1;
       HEAP32[($2 + 4 | 0) >> 2] = $1 | 1 | 0;
       label$12 : {
        if (($2 | 0) != (HEAP32[($0 + 408 | 0) >> 2] | 0 | 0)) {
         break label$12
        }
        HEAP32[($0 + 400 | 0) >> 2] = 0;
        HEAP32[($0 + 408 | 0) >> 2] = 0;
       }
       $3 = HEAP32[($0 + 440 | 0) >> 2] | 0;
       if ($3 >>> 0 >= $1 >>> 0) {
        break label$3
       }
       $1 = HEAP32[($0 + 412 | 0) >> 2] | 0;
       if (!$1) {
        break label$3
       }
       label$13 : {
        $5 = HEAP32[($0 + 404 | 0) >> 2] | 0;
        if ($5 >>> 0 < 41 >>> 0) {
         break label$13
        }
        $2 = $0 + 424 | 0;
        label$14 : while (1) {
         label$15 : {
          $4 = HEAP32[$2 >> 2] | 0;
          if ($4 >>> 0 > $1 >>> 0) {
           break label$15
          }
          if (($4 + (HEAP32[($2 + 4 | 0) >> 2] | 0) | 0) >>> 0 > $1 >>> 0) {
           break label$13
          }
         }
         $2 = HEAP32[($2 + 8 | 0) >> 2] | 0;
         if ($2) {
          continue label$14
         }
         break label$14;
        };
       }
       label$16 : {
        label$17 : {
         $1 = HEAP32[($0 + 432 | 0) >> 2] | 0;
         if ($1) {
          break label$17
         }
         $2 = 4095;
         break label$16;
        }
        $2 = 0;
        label$18 : while (1) {
         $2 = $2 + 1 | 0;
         $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
         if ($1) {
          continue label$18
         }
         break label$18;
        };
        $2 = $2 >>> 0 > 4095 >>> 0 ? $2 : 4095;
       }
       HEAP32[($0 + 448 | 0) >> 2] = $2;
       if ($5 >>> 0 <= $3 >>> 0) {
        break label$3
       }
       HEAP32[($0 + 440 | 0) >> 2] = -1;
       return;
      }
      $5 = $3 & -8 | 0;
      $1 = $5 + $1 | 0;
      label$19 : {
       label$20 : {
        if ($5 >>> 0 < 256 >>> 0) {
         break label$20
        }
        dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__hafa48d776dcd75a2($0 | 0, $4 | 0);
        break label$19;
       }
       label$21 : {
        $5 = HEAP32[($4 + 12 | 0) >> 2] | 0;
        $4 = HEAP32[($4 + 8 | 0) >> 2] | 0;
        if (($5 | 0) == ($4 | 0)) {
         break label$21
        }
        HEAP32[($4 + 12 | 0) >> 2] = $5;
        HEAP32[($5 + 8 | 0) >> 2] = $4;
        break label$19;
       }
       (wasm2js_i32$0 = $0, wasm2js_i32$1 = (HEAP32[$0 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $3 >>> 3 | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
      }
      HEAP32[($2 + 4 | 0) >> 2] = $1 | 1 | 0;
      HEAP32[($2 + $1 | 0) >> 2] = $1;
      if (($2 | 0) != (HEAP32[($0 + 408 | 0) >> 2] | 0 | 0)) {
       break label$8
      }
      HEAP32[($0 + 400 | 0) >> 2] = $1;
      break label$3;
     }
     if ($1 >>> 0 < 256 >>> 0) {
      break label$2
     }
     dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h1fcac6f829185c8b($0 | 0, $2 | 0, $1 | 0);
     $2 = (HEAP32[($0 + 448 | 0) >> 2] | 0) + -1 | 0;
     HEAP32[($0 + 448 | 0) >> 2] = $2;
     if ($2) {
      break label$3
     }
     $1 = HEAP32[($0 + 432 | 0) >> 2] | 0;
     if ($1) {
      break label$1
     }
     HEAP32[($0 + 448 | 0) >> 2] = 4095;
     return;
    }
    return;
   }
   $4 = $1 >>> 3 | 0;
   $1 = ($0 + ($4 << 3 | 0) | 0) + 8 | 0;
   label$22 : {
    label$23 : {
     $3 = HEAP32[$0 >> 2] | 0;
     $4 = 1 << ($4 & 31 | 0) | 0;
     if (!($3 & $4 | 0)) {
      break label$23
     }
     $0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
     break label$22;
    }
    HEAP32[$0 >> 2] = $3 | $4 | 0;
    $0 = $1;
   }
   HEAP32[($1 + 8 | 0) >> 2] = $2;
   HEAP32[($0 + 12 | 0) >> 2] = $2;
   HEAP32[($2 + 12 | 0) >> 2] = $1;
   HEAP32[($2 + 8 | 0) >> 2] = $0;
   return;
  }
  $2 = 0;
  label$24 : while (1) {
   $2 = $2 + 1 | 0;
   $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
   if ($1) {
    continue label$24
   }
   break label$24;
  };
  HEAP32[($0 + 448 | 0) >> 2] = $2 >>> 0 > 4095 >>> 0 ? $2 : 4095;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__realloc__ha0cd548de3c07564($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $3 = 0, $7 = 0, $9 = 0, $5 = 0, $6 = 0, $8 = 0, $10 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $3 = 0;
  label$1 : {
   if ($2 >>> 0 > -65588 >>> 0) {
    break label$1
   }
   $4 = $2 >>> 0 < 11 >>> 0 ? 16 : ($2 + 11 | 0) & -8 | 0;
   $5 = $1 + -4 | 0;
   $6 = HEAP32[$5 >> 2] | 0;
   $7 = $6 & -8 | 0;
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          if (!($6 & 3 | 0)) {
           break label$8
          }
          $8 = $1 + -8 | 0;
          $9 = $8 + $7 | 0;
          if ($7 >>> 0 >= $4 >>> 0) {
           break label$7
          }
          if ((HEAP32[($0 + 412 | 0) >> 2] | 0 | 0) == ($9 | 0)) {
           break label$6
          }
          if ((HEAP32[($0 + 408 | 0) >> 2] | 0 | 0) == ($9 | 0)) {
           break label$5
          }
          $6 = HEAP32[($9 + 4 | 0) >> 2] | 0;
          if ($6 & 2 | 0) {
           break label$2
          }
          $10 = $6 & -8 | 0;
          $7 = $10 + $7 | 0;
          if ($7 >>> 0 >= $4 >>> 0) {
           break label$4
          }
          break label$2;
         }
         if ($4 >>> 0 < 256 >>> 0) {
          break label$2
         }
         if ($7 >>> 0 < ($4 | 4 | 0) >>> 0) {
          break label$2
         }
         if (($7 - $4 | 0) >>> 0 >= 131073 >>> 0) {
          break label$2
         }
         break label$3;
        }
        $2 = $7 - $4 | 0;
        if ($2 >>> 0 < 16 >>> 0) {
         break label$3
        }
        HEAP32[$5 >> 2] = $4 | ($6 & 1 | 0) | 0 | 2 | 0;
        $3 = $8 + $4 | 0;
        HEAP32[($3 + 4 | 0) >> 2] = $2 | 3 | 0;
        HEAP32[($9 + 4 | 0) >> 2] = HEAP32[($9 + 4 | 0) >> 2] | 0 | 1 | 0;
        dlmalloc__dlmalloc__Dlmalloc__dispose_chunk__h1db030999ec3b24a($0 | 0, $3 | 0, $2 | 0);
        break label$3;
       }
       $7 = (HEAP32[($0 + 404 | 0) >> 2] | 0) + $7 | 0;
       if ($7 >>> 0 <= $4 >>> 0) {
        break label$2
       }
       HEAP32[$5 >> 2] = $4 | ($6 & 1 | 0) | 0 | 2 | 0;
       $2 = $8 + $4 | 0;
       $3 = $7 - $4 | 0;
       HEAP32[($2 + 4 | 0) >> 2] = $3 | 1 | 0;
       HEAP32[($0 + 404 | 0) >> 2] = $3;
       HEAP32[($0 + 412 | 0) >> 2] = $2;
       break label$3;
      }
      $7 = (HEAP32[($0 + 400 | 0) >> 2] | 0) + $7 | 0;
      if ($7 >>> 0 < $4 >>> 0) {
       break label$2
      }
      label$9 : {
       label$10 : {
        $2 = $7 - $4 | 0;
        if ($2 >>> 0 > 15 >>> 0) {
         break label$10
        }
        HEAP32[$5 >> 2] = $6 & 1 | 0 | $7 | 0 | 2 | 0;
        $2 = $8 + $7 | 0;
        HEAP32[($2 + 4 | 0) >> 2] = HEAP32[($2 + 4 | 0) >> 2] | 0 | 1 | 0;
        $2 = 0;
        $3 = 0;
        break label$9;
       }
       HEAP32[$5 >> 2] = $4 | ($6 & 1 | 0) | 0 | 2 | 0;
       $3 = $8 + $4 | 0;
       HEAP32[($3 + 4 | 0) >> 2] = $2 | 1 | 0;
       $4 = $8 + $7 | 0;
       HEAP32[$4 >> 2] = $2;
       HEAP32[($4 + 4 | 0) >> 2] = (HEAP32[($4 + 4 | 0) >> 2] | 0) & -2 | 0;
      }
      HEAP32[($0 + 408 | 0) >> 2] = $3;
      HEAP32[($0 + 400 | 0) >> 2] = $2;
      break label$3;
     }
     $2 = $7 - $4 | 0;
     label$11 : {
      label$12 : {
       if ($10 >>> 0 < 256 >>> 0) {
        break label$12
       }
       dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__hafa48d776dcd75a2($0 | 0, $9 | 0);
       break label$11;
      }
      label$13 : {
       $3 = HEAP32[($9 + 12 | 0) >> 2] | 0;
       $9 = HEAP32[($9 + 8 | 0) >> 2] | 0;
       if (($3 | 0) == ($9 | 0)) {
        break label$13
       }
       HEAP32[($9 + 12 | 0) >> 2] = $3;
       HEAP32[($3 + 8 | 0) >> 2] = $9;
       break label$11;
      }
      (wasm2js_i32$0 = $0, wasm2js_i32$1 = (HEAP32[$0 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $6 >>> 3 | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
     }
     label$14 : {
      if ($2 >>> 0 < 16 >>> 0) {
       break label$14
      }
      HEAP32[$5 >> 2] = $4 | ((HEAP32[$5 >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
      $3 = $8 + $4 | 0;
      HEAP32[($3 + 4 | 0) >> 2] = $2 | 3 | 0;
      $4 = $8 + $7 | 0;
      HEAP32[($4 + 4 | 0) >> 2] = HEAP32[($4 + 4 | 0) >> 2] | 0 | 1 | 0;
      dlmalloc__dlmalloc__Dlmalloc__dispose_chunk__h1db030999ec3b24a($0 | 0, $3 | 0, $2 | 0);
      break label$3;
     }
     HEAP32[$5 >> 2] = $7 | ((HEAP32[$5 >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
     $2 = $8 + $7 | 0;
     HEAP32[($2 + 4 | 0) >> 2] = HEAP32[($2 + 4 | 0) >> 2] | 0 | 1 | 0;
    }
    $3 = $1;
    break label$1;
   }
   $4 = dlmalloc__dlmalloc__Dlmalloc__malloc__h363feeec79793de2($0 | 0, $2 | 0) | 0;
   if (!$4) {
    break label$1
   }
   $3 = HEAP32[$5 >> 2] | 0;
   $3 = ($3 & -8 | 0) - ($3 & 3 | 0 ? 4 : 8) | 0;
   $2 = memcpy($4 | 0, $1 | 0, ($3 >>> 0 > $2 >>> 0 ? $2 : $3) | 0) | 0;
   dlmalloc__dlmalloc__Dlmalloc__free__h57aed881a8c806e8($0 | 0, $1 | 0);
   return $2 | 0;
  }
  return $3 | 0;
 }
 
 function core__fmt__Formatter__pad_integral__h2aad3142c2299cf1($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $9 = 0, $10 = 0, $8 = 0, $7 = 0, $6 = 0;
  label$1 : {
   label$2 : {
    if (!$1) {
     break label$2
    }
    $6 = HEAP32[$0 >> 2] | 0;
    $1 = $6 & 1 | 0;
    $7 = $1 ? 43 : 1114112;
    $8 = $1 + $5 | 0;
    break label$1;
   }
   $8 = $5 + 1 | 0;
   $6 = HEAP32[$0 >> 2] | 0;
   $7 = 45;
  }
  label$3 : {
   label$4 : {
    if ($6 & 4 | 0) {
     break label$4
    }
    $2 = 0;
    break label$3;
   }
   $9 = 0;
   label$5 : {
    if (!$3) {
     break label$5
    }
    $10 = $3;
    $1 = $2;
    label$6 : while (1) {
     $9 = $9 + (((HEAPU8[$1 >> 0] | 0) & 192 | 0 | 0) == (128 | 0)) | 0;
     $1 = $1 + 1 | 0;
     $10 = $10 + -1 | 0;
     if ($10) {
      continue label$6
     }
     break label$6;
    };
   }
   $8 = ($8 + $3 | 0) - $9 | 0;
  }
  $1 = 1;
  label$7 : {
   label$8 : {
    if ((HEAP32[($0 + 8 | 0) >> 2] | 0 | 0) == (1 | 0)) {
     break label$8
    }
    if (core__fmt__Formatter__pad_integral__write_prefix__h306a1569ef431922($0 | 0, $7 | 0, $2 | 0, $3 | 0) | 0) {
     break label$7
    }
    return FUNCTION_TABLE[HEAP32[((HEAP32[($0 + 28 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0](HEAP32[($0 + 24 | 0) >> 2] | 0, $4, $5) | 0 | 0;
   }
   label$9 : {
    $9 = HEAP32[($0 + 12 | 0) >> 2] | 0;
    if ($9 >>> 0 > $8 >>> 0) {
     break label$9
    }
    if (core__fmt__Formatter__pad_integral__write_prefix__h306a1569ef431922($0 | 0, $7 | 0, $2 | 0, $3 | 0) | 0) {
     break label$7
    }
    return FUNCTION_TABLE[HEAP32[((HEAP32[($0 + 28 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0](HEAP32[($0 + 24 | 0) >> 2] | 0, $4, $5) | 0 | 0;
   }
   label$10 : {
    label$11 : {
     if ($6 & 8 | 0) {
      break label$11
     }
     $9 = $9 - $8 | 0;
     $1 = 0;
     label$12 : {
      label$13 : {
       label$14 : {
        $10 = HEAPU8[($0 + 48 | 0) >> 0] | 0;
        switch ((($10 | 0) == (3 | 0) ? 1 : $10) | 0) {
        case 2:
         break label$13;
        case 1:
        case 3:
         break label$14;
        default:
         break label$12;
        };
       }
       $1 = $9;
       $9 = 0;
       break label$12;
      }
      $1 = $9 >>> 1 | 0;
      $9 = ($9 + 1 | 0) >>> 1 | 0;
     }
     $1 = $1 + 1 | 0;
     label$15 : while (1) {
      $1 = $1 + -1 | 0;
      if (!$1) {
       break label$10
      }
      if (!(FUNCTION_TABLE[HEAP32[((HEAP32[($0 + 28 | 0) >> 2] | 0) + 16 | 0) >> 2] | 0](HEAP32[($0 + 24 | 0) >> 2] | 0, HEAP32[($0 + 4 | 0) >> 2] | 0) | 0)) {
       continue label$15
      }
      break label$15;
     };
     return 1 | 0;
    }
    $1 = 1;
    HEAP8[($0 + 48 | 0) >> 0] = 1;
    HEAP32[($0 + 4 | 0) >> 2] = 48;
    if (core__fmt__Formatter__pad_integral__write_prefix__h306a1569ef431922($0 | 0, $7 | 0, $2 | 0, $3 | 0) | 0) {
     break label$7
    }
    $9 = $9 - $8 | 0;
    $1 = 0;
    label$16 : {
     label$17 : {
      label$18 : {
       $10 = HEAPU8[($0 + 48 | 0) >> 0] | 0;
       switch ((($10 | 0) == (3 | 0) ? 1 : $10) | 0) {
       case 2:
        break label$17;
       case 1:
       case 3:
        break label$18;
       default:
        break label$16;
       };
      }
      $1 = $9;
      $9 = 0;
      break label$16;
     }
     $1 = $9 >>> 1 | 0;
     $9 = ($9 + 1 | 0) >>> 1 | 0;
    }
    $1 = $1 + 1 | 0;
    label$19 : {
     label$20 : while (1) {
      $1 = $1 + -1 | 0;
      if (!$1) {
       break label$19
      }
      if (!(FUNCTION_TABLE[HEAP32[((HEAP32[($0 + 28 | 0) >> 2] | 0) + 16 | 0) >> 2] | 0](HEAP32[($0 + 24 | 0) >> 2] | 0, HEAP32[($0 + 4 | 0) >> 2] | 0) | 0)) {
       continue label$20
      }
      break label$20;
     };
     return 1 | 0;
    }
    $10 = HEAP32[($0 + 4 | 0) >> 2] | 0;
    $1 = 1;
    if (FUNCTION_TABLE[HEAP32[((HEAP32[($0 + 28 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0](HEAP32[($0 + 24 | 0) >> 2] | 0, $4, $5) | 0) {
     break label$7
    }
    $9 = $9 + 1 | 0;
    $3 = HEAP32[($0 + 28 | 0) >> 2] | 0;
    $0 = HEAP32[($0 + 24 | 0) >> 2] | 0;
    label$21 : while (1) {
     label$22 : {
      $9 = $9 + -1 | 0;
      if ($9) {
       break label$22
      }
      return 0 | 0;
     }
     $1 = 1;
     if (!(FUNCTION_TABLE[HEAP32[($3 + 16 | 0) >> 2] | 0]($0, $10) | 0)) {
      continue label$21
     }
     break label$7;
    };
   }
   $10 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   $1 = 1;
   if (core__fmt__Formatter__pad_integral__write_prefix__h306a1569ef431922($0 | 0, $7 | 0, $2 | 0, $3 | 0) | 0) {
    break label$7
   }
   if (FUNCTION_TABLE[HEAP32[((HEAP32[($0 + 28 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0](HEAP32[($0 + 24 | 0) >> 2] | 0, $4, $5) | 0) {
    break label$7
   }
   $9 = $9 + 1 | 0;
   $3 = HEAP32[($0 + 28 | 0) >> 2] | 0;
   $0 = HEAP32[($0 + 24 | 0) >> 2] | 0;
   label$23 : while (1) {
    label$24 : {
     $9 = $9 + -1 | 0;
     if ($9) {
      break label$24
     }
     return 0 | 0;
    }
    $1 = 1;
    if (!(FUNCTION_TABLE[HEAP32[($3 + 16 | 0) >> 2] | 0]($0, $10) | 0)) {
     continue label$23
    }
    break label$23;
   };
  }
  return $1 | 0;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__dispose_chunk__h1db030999ec3b24a($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $3 = $1 + $2 | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     $4 = HEAP32[($1 + 4 | 0) >> 2] | 0;
     if ($4 & 1 | 0) {
      break label$3
     }
     if (!($4 & 3 | 0)) {
      break label$2
     }
     $4 = HEAP32[$1 >> 2] | 0;
     $2 = $4 + $2 | 0;
     label$4 : {
      $1 = $1 - $4 | 0;
      if ((HEAP32[($0 + 408 | 0) >> 2] | 0 | 0) != ($1 | 0)) {
       break label$4
      }
      if (((HEAP32[($3 + 4 | 0) >> 2] | 0) & 3 | 0 | 0) != (3 | 0)) {
       break label$3
      }
      HEAP32[($0 + 400 | 0) >> 2] = $2;
      HEAP32[($3 + 4 | 0) >> 2] = (HEAP32[($3 + 4 | 0) >> 2] | 0) & -2 | 0;
      HEAP32[($1 + 4 | 0) >> 2] = $2 | 1 | 0;
      HEAP32[$3 >> 2] = $2;
      return;
     }
     label$5 : {
      if ($4 >>> 0 < 256 >>> 0) {
       break label$5
      }
      dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__hafa48d776dcd75a2($0 | 0, $1 | 0);
      break label$3;
     }
     label$6 : {
      $5 = HEAP32[($1 + 12 | 0) >> 2] | 0;
      $6 = HEAP32[($1 + 8 | 0) >> 2] | 0;
      if (($5 | 0) == ($6 | 0)) {
       break label$6
      }
      HEAP32[($6 + 12 | 0) >> 2] = $5;
      HEAP32[($5 + 8 | 0) >> 2] = $6;
      break label$3;
     }
     (wasm2js_i32$0 = $0, wasm2js_i32$1 = (HEAP32[$0 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4 >>> 3 | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    }
    label$7 : {
     $4 = HEAP32[($3 + 4 | 0) >> 2] | 0;
     if (!($4 & 2 | 0)) {
      break label$7
     }
     HEAP32[($3 + 4 | 0) >> 2] = $4 & -2 | 0;
     HEAP32[($1 + 4 | 0) >> 2] = $2 | 1 | 0;
     HEAP32[($1 + $2 | 0) >> 2] = $2;
     break label$1;
    }
    label$8 : {
     label$9 : {
      if ((HEAP32[($0 + 412 | 0) >> 2] | 0 | 0) == ($3 | 0)) {
       break label$9
      }
      if ((HEAP32[($0 + 408 | 0) >> 2] | 0 | 0) != ($3 | 0)) {
       break label$8
      }
      HEAP32[($0 + 408 | 0) >> 2] = $1;
      $2 = (HEAP32[($0 + 400 | 0) >> 2] | 0) + $2 | 0;
      HEAP32[($0 + 400 | 0) >> 2] = $2;
      HEAP32[($1 + 4 | 0) >> 2] = $2 | 1 | 0;
      HEAP32[($1 + $2 | 0) >> 2] = $2;
      return;
     }
     HEAP32[($0 + 412 | 0) >> 2] = $1;
     $2 = (HEAP32[($0 + 404 | 0) >> 2] | 0) + $2 | 0;
     HEAP32[($0 + 404 | 0) >> 2] = $2;
     HEAP32[($1 + 4 | 0) >> 2] = $2 | 1 | 0;
     if (($1 | 0) != (HEAP32[($0 + 408 | 0) >> 2] | 0 | 0)) {
      break label$2
     }
     HEAP32[($0 + 400 | 0) >> 2] = 0;
     HEAP32[($0 + 408 | 0) >> 2] = 0;
     return;
    }
    $5 = $4 & -8 | 0;
    $2 = $5 + $2 | 0;
    label$10 : {
     label$11 : {
      if ($5 >>> 0 < 256 >>> 0) {
       break label$11
      }
      dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__hafa48d776dcd75a2($0 | 0, $3 | 0);
      break label$10;
     }
     label$12 : {
      $5 = HEAP32[($3 + 12 | 0) >> 2] | 0;
      $3 = HEAP32[($3 + 8 | 0) >> 2] | 0;
      if (($5 | 0) == ($3 | 0)) {
       break label$12
      }
      HEAP32[($3 + 12 | 0) >> 2] = $5;
      HEAP32[($5 + 8 | 0) >> 2] = $3;
      break label$10;
     }
     (wasm2js_i32$0 = $0, wasm2js_i32$1 = (HEAP32[$0 >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, $4 >>> 3 | 0 | 0) | 0) | 0), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
    }
    HEAP32[($1 + 4 | 0) >> 2] = $2 | 1 | 0;
    HEAP32[($1 + $2 | 0) >> 2] = $2;
    if (($1 | 0) != (HEAP32[($0 + 408 | 0) >> 2] | 0 | 0)) {
     break label$1
    }
    HEAP32[($0 + 400 | 0) >> 2] = $2;
   }
   return;
  }
  label$13 : {
   if ($2 >>> 0 < 256 >>> 0) {
    break label$13
   }
   dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h1fcac6f829185c8b($0 | 0, $1 | 0, $2 | 0);
   return;
  }
  $3 = $2 >>> 3 | 0;
  $2 = ($0 + ($3 << 3 | 0) | 0) + 8 | 0;
  label$14 : {
   label$15 : {
    $4 = HEAP32[$0 >> 2] | 0;
    $3 = 1 << ($3 & 31 | 0) | 0;
    if (!($4 & $3 | 0)) {
     break label$15
    }
    $0 = HEAP32[($2 + 8 | 0) >> 2] | 0;
    break label$14;
   }
   HEAP32[$0 >> 2] = $4 | $3 | 0;
   $0 = $2;
  }
  HEAP32[($2 + 8 | 0) >> 2] = $1;
  HEAP32[($0 + 12 | 0) >> 2] = $1;
  HEAP32[($1 + 12 | 0) >> 2] = $2;
  HEAP32[($1 + 8 | 0) >> 2] = $0;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__memalign__ha7187a0adc17c42a($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $5 = 0, $4 = 0, $6 = 0, $7 = 0;
  $3 = 0;
  label$1 : {
   $1 = $1 >>> 0 > 16 >>> 0 ? $1 : 16;
   if ((-65587 - $1 | 0) >>> 0 <= $2 >>> 0) {
    break label$1
   }
   $4 = $2 >>> 0 < 11 >>> 0 ? 16 : ($2 + 11 | 0) & -8 | 0;
   $2 = dlmalloc__dlmalloc__Dlmalloc__malloc__h363feeec79793de2($0 | 0, ($1 + $4 | 0) + 12 | 0 | 0) | 0;
   if (!$2) {
    break label$1
   }
   $3 = $2 + -8 | 0;
   label$2 : {
    label$3 : {
     $5 = $1 + -1 | 0;
     if ($5 & $2 | 0) {
      break label$3
     }
     $1 = $3;
     break label$2;
    }
    $6 = $2 + -4 | 0;
    $7 = HEAP32[$6 >> 2] | 0;
    $2 = (($5 + $2 | 0) & (0 - $1 | 0) | 0) + -8 | 0;
    $1 = ($2 - $3 | 0) >>> 0 > 16 >>> 0 ? $2 : $2 + $1 | 0;
    $2 = $1 - $3 | 0;
    $5 = ($7 & -8 | 0) - $2 | 0;
    label$4 : {
     if (!($7 & 3 | 0)) {
      break label$4
     }
     HEAP32[($1 + 4 | 0) >> 2] = $5 | ((HEAP32[($1 + 4 | 0) >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
     $5 = $1 + $5 | 0;
     HEAP32[($5 + 4 | 0) >> 2] = HEAP32[($5 + 4 | 0) >> 2] | 0 | 1 | 0;
     HEAP32[$6 >> 2] = $2 | ((HEAP32[$6 >> 2] | 0) & 1 | 0) | 0 | 2 | 0;
     HEAP32[($1 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] | 0 | 1 | 0;
     dlmalloc__dlmalloc__Dlmalloc__dispose_chunk__h1db030999ec3b24a($0 | 0, $3 | 0, $2 | 0);
     break label$2;
    }
    $3 = HEAP32[$3 >> 2] | 0;
    HEAP32[($1 + 4 | 0) >> 2] = $5;
    HEAP32[$1 >> 2] = $3 + $2 | 0;
   }
   label$5 : {
    $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (!($2 & 3 | 0)) {
     break label$5
    }
    $3 = $2 & -8 | 0;
    if ($3 >>> 0 <= ($4 + 16 | 0) >>> 0) {
     break label$5
    }
    HEAP32[($1 + 4 | 0) >> 2] = $4 | ($2 & 1 | 0) | 0 | 2 | 0;
    $2 = $1 + $4 | 0;
    $4 = $3 - $4 | 0;
    HEAP32[($2 + 4 | 0) >> 2] = $4 | 3 | 0;
    $3 = $1 + $3 | 0;
    HEAP32[($3 + 4 | 0) >> 2] = HEAP32[($3 + 4 | 0) >> 2] | 0 | 1 | 0;
    dlmalloc__dlmalloc__Dlmalloc__dispose_chunk__h1db030999ec3b24a($0 | 0, $2 | 0, $4 | 0);
   }
   $3 = $1 + 8 | 0;
  }
  return $3 | 0;
 }
 
 function core__fmt__num__imp__fmt_u64__hffaa8c8825c31114($0, $0$hi, $1, $2) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, $4 = 0, $5 = 0, i64toi32_i32$0 = 0, $3 = 0, i64toi32_i32$1 = 0, $8 = 0, i64toi32_i32$3 = 0, $8$hi = 0, i64toi32_i32$5 = 0, $6 = 0, $7 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $25 = 0, $25$hi = 0;
  $3 = global$0 - 48 | 0;
  global$0 = $3;
  $4 = 39;
  label$1 : {
   label$2 : {
    i64toi32_i32$0 = $0$hi;
    i64toi32_i32$2 = $0;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 1e4;
    if (i64toi32_i32$0 >>> 0 > i64toi32_i32$1 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) & i64toi32_i32$2 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
     break label$2
    }
    i64toi32_i32$2 = $0$hi;
    $8 = $0;
    $8$hi = i64toi32_i32$2;
    break label$1;
   }
   $4 = 39;
   label$3 : while (1) {
    $5 = ($3 + 9 | 0) + $4 | 0;
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_udiv($0 | 0, i64toi32_i32$2 | 0, 1e4 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $8 = i64toi32_i32$0;
    $8$hi = i64toi32_i32$2;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_mul($8 | 0, i64toi32_i32$2 | 0, 1e4 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
    $25 = i64toi32_i32$0;
    $25$hi = i64toi32_i32$2;
    i64toi32_i32$2 = $0$hi;
    i64toi32_i32$3 = $0;
    i64toi32_i32$0 = $25$hi;
    i64toi32_i32$1 = $25;
    i64toi32_i32$5 = ($0 >>> 0 < i64toi32_i32$1 >>> 0) + i64toi32_i32$0 | 0;
    i64toi32_i32$5 = i64toi32_i32$2 - i64toi32_i32$5 | 0;
    $6 = $0 - i64toi32_i32$1 | 0;
    $7 = (($6 & 65535 | 0) >>> 0) / (100 >>> 0) | 0;
    $18 = ($7 << 1 | 0) + 1049402 | 0;
    $19 = $5 + -4 | 0;
    $20 = HEAPU8[$18 >> 0] | 0 | ((HEAPU8[($18 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
    HEAP8[$19 >> 0] = $20;
    HEAP8[($19 + 1 | 0) >> 0] = $20 >>> 8 | 0;
    $21 = ((($6 - Math_imul($7, 100) | 0) & 65535 | 0) << 1 | 0) + 1049402 | 0;
    $22 = $5 + -2 | 0;
    $23 = HEAPU8[$21 >> 0] | 0 | ((HEAPU8[($21 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
    HEAP8[$22 >> 0] = $23;
    HEAP8[($22 + 1 | 0) >> 0] = $23 >>> 8 | 0;
    $4 = $4 + -4 | 0;
    i64toi32_i32$5 = i64toi32_i32$2;
    i64toi32_i32$5 = i64toi32_i32$2;
    i64toi32_i32$2 = $0;
    i64toi32_i32$3 = 0;
    i64toi32_i32$1 = 99999999;
    $5 = $0$hi >>> 0 > i64toi32_i32$3 >>> 0 | (($0$hi | 0) == (i64toi32_i32$3 | 0) & i64toi32_i32$2 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0;
    i64toi32_i32$2 = $8$hi;
    $0 = $8;
    $0$hi = i64toi32_i32$2;
    if ($5) {
     continue label$3
    }
    break label$3;
   };
  }
  label$4 : {
   i64toi32_i32$2 = $8$hi;
   $5 = $8;
   if (($5 | 0) <= (99 | 0)) {
    break label$4
   }
   $4 = $4 + -2 | 0;
   i64toi32_i32$2 = $8$hi;
   $5 = $8;
   $5 = (($5 & 65535 | 0) >>> 0) / (100 >>> 0) | 0;
   $24 = ((($8 - Math_imul($5, 100) | 0) & 65535 | 0) << 1 | 0) + 1049402 | 0;
   $26 = ($3 + 9 | 0) + $4 | 0;
   $27 = HEAPU8[$24 >> 0] | 0 | ((HEAPU8[($24 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
   HEAP8[$26 >> 0] = $27;
   HEAP8[($26 + 1 | 0) >> 0] = $27 >>> 8 | 0;
  }
  label$5 : {
   label$6 : {
    if (($5 | 0) < (10 | 0)) {
     break label$6
    }
    $4 = $4 + -2 | 0;
    $28 = ($5 << 1 | 0) + 1049402 | 0;
    $29 = ($3 + 9 | 0) + $4 | 0;
    $30 = HEAPU8[$28 >> 0] | 0 | ((HEAPU8[($28 + 1 | 0) >> 0] | 0) << 8 | 0) | 0;
    HEAP8[$29 >> 0] = $30;
    HEAP8[($29 + 1 | 0) >> 0] = $30 >>> 8 | 0;
    break label$5;
   }
   $4 = $4 + -1 | 0;
   HEAP8[(($3 + 9 | 0) + $4 | 0) >> 0] = $5 + 48 | 0;
  }
  $4 = core__fmt__Formatter__pad_integral__h2aad3142c2299cf1($2 | 0, $1 | 0, 1049144 | 0, 0 | 0, ($3 + 9 | 0) + $4 | 0 | 0, 39 - $4 | 0 | 0) | 0;
  global$0 = $3 + 48 | 0;
  return $4 | 0;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__insert_large_chunk__h1fcac6f829185c8b($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $3 = 0, $5 = 0, $6 = 0;
  label$1 : {
   label$2 : {
    $3 = $2 >>> 8 | 0;
    if ($3) {
     break label$2
    }
    $4 = 0;
    break label$1;
   }
   $4 = 31;
   if ($2 >>> 0 > 16777215 >>> 0) {
    break label$1
   }
   $4 = Math_clz32($3);
   $4 = ((($2 >>> ((6 - $4 | 0) & 31 | 0) | 0) & 1 | 0) - ($4 << 1 | 0) | 0) + 62 | 0;
  }
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = 0;
  HEAP32[($1 + 28 | 0) >> 2] = $4;
  $3 = ($0 + ($4 << 2 | 0) | 0) + 272 | 0;
  label$3 : {
   label$4 : {
    label$5 : {
     label$6 : {
      label$7 : {
       $5 = HEAP32[($0 + 4 | 0) >> 2] | 0;
       $6 = 1 << ($4 & 31 | 0) | 0;
       if (!($5 & $6 | 0)) {
        break label$7
       }
       $3 = HEAP32[$3 >> 2] | 0;
       if (((HEAP32[($3 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) != ($2 | 0)) {
        break label$6
       }
       $4 = $3;
       break label$5;
      }
      HEAP32[($0 + 4 | 0) >> 2] = $5 | $6 | 0;
      HEAP32[$3 >> 2] = $1;
      HEAP32[($1 + 24 | 0) >> 2] = $3;
      break label$3;
     }
     $0 = $2 << (($4 | 0) == (31 | 0) ? 0 : (25 - ($4 >>> 1 | 0) | 0) & 31 | 0) | 0;
     label$8 : while (1) {
      $5 = ($3 + (($0 >>> 29 | 0) & 4 | 0) | 0) + 16 | 0;
      $4 = HEAP32[$5 >> 2] | 0;
      if (!$4) {
       break label$4
      }
      $0 = $0 << 1 | 0;
      $3 = $4;
      if (((HEAP32[($4 + 4 | 0) >> 2] | 0) & -8 | 0 | 0) != ($2 | 0)) {
       continue label$8
      }
      break label$8;
     };
    }
    $0 = HEAP32[($4 + 8 | 0) >> 2] | 0;
    HEAP32[($0 + 12 | 0) >> 2] = $1;
    HEAP32[($4 + 8 | 0) >> 2] = $1;
    HEAP32[($1 + 24 | 0) >> 2] = 0;
    HEAP32[($1 + 12 | 0) >> 2] = $4;
    HEAP32[($1 + 8 | 0) >> 2] = $0;
    return;
   }
   HEAP32[$5 >> 2] = $1;
   HEAP32[($1 + 24 | 0) >> 2] = $3;
  }
  HEAP32[($1 + 12 | 0) >> 2] = $1;
  HEAP32[($1 + 8 | 0) >> 2] = $1;
 }
 
 function $_mut_20W_20as_20core__fmt__Write___write_char__he3acca6867759ba8($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  $0 = HEAP32[$0 >> 2] | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if ($1 >>> 0 < 128 >>> 0) {
       break label$4
      }
      HEAP32[($2 + 12 | 0) >> 2] = 0;
      if ($1 >>> 0 < 2048 >>> 0) {
       break label$3
      }
      label$5 : {
       if ($1 >>> 0 >= 65536 >>> 0) {
        break label$5
       }
       HEAP8[($2 + 14 | 0) >> 0] = $1 & 63 | 0 | 128 | 0;
       HEAP8[($2 + 13 | 0) >> 0] = ($1 >>> 6 | 0) & 63 | 0 | 128 | 0;
       HEAP8[($2 + 12 | 0) >> 0] = ($1 >>> 12 | 0) & 15 | 0 | 224 | 0;
       $1 = 3;
       break label$2;
      }
      HEAP8[($2 + 15 | 0) >> 0] = $1 & 63 | 0 | 128 | 0;
      HEAP8[($2 + 12 | 0) >> 0] = $1 >>> 18 | 0 | 240 | 0;
      HEAP8[($2 + 14 | 0) >> 0] = ($1 >>> 6 | 0) & 63 | 0 | 128 | 0;
      HEAP8[($2 + 13 | 0) >> 0] = ($1 >>> 12 | 0) & 63 | 0 | 128 | 0;
      $1 = 4;
      break label$2;
     }
     label$6 : {
      $3 = HEAP32[($0 + 8 | 0) >> 2] | 0;
      if (($3 | 0) != (HEAP32[($0 + 4 | 0) >> 2] | 0 | 0)) {
       break label$6
      }
      alloc__vec__Vec_T___reserve__h727cb7033b5d6430($0 | 0, 1 | 0);
      $3 = HEAP32[($0 + 8 | 0) >> 2] | 0;
     }
     HEAP8[((HEAP32[$0 >> 2] | 0) + $3 | 0) >> 0] = $1;
     HEAP32[($0 + 8 | 0) >> 2] = (HEAP32[($0 + 8 | 0) >> 2] | 0) + 1 | 0;
     break label$1;
    }
    HEAP8[($2 + 13 | 0) >> 0] = $1 & 63 | 0 | 128 | 0;
    HEAP8[($2 + 12 | 0) >> 0] = ($1 >>> 6 | 0) & 31 | 0 | 192 | 0;
    $1 = 2;
   }
   alloc__vec__Vec_T___reserve__h727cb7033b5d6430($0 | 0, $1 | 0);
   $3 = HEAP32[($0 + 8 | 0) >> 2] | 0;
   HEAP32[($0 + 8 | 0) >> 2] = $3 + $1 | 0;
   memcpy($3 + (HEAP32[$0 >> 2] | 0) | 0 | 0, $2 + 12 | 0 | 0, $1 | 0) | 0;
  }
  global$0 = $2 + 16 | 0;
  return 0 | 0;
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve_internal__hdacdc94dd33f2aaf($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $6 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $7 = 0, $8 = 0, $40 = 0, $48 = 0, $64 = 0;
  $6 = global$0 - 48 | 0;
  global$0 = $6;
  $7 = 0;
  label$1 : {
   $8 = HEAP32[($1 + 4 | 0) >> 2] | 0;
   if (($8 - $2 | 0) >>> 0 >= $3 >>> 0) {
    break label$1
   }
   $3 = $2 + $3 | 0;
   $2 = $3 >>> 0 < $2 >>> 0;
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       if (!$5) {
        break label$5
       }
       if (!$2) {
        break label$4
       }
       $T_20as_20core__convert__From_T____from__ha989478891982766($6 + 16 | 0 | 0, $3 | 0, 0 | 0);
       $T_20as_20core__convert__From_T____from__ha989478891982766($6 + 8 | 0 | 0, HEAP32[($6 + 16 | 0) >> 2] | 0 | 0, HEAP32[($6 + 20 | 0) >> 2] | 0 | 0);
       i64toi32_i32$0 = HEAP32[($6 + 8 | 0) >> 2] | 0;
       i64toi32_i32$1 = HEAP32[($6 + 12 | 0) >> 2] | 0;
       $40 = i64toi32_i32$0;
       i64toi32_i32$0 = $0;
       HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $40;
       HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$1;
       break label$2;
      }
      if (!$2) {
       break label$3
      }
      $T_20as_20core__convert__From_T____from__ha989478891982766($6 + 40 | 0 | 0, $3 | 0, 0 | 0);
      i64toi32_i32$1 = HEAP32[($6 + 40 | 0) >> 2] | 0;
      i64toi32_i32$0 = HEAP32[($6 + 44 | 0) >> 2] | 0;
      $48 = i64toi32_i32$1;
      i64toi32_i32$1 = $0;
      HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = $48;
      HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = i64toi32_i32$0;
      break label$2;
     }
     $2 = $8 << 1 | 0;
     $3 = $2 >>> 0 > $3 >>> 0 ? $2 : $3;
    }
    label$6 : {
     if (($3 | 0) > (-1 | 0)) {
      break label$6
     }
     $T_20as_20core__convert__From_T____from__ha989478891982766($6 + 24 | 0 | 0, $6 | 0, 0 | 0);
     i64toi32_i32$0 = HEAP32[($6 + 24 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($6 + 28 | 0) >> 2] | 0;
     $64 = i64toi32_i32$0;
     i64toi32_i32$0 = $0;
     HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = $64;
     HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = i64toi32_i32$1;
     break label$2;
    }
    alloc__raw_vec__RawVec_T_2cA___current_layout__h329fd55a577293d4($6 + 32 | 0 | 0, $1 | 0);
    label$7 : {
     label$8 : {
      $2 = HEAP32[($6 + 36 | 0) >> 2] | 0;
      if ($2) {
       break label$8
      }
      $2 = __rust_alloc($3 | 0, 1 | 0) | 0;
      break label$7;
     }
     $2 = __rust_realloc(HEAP32[$1 >> 2] | 0 | 0, HEAP32[($6 + 32 | 0) >> 2] | 0 | 0, $2 | 0, $3 | 0) | 0;
    }
    label$9 : {
     label$10 : {
      if ($2) {
       break label$10
      }
      if (!$4) {
       break label$9
      }
      alloc__alloc__handle_alloc_error__hf59328f931d332cd($3 | 0, 1 | 0);
      abort();
     }
     $2 = $T_20as_20core__convert__Into_U____into__h332090228b6e4a29($2 | 0) | 0;
     HEAP32[($1 + 4 | 0) >> 2] = $3;
     HEAP32[$1 >> 2] = $2;
     break label$1;
    }
    HEAP32[($0 + 4 | 0) >> 2] = $3;
    $7 = 1;
    HEAP32[($0 + 8 | 0) >> 2] = 1;
    break label$1;
   }
   $7 = 1;
  }
  HEAP32[$0 >> 2] = $7;
  global$0 = $6 + 48 | 0;
 }
 
 function $std__panicking__continue_panic_fmt__PanicPayload_20as_20core__panic__BoxMeUp___box_me_up__hdcda8b811c152c45($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $4 = 0, $3 = 0, $5 = 0, $6 = 0, $27 = 0, $33 = 0, $36 = 0, $50 = 0, $64 = 0;
  $2 = global$0 - 64 | 0;
  global$0 = $2;
  label$1 : {
   $3 = HEAP32[($1 + 4 | 0) >> 2] | 0;
   if ($3) {
    break label$1
   }
   $3 = $1 + 4 | 0;
   $4 = HEAP32[$1 >> 2] | 0;
   HEAP32[($2 + 32 | 0) >> 2] = 0;
   i64toi32_i32$1 = $2;
   i64toi32_i32$0 = 0;
   HEAP32[($2 + 24 | 0) >> 2] = 1;
   HEAP32[($2 + 28 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($2 + 36 | 0) >> 2] = $2 + 24 | 0;
   i64toi32_i32$2 = $4 + 16 | 0;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $27 = i64toi32_i32$0;
   i64toi32_i32$0 = ($2 + 40 | 0) + 16 | 0;
   HEAP32[i64toi32_i32$0 >> 2] = $27;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   i64toi32_i32$2 = $4 + 8 | 0;
   i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $33 = i64toi32_i32$1;
   i64toi32_i32$1 = ($2 + 40 | 0) + 8 | 0;
   HEAP32[i64toi32_i32$1 >> 2] = $33;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$2 = $4;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $36 = i64toi32_i32$0;
   i64toi32_i32$0 = $2;
   HEAP32[($2 + 40 | 0) >> 2] = $36;
   HEAP32[($2 + 44 | 0) >> 2] = i64toi32_i32$1;
   core__fmt__write__h1f444f4312eb6c27($2 + 36 | 0 | 0, 1048932 | 0, $2 + 40 | 0 | 0) | 0;
   $4 = ($2 + 8 | 0) + 8 | 0;
   HEAP32[$4 >> 2] = HEAP32[($2 + 32 | 0) >> 2] | 0;
   i64toi32_i32$2 = $2;
   i64toi32_i32$1 = HEAP32[($2 + 24 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($2 + 28 | 0) >> 2] | 0;
   $50 = i64toi32_i32$1;
   i64toi32_i32$1 = $2;
   HEAP32[($2 + 8 | 0) >> 2] = $50;
   HEAP32[($2 + 12 | 0) >> 2] = i64toi32_i32$0;
   label$2 : {
    $5 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (!$5) {
     break label$2
    }
    $6 = HEAP32[($1 + 8 | 0) >> 2] | 0;
    if (!$6) {
     break label$2
    }
    __rust_dealloc($5 | 0, $6 | 0, 1 | 0);
   }
   i64toi32_i32$2 = $2;
   i64toi32_i32$0 = HEAP32[($2 + 8 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($2 + 12 | 0) >> 2] | 0;
   $64 = i64toi32_i32$0;
   i64toi32_i32$0 = $3;
   HEAP32[i64toi32_i32$0 >> 2] = $64;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = HEAP32[$4 >> 2] | 0;
   $3 = HEAP32[i64toi32_i32$0 >> 2] | 0;
  }
  HEAP32[($1 + 4 | 0) >> 2] = 1;
  $4 = HEAP32[($1 + 12 | 0) >> 2] | 0;
  $1 = $1 + 8 | 0;
  $5 = HEAP32[$1 >> 2] | 0;
  i64toi32_i32$0 = $1;
  i64toi32_i32$1 = 0;
  HEAP32[i64toi32_i32$0 >> 2] = 0;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  label$3 : {
   $1 = __rust_alloc(12 | 0, 4 | 0) | 0;
   if ($1) {
    break label$3
   }
   alloc__alloc__handle_alloc_error__hf59328f931d332cd(12 | 0, 4 | 0);
   abort();
  }
  HEAP32[($1 + 8 | 0) >> 2] = $4;
  HEAP32[($1 + 4 | 0) >> 2] = $5;
  HEAP32[$1 >> 2] = $3;
  HEAP32[($0 + 4 | 0) >> 2] = 1049072;
  HEAP32[$0 >> 2] = $1;
  global$0 = $2 + 64 | 0;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__unlink_large_chunk__hafa48d776dcd75a2($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $5 = 0, $4 = 0, $2 = 0, $6 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $2 = HEAP32[($1 + 24 | 0) >> 2] | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     $3 = HEAP32[($1 + 12 | 0) >> 2] | 0;
     if (($3 | 0) != ($1 | 0)) {
      break label$3
     }
     $3 = $1 + 20 | 0;
     $4 = HEAP32[$3 >> 2] | 0;
     $5 = HEAP32[($1 + ($4 ? 20 : 16) | 0) >> 2] | 0;
     if ($5) {
      break label$2
     }
     $3 = 0;
     break label$1;
    }
    $5 = HEAP32[($1 + 8 | 0) >> 2] | 0;
    HEAP32[($5 + 12 | 0) >> 2] = $3;
    HEAP32[($3 + 8 | 0) >> 2] = $5;
    break label$1;
   }
   $4 = $4 ? $3 : $1 + 16 | 0;
   label$4 : while (1) {
    $6 = $4;
    label$5 : {
     $3 = $5;
     $4 = $3 + 20 | 0;
     $5 = HEAP32[$4 >> 2] | 0;
     if ($5) {
      break label$5
     }
     $4 = $3 + 16 | 0;
     $5 = HEAP32[($3 + 16 | 0) >> 2] | 0;
    }
    if ($5) {
     continue label$4
    }
    break label$4;
   };
   HEAP32[$6 >> 2] = 0;
  }
  label$6 : {
   if (!$2) {
    break label$6
   }
   label$7 : {
    label$8 : {
     $5 = ($0 + ((HEAP32[($1 + 28 | 0) >> 2] | 0) << 2 | 0) | 0) + 272 | 0;
     if ((HEAP32[$5 >> 2] | 0 | 0) != ($1 | 0)) {
      break label$8
     }
     HEAP32[$5 >> 2] = $3;
     if ($3) {
      break label$7
     }
     (wasm2js_i32$0 = $0, wasm2js_i32$1 = (HEAP32[($0 + 4 | 0) >> 2] | 0) & (__wasm_rotl_i32(-2 | 0, HEAP32[($1 + 28 | 0) >> 2] | 0 | 0) | 0) | 0), HEAP32[(wasm2js_i32$0 + 4 | 0) >> 2] = wasm2js_i32$1;
     return;
    }
    HEAP32[($2 + ((HEAP32[($2 + 16 | 0) >> 2] | 0 | 0) == ($1 | 0) ? 16 : 20) | 0) >> 2] = $3;
    if (!$3) {
     break label$6
    }
   }
   HEAP32[($3 + 24 | 0) >> 2] = $2;
   label$9 : {
    $5 = HEAP32[($1 + 16 | 0) >> 2] | 0;
    if (!$5) {
     break label$9
    }
    HEAP32[($3 + 16 | 0) >> 2] = $5;
    HEAP32[($5 + 24 | 0) >> 2] = $3;
   }
   $5 = HEAP32[($1 + 20 | 0) >> 2] | 0;
   if (!$5) {
    break label$6
   }
   HEAP32[($3 + 20 | 0) >> 2] = $5;
   HEAP32[($5 + 24 | 0) >> 2] = $3;
  }
 }
 
 function std__panicking__rust_panic_with_hook__hdf14da40c6b51ea2($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, $5 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $6 = 0, $7 = 0, $8 = 0, $57 = 0;
  $4 = global$0 - 48 | 0;
  global$0 = $4;
  $5 = 1;
  $6 = HEAP32[($3 + 12 | 0) >> 2] | 0;
  $7 = HEAP32[($3 + 8 | 0) >> 2] | 0;
  $8 = HEAP32[($3 + 4 | 0) >> 2] | 0;
  $3 = HEAP32[$3 >> 2] | 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      if ((HEAP32[(0 + 1050152 | 0) >> 2] | 0 | 0) == (1 | 0)) {
       break label$4
      }
      i64toi32_i32$1 = 0;
      i64toi32_i32$0 = 1;
      HEAP32[(i64toi32_i32$1 + 1050152 | 0) >> 2] = 1;
      HEAP32[(i64toi32_i32$1 + 1050156 | 0) >> 2] = i64toi32_i32$0;
      break label$3;
     }
     $5 = (HEAP32[(0 + 1050156 | 0) >> 2] | 0) + 1 | 0;
     HEAP32[(0 + 1050156 | 0) >> 2] = $5;
     if ($5 >>> 0 > 2 >>> 0) {
      break label$2
     }
    }
    core__panic__Location__internal_constructor__hb8113ea1cbf635a6($4 + 16 | 0 | 0, $3 | 0, $8 | 0, $7 | 0, $6 | 0);
    HEAP32[($4 + 40 | 0) >> 2] = $2;
    HEAP32[($4 + 36 | 0) >> 2] = 1048956;
    HEAP32[($4 + 32 | 0) >> 2] = 1;
    $3 = HEAP32[(0 + 1049688 | 0) >> 2] | 0;
    HEAP32[($4 + 44 | 0) >> 2] = $4 + 16 | 0;
    if (($3 | 0) <= (-1 | 0)) {
     break label$2
    }
    $3 = $3 + 1 | 0;
    HEAP32[(0 + 1049688 | 0) >> 2] = $3;
    label$5 : {
     $2 = HEAP32[(0 + 1049696 | 0) >> 2] | 0;
     if (!$2) {
      break label$5
     }
     $3 = HEAP32[(0 + 1049692 | 0) >> 2] | 0;
     FUNCTION_TABLE[HEAP32[($1 + 16 | 0) >> 2] | 0]($4 + 8 | 0, $0);
     i64toi32_i32$0 = HEAP32[($4 + 8 | 0) >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($4 + 12 | 0) >> 2] | 0;
     $57 = i64toi32_i32$0;
     i64toi32_i32$0 = $4;
     HEAP32[($4 + 32 | 0) >> 2] = $57;
     HEAP32[($4 + 36 | 0) >> 2] = i64toi32_i32$1;
     FUNCTION_TABLE[HEAP32[($2 + 12 | 0) >> 2] | 0]($3, $4 + 32 | 0);
     $3 = HEAP32[(0 + 1049688 | 0) >> 2] | 0;
    }
    HEAP32[(0 + 1049688 | 0) >> 2] = $3 + -1 | 0;
    if ($5 >>> 0 <= 1 >>> 0) {
     break label$1
    }
   }
   abort();
  }
  rust_panic($0 | 0, $1 | 0);
  abort();
 }
 
 function $std__panicking__continue_panic_fmt__PanicPayload_20as_20core__panic__BoxMeUp___get__h4a93df7d428ae93b($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, $4 = 0, $3 = 0, $5 = 0, $25 = 0, $31 = 0, $34 = 0, $48 = 0, $62 = 0;
  $2 = global$0 - 64 | 0;
  global$0 = $2;
  $3 = $1 + 4 | 0;
  label$1 : {
   if (HEAP32[($1 + 4 | 0) >> 2] | 0) {
    break label$1
   }
   $4 = HEAP32[$1 >> 2] | 0;
   HEAP32[($2 + 32 | 0) >> 2] = 0;
   i64toi32_i32$1 = $2;
   i64toi32_i32$0 = 0;
   HEAP32[($2 + 24 | 0) >> 2] = 1;
   HEAP32[($2 + 28 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[($2 + 36 | 0) >> 2] = $2 + 24 | 0;
   i64toi32_i32$2 = $4 + 16 | 0;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $25 = i64toi32_i32$0;
   i64toi32_i32$0 = ($2 + 40 | 0) + 16 | 0;
   HEAP32[i64toi32_i32$0 >> 2] = $25;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   i64toi32_i32$2 = $4 + 8 | 0;
   i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $31 = i64toi32_i32$1;
   i64toi32_i32$1 = ($2 + 40 | 0) + 8 | 0;
   HEAP32[i64toi32_i32$1 >> 2] = $31;
   HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
   i64toi32_i32$2 = $4;
   i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
   i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
   $34 = i64toi32_i32$0;
   i64toi32_i32$0 = $2;
   HEAP32[($2 + 40 | 0) >> 2] = $34;
   HEAP32[($2 + 44 | 0) >> 2] = i64toi32_i32$1;
   core__fmt__write__h1f444f4312eb6c27($2 + 36 | 0 | 0, 1048932 | 0, $2 + 40 | 0 | 0) | 0;
   $4 = ($2 + 8 | 0) + 8 | 0;
   HEAP32[$4 >> 2] = HEAP32[($2 + 32 | 0) >> 2] | 0;
   i64toi32_i32$2 = $2;
   i64toi32_i32$1 = HEAP32[($2 + 24 | 0) >> 2] | 0;
   i64toi32_i32$0 = HEAP32[($2 + 28 | 0) >> 2] | 0;
   $48 = i64toi32_i32$1;
   i64toi32_i32$1 = $2;
   HEAP32[($2 + 8 | 0) >> 2] = $48;
   HEAP32[($2 + 12 | 0) >> 2] = i64toi32_i32$0;
   label$2 : {
    $5 = HEAP32[($1 + 4 | 0) >> 2] | 0;
    if (!$5) {
     break label$2
    }
    $1 = HEAP32[($1 + 8 | 0) >> 2] | 0;
    if (!$1) {
     break label$2
    }
    __rust_dealloc($5 | 0, $1 | 0, 1 | 0);
   }
   i64toi32_i32$2 = $2;
   i64toi32_i32$0 = HEAP32[($2 + 8 | 0) >> 2] | 0;
   i64toi32_i32$1 = HEAP32[($2 + 12 | 0) >> 2] | 0;
   $62 = i64toi32_i32$0;
   i64toi32_i32$0 = $3;
   HEAP32[i64toi32_i32$0 >> 2] = $62;
   HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
   HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = HEAP32[$4 >> 2] | 0;
  }
  HEAP32[($0 + 4 | 0) >> 2] = 1049072;
  HEAP32[$0 >> 2] = $3;
  global$0 = $2 + 64 | 0;
 }
 
 function core__slice___impl_20_5bT_5d___copy_from_slice__h88d00d50a6f9b6d3($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, i64toi32_i32$0 = 0;
  $4 = global$0 - 96 | 0;
  global$0 = $4;
  HEAP32[($4 + 8 | 0) >> 2] = $1;
  HEAP32[($4 + 12 | 0) >> 2] = $3;
  label$1 : {
   if (($1 | 0) != ($3 | 0)) {
    break label$1
   }
   memcpy($0 | 0, $2 | 0, $1 | 0) | 0;
   global$0 = $4 + 96 | 0;
   return;
  }
  HEAP32[(($4 + 40 | 0) + 20 | 0) >> 2] = 1;
  HEAP32[($4 + 52 | 0) >> 2] = 2;
  HEAP32[(($4 + 16 | 0) + 20 | 0) >> 2] = 3;
  i64toi32_i32$0 = 0;
  HEAP32[($4 + 20 | 0) >> 2] = 3;
  HEAP32[($4 + 24 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($4 + 16 | 0) >> 2] = 1048672;
  HEAP32[($4 + 44 | 0) >> 2] = 2;
  HEAP32[($4 + 64 | 0) >> 2] = $4 + 8 | 0;
  HEAP32[($4 + 68 | 0) >> 2] = $4 + 12 | 0;
  i64toi32_i32$0 = 0;
  HEAP32[($4 + 88 | 0) >> 2] = 4;
  HEAP32[($4 + 92 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($4 + 76 | 0) >> 2] = 1;
  HEAP32[($4 + 80 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($4 + 72 | 0) >> 2] = 1048748;
  HEAP32[($4 + 32 | 0) >> 2] = $4 + 40 | 0;
  HEAP32[($4 + 56 | 0) >> 2] = $4 + 72 | 0;
  HEAP32[($4 + 48 | 0) >> 2] = $4 + 68 | 0;
  HEAP32[($4 + 40 | 0) >> 2] = $4 + 64 | 0;
  core__panicking__panic_fmt__hdeb7979ab6591473($4 + 16 | 0 | 0, 1048756 | 0);
  abort();
 }
 
 function core__fmt__num___impl_20core__fmt__LowerHex_20for_20i32___fmt__h6ba9be131e4407d6($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0, $4 = 0;
  $2 = global$0 - 128 | 0;
  global$0 = $2;
  $3 = HEAP32[$0 >> 2] | 0;
  $0 = 0;
  label$1 : while (1) {
   $4 = $3 & 15 | 0;
   HEAP8[(($2 + $0 | 0) + 127 | 0) >> 0] = $4 >>> 0 < 10 >>> 0 ? $4 | 48 | 0 : $4 + 87 | 0;
   $0 = $0 + -1 | 0;
   $3 = $3 >>> 4 | 0;
   if ($3) {
    continue label$1
   }
   break label$1;
  };
  label$2 : {
   $3 = $0 + 128 | 0;
   if ($3 >>> 0 < 129 >>> 0) {
    break label$2
   }
   core__slice__slice_index_order_fail__hb3599d98ff22343b($3 | 0, 128 | 0);
   abort();
  }
  $0 = core__fmt__Formatter__pad_integral__h2aad3142c2299cf1($1 | 0, 1 | 0, 1049400 | 0, 2 | 0, ($2 + $0 | 0) + 128 | 0 | 0, 0 - $0 | 0 | 0) | 0;
  global$0 = $2 + 128 | 0;
  return $0 | 0;
 }
 
 function core__fmt__num___impl_20core__fmt__UpperHex_20for_20i32___fmt__hc8aba6a768cf831c($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0, $4 = 0;
  $2 = global$0 - 128 | 0;
  global$0 = $2;
  $3 = HEAP32[$0 >> 2] | 0;
  $0 = 0;
  label$1 : while (1) {
   $4 = $3 & 15 | 0;
   HEAP8[(($2 + $0 | 0) + 127 | 0) >> 0] = $4 >>> 0 < 10 >>> 0 ? $4 | 48 | 0 : $4 + 55 | 0;
   $0 = $0 + -1 | 0;
   $3 = $3 >>> 4 | 0;
   if ($3) {
    continue label$1
   }
   break label$1;
  };
  label$2 : {
   $3 = $0 + 128 | 0;
   if ($3 >>> 0 < 129 >>> 0) {
    break label$2
   }
   core__slice__slice_index_order_fail__hb3599d98ff22343b($3 | 0, 128 | 0);
   abort();
  }
  $0 = core__fmt__Formatter__pad_integral__h2aad3142c2299cf1($1 | 0, 1 | 0, 1049400 | 0, 2 | 0, ($2 + $0 | 0) + 128 | 0 | 0, 0 - $0 | 0 | 0) | 0;
  global$0 = $2 + 128 | 0;
  return $0 | 0;
 }
 
 function alloc__vec__Vec_T___reserve__h727cb7033b5d6430($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     $2 = HEAP32[($0 + 4 | 0) >> 2] | 0;
     $3 = HEAP32[($0 + 8 | 0) >> 2] | 0;
     if (($2 - $3 | 0) >>> 0 >= $1 >>> 0) {
      break label$3
     }
     $1 = $3 + $1 | 0;
     if ($1 >>> 0 < $3 >>> 0) {
      break label$1
     }
     $3 = $2 << 1 | 0;
     $1 = $3 >>> 0 > $1 >>> 0 ? $3 : $1;
     if (($1 | 0) < (0 | 0)) {
      break label$1
     }
     label$4 : {
      label$5 : {
       if ($2) {
        break label$5
       }
       $2 = __rust_alloc($1 | 0, 1 | 0) | 0;
       break label$4;
      }
      $2 = __rust_realloc(HEAP32[$0 >> 2] | 0 | 0, $2 | 0, 1 | 0, $1 | 0) | 0;
     }
     if (!$2) {
      break label$2
     }
     HEAP32[($0 + 4 | 0) >> 2] = $1;
     HEAP32[$0 >> 2] = $2;
    }
    return;
   }
   alloc__alloc__handle_alloc_error__hf59328f931d332cd($1 | 0, 1 | 0);
   abort();
  }
  alloc__raw_vec__capacity_overflow__hb992b30ca3913146();
  abort();
 }
 
 function hello_world($0) {
  $0 = $0 | 0;
  var $1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $2 = 0, $18 = 0, $30 = 0, $36 = 0;
  $1 = global$0 - 64 | 0;
  global$0 = $1;
  alloc__slice___impl_20alloc__borrow__ToOwned_20for_20_5bT_5d___to_owned__h68f30174633fa892($1 + 16 | 0 | 0, 1048576 | 0, 11 | 0);
  $2 = ($1 + 32 | 0) + 8 | 0;
  HEAP32[$2 >> 2] = HEAP32[(($1 + 16 | 0) + 8 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1 + 16 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1 + 20 | 0) >> 2] | 0;
  $18 = i64toi32_i32$0;
  i64toi32_i32$0 = $1;
  HEAP32[($1 + 32 | 0) >> 2] = $18;
  HEAP32[($1 + 36 | 0) >> 2] = i64toi32_i32$1;
  $alloc__vec__Vec_T__20as_20core__ops__deref__Deref___deref__hbb36ac8dbbbf8d2a($1 + 8 | 0 | 0, $1 + 32 | 0 | 0);
  HEAP32[(($1 + 48 | 0) + 8 | 0) >> 2] = HEAP32[$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1 + 32 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($1 + 36 | 0) >> 2] | 0;
  $30 = i64toi32_i32$1;
  i64toi32_i32$1 = $1;
  HEAP32[($1 + 48 | 0) >> 2] = $30;
  HEAP32[($1 + 52 | 0) >> 2] = i64toi32_i32$0;
  alloc__vec__Vec_T___into_boxed_slice__h52124383838fb404($1 | 0, $1 + 48 | 0 | 0);
  i64toi32_i32$0 = HEAP32[$1 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $36 = i64toi32_i32$0;
  i64toi32_i32$0 = $0;
  HEAP32[i64toi32_i32$0 >> 2] = $36;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  global$0 = $1 + 64 | 0;
 }
 
 function alloc__raw_vec__RawVec_T_2cA___shrink_to_fit__hf3494e1129a55a43($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       $2 = HEAP32[($0 + 4 | 0) >> 2] | 0;
       if ($2 >>> 0 < $1 >>> 0) {
        break label$5
       }
       if (!$1) {
        break label$4
       }
       if (($2 | 0) == ($1 | 0)) {
        break label$1
       }
       $2 = __rust_realloc(HEAP32[$0 >> 2] | 0 | 0, $2 | 0, 1 | 0, $1 | 0) | 0;
       if (!$2) {
        break label$3
       }
       HEAP32[$0 >> 2] = $2;
       break label$2;
      }
      core__panicking__panic__hb5daa85c7c72fc62(1048852 | 0, 36 | 0, 1048912 | 0);
      abort();
     }
     label$6 : {
      if (!$2) {
       break label$6
      }
      __rust_dealloc(HEAP32[$0 >> 2] | 0 | 0, $2 | 0, 1 | 0);
     }
     HEAP32[$0 >> 2] = 1;
     $1 = 0;
     break label$2;
    }
    alloc__alloc__handle_alloc_error__hf59328f931d332cd($1 | 0, 1 | 0);
    abort();
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1;
  }
 }
 
 function std__panicking__continue_panic_fmt__hf8630aaa243736ee($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, i64toi32_i32$0 = 0, $3 = 0, i64toi32_i32$1 = 0, $4 = 0, $28 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $1 = global$0 - 48 | 0;
  global$0 = $1;
  $2 = core__option__Option_T___unwrap__h6b4acf39e0c4b362(core__panic__PanicInfo__location__h7cabcd6b284e868e($0 | 0) | 0 | 0) | 0;
  $3 = core__option__Option_T___unwrap__h87b25263870e77eb(core__panic__PanicInfo__message__h72194106e4ac6c62($0 | 0) | 0 | 0) | 0;
  core__panic__Location__file__h9d2861161ef3d5e0($1 + 8 | 0 | 0, $2 | 0);
  i64toi32_i32$0 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($1 + 12 | 0) >> 2] | 0;
  $4 = core__panic__Location__line__h47c2d243affea1ef($2 | 0) | 0;
  (wasm2js_i32$0 = $1, wasm2js_i32$1 = core__panic__Location__column__hbbfe8216b927705d($2 | 0) | 0), HEAP32[(wasm2js_i32$0 + 28 | 0) >> 2] = wasm2js_i32$1;
  HEAP32[($1 + 24 | 0) >> 2] = $4;
  $28 = i64toi32_i32$0;
  i64toi32_i32$0 = $1;
  HEAP32[($1 + 16 | 0) >> 2] = $28;
  HEAP32[($1 + 20 | 0) >> 2] = i64toi32_i32$1;
  HEAP32[($1 + 36 | 0) >> 2] = 0;
  HEAP32[($1 + 32 | 0) >> 2] = $3;
  std__panicking__rust_panic_with_hook__hdf14da40c6b51ea2($1 + 32 | 0 | 0, 1049052 | 0, core__panic__PanicInfo__message__h72194106e4ac6c62($0 | 0) | 0 | 0, $1 + 16 | 0 | 0);
  abort();
 }
 
 function core__panicking__panic_bounds_check__h48b559825fef6c92($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = global$0 - 48 | 0;
  global$0 = $3;
  HEAP32[($3 + 4 | 0) >> 2] = $2;
  HEAP32[$3 >> 2] = $1;
  HEAP32[($3 + 28 | 0) >> 2] = 2;
  HEAP32[($3 + 44 | 0) >> 2] = 16;
  HEAP32[($3 + 12 | 0) >> 2] = 2;
  HEAP32[($3 + 16 | 0) >> 2] = 0;
  HEAP32[($3 + 8 | 0) >> 2] = 1049212;
  HEAP32[($3 + 36 | 0) >> 2] = 16;
  HEAP32[($3 + 24 | 0) >> 2] = $3 + 32 | 0;
  HEAP32[($3 + 40 | 0) >> 2] = $3;
  HEAP32[($3 + 32 | 0) >> 2] = $3 + 4 | 0;
  core__panicking__panic_fmt__hdeb7979ab6591473($3 + 8 | 0 | 0, $0 | 0);
  abort();
 }
 
 function core__slice__slice_index_order_fail__hb3599d98ff22343b($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = global$0 - 48 | 0;
  global$0 = $2;
  HEAP32[($2 + 4 | 0) >> 2] = $1;
  HEAP32[$2 >> 2] = $0;
  HEAP32[($2 + 28 | 0) >> 2] = 2;
  HEAP32[($2 + 44 | 0) >> 2] = 16;
  HEAP32[($2 + 12 | 0) >> 2] = 2;
  HEAP32[($2 + 16 | 0) >> 2] = 0;
  HEAP32[($2 + 8 | 0) >> 2] = 1049368;
  HEAP32[($2 + 36 | 0) >> 2] = 16;
  HEAP32[($2 + 24 | 0) >> 2] = $2 + 32 | 0;
  HEAP32[($2 + 40 | 0) >> 2] = $2 + 4 | 0;
  HEAP32[($2 + 32 | 0) >> 2] = $2;
  core__panicking__panic_fmt__hdeb7979ab6591473($2 + 8 | 0 | 0, 1049384 | 0);
  abort();
 }
 
 function $core__fmt__Arguments_20as_20core__fmt__Display___fmt__h9a4f36598b3e452f($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $2 = 0, $3 = 0, $17 = 0, $23 = 0, $26 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  $3 = HEAP32[($1 + 28 | 0) >> 2] | 0;
  $1 = HEAP32[($1 + 24 | 0) >> 2] | 0;
  i64toi32_i32$2 = $0 + 16 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $17 = i64toi32_i32$0;
  i64toi32_i32$0 = ($2 + 8 | 0) + 16 | 0;
  HEAP32[i64toi32_i32$0 >> 2] = $17;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $0 + 8 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $23 = i64toi32_i32$1;
  i64toi32_i32$1 = ($2 + 8 | 0) + 8 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $23;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $26 = i64toi32_i32$0;
  i64toi32_i32$0 = $2;
  HEAP32[(i64toi32_i32$0 + 8 | 0) >> 2] = $26;
  HEAP32[(i64toi32_i32$0 + 12 | 0) >> 2] = i64toi32_i32$1;
  $0 = core__fmt__write__h1f444f4312eb6c27($1 | 0, $3 | 0, i64toi32_i32$0 + 8 | 0 | 0) | 0;
  global$0 = i64toi32_i32$0 + 32 | 0;
  return $0 | 0;
 }
 
 function $_mut_20W_20as_20core__fmt__Write___write_fmt__hd463b168c4bfff39($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $14 = 0, $20 = 0, $23 = 0;
  $2 = global$0 - 32 | 0;
  global$0 = $2;
  HEAP32[($2 + 4 | 0) >> 2] = HEAP32[$0 >> 2] | 0;
  i64toi32_i32$2 = $1 + 16 | 0;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $14 = i64toi32_i32$0;
  i64toi32_i32$0 = ($2 + 8 | 0) + 16 | 0;
  HEAP32[i64toi32_i32$0 >> 2] = $14;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
  i64toi32_i32$2 = $1 + 8 | 0;
  i64toi32_i32$1 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$0 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $20 = i64toi32_i32$1;
  i64toi32_i32$1 = ($2 + 8 | 0) + 8 | 0;
  HEAP32[i64toi32_i32$1 >> 2] = $20;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $23 = i64toi32_i32$0;
  i64toi32_i32$0 = $2;
  HEAP32[($2 + 8 | 0) >> 2] = $23;
  HEAP32[($2 + 12 | 0) >> 2] = i64toi32_i32$1;
  $1 = core__fmt__write__h1f444f4312eb6c27($2 + 4 | 0 | 0, 1048932 | 0, $2 + 8 | 0 | 0) | 0;
  global$0 = $2 + 32 | 0;
  return $1 | 0;
 }
 
 function __rdl_realloc($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  label$1 : {
   label$2 : {
    if ((dlmalloc__dlmalloc__Dlmalloc__malloc_alignment__h0d3f8a5e6e681466(1049700 | 0) | 0) >>> 0 >= $2 >>> 0) {
     break label$2
    }
    label$3 : {
     label$4 : {
      if ((dlmalloc__dlmalloc__Dlmalloc__malloc_alignment__h0d3f8a5e6e681466(1049700 | 0) | 0) >>> 0 >= $2 >>> 0) {
       break label$4
      }
      $2 = dlmalloc__dlmalloc__Dlmalloc__memalign__ha7187a0adc17c42a(1049700 | 0, $2 | 0, $3 | 0) | 0;
      break label$3;
     }
     $2 = dlmalloc__dlmalloc__Dlmalloc__malloc__h363feeec79793de2(1049700 | 0, $3 | 0) | 0;
    }
    if ($2) {
     break label$1
    }
    return 0 | 0;
   }
   return dlmalloc__dlmalloc__Dlmalloc__realloc__ha0cd548de3c07564(1049700 | 0, $0 | 0, $3 | 0) | 0 | 0;
  }
  $2 = memcpy($2 | 0, $0 | 0, ($1 >>> 0 > $3 >>> 0 ? $3 : $1) | 0) | 0;
  dlmalloc__dlmalloc__Dlmalloc__free__h57aed881a8c806e8(1049700 | 0, $0 | 0);
  return $2 | 0;
 }
 
 function alloc__raw_vec__RawVec_T_2cA___allocate_in__h0cc93f00f0902b17($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  label$1 : {
   label$2 : {
    if (($1 | 0) <= (-1 | 0)) {
     break label$2
    }
    label$3 : {
     label$4 : {
      if ($1) {
       break label$4
      }
      $2 = 1;
      break label$3;
     }
     label$5 : {
      label$6 : {
       if ($2) {
        break label$6
       }
       $2 = __rust_alloc($1 | 0, 1 | 0) | 0;
       break label$5;
      }
      $2 = __rust_alloc_zeroed($1 | 0, 1 | 0) | 0;
     }
     if (!$2) {
      break label$1
     }
    }
    $2 = $T_20as_20core__convert__Into_U____into__h332090228b6e4a29($2 | 0) | 0;
    HEAP32[($0 + 4 | 0) >> 2] = $1;
    HEAP32[$0 >> 2] = $2;
    return;
   }
   alloc__raw_vec__RawVec_T_2cA___allocate_in___7b_7bclosure_7d_7d__hc38fd248d8449d52();
   abort();
  }
  alloc__alloc__handle_alloc_error__hf59328f931d332cd($1 | 0, 1 | 0);
  abort();
 }
 
 function alloc__slice___impl_20alloc__borrow__ToOwned_20for_20_5bT_5d___to_owned__h68f30174633fa892($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $13 = 0, $26 = 0;
  $3 = global$0 - 32 | 0;
  global$0 = $3;
  alloc__raw_vec__RawVec_T_2cA___allocate_in__h0cc93f00f0902b17($3 + 8 | 0 | 0, $2 | 0, 0 | 0);
  HEAP32[($3 + 24 | 0) >> 2] = 0;
  i64toi32_i32$0 = HEAP32[($3 + 8 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3 + 12 | 0) >> 2] | 0;
  $13 = i64toi32_i32$0;
  i64toi32_i32$0 = $3;
  HEAP32[($3 + 16 | 0) >> 2] = $13;
  HEAP32[($3 + 20 | 0) >> 2] = i64toi32_i32$1;
  $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend__T_2ccore__slice__Iter_T_____spec_extend__h4426b951454b27e0($3 + 16 | 0 | 0, $1 | 0, $1 + $2 | 0 | 0);
  HEAP32[($0 + 8 | 0) >> 2] = HEAP32[($3 + 24 | 0) >> 2] | 0;
  i64toi32_i32$1 = HEAP32[($3 + 16 | 0) >> 2] | 0;
  i64toi32_i32$0 = HEAP32[($3 + 20 | 0) >> 2] | 0;
  $26 = i64toi32_i32$1;
  i64toi32_i32$1 = $0;
  HEAP32[i64toi32_i32$1 >> 2] = $26;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  global$0 = $3 + 32 | 0;
 }
 
 function $alloc__vec__Vec_T__20as_20alloc__vec__SpecExtend__T_2ccore__slice__Iter_T_____spec_extend__h4426b951454b27e0($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0;
  $3 = global$0 - 16 | 0;
  global$0 = $3;
  $2 = $2 - $1 | 0;
  alloc__raw_vec__RawVec_T_2cA___reserve__hce84c854e63f7ffe($0 | 0, HEAP32[($0 + 8 | 0) >> 2] | 0 | 0, $2 | 0);
  $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  HEAP32[($0 + 8 | 0) >> 2] = $4 + $2 | 0;
  $alloc__vec__Vec_T__20as_20core__ops__deref__DerefMut___deref_mut__h8ae8713760786f59($3 + 8 | 0 | 0, $0 | 0);
  core__slice___impl_20_5bT_5d___copy_from_slice__h88d00d50a6f9b6d3($4 + (HEAP32[($3 + 8 | 0) >> 2] | 0) | 0 | 0, (HEAP32[($3 + 12 | 0) >> 2] | 0) - $4 | 0 | 0, $1 | 0, $2 | 0);
  global$0 = $3 + 16 | 0;
 }
 
 function alloc__raw_vec__RawVec_T_2cA___reserve__hce84c854e63f7ffe($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = global$0 - 16 | 0;
  global$0 = $3;
  alloc__raw_vec__RawVec_T_2cA___reserve_internal__hdacdc94dd33f2aaf($3 | 0, $0 | 0, $1 | 0, $2 | 0, 1 | 0, 1 | 0);
  label$1 : {
   label$2 : {
    if ((HEAP32[$3 >> 2] | 0 | 0) != (1 | 0)) {
     break label$2
    }
    if (!(HEAP32[($3 + 8 | 0) >> 2] | 0)) {
     break label$1
    }
    core__panicking__panic__hb5daa85c7c72fc62(1048795 | 0, 40 | 0, 1048836 | 0);
    abort();
   }
   global$0 = $3 + 16 | 0;
   return;
  }
  alloc__raw_vec__capacity_overflow__hb992b30ca3913146();
  abort();
 }
 
 function core__fmt__Formatter__pad_integral__write_prefix__h306a1569ef431922($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0;
  label$1 : {
   label$2 : {
    if (($1 | 0) == (1114112 | 0)) {
     break label$2
    }
    $4 = 1;
    if (FUNCTION_TABLE[HEAP32[((HEAP32[($0 + 28 | 0) >> 2] | 0) + 16 | 0) >> 2] | 0](HEAP32[($0 + 24 | 0) >> 2] | 0, $1) | 0) {
     break label$1
    }
   }
   label$3 : {
    if ($2) {
     break label$3
    }
    return 0 | 0;
   }
   $4 = FUNCTION_TABLE[HEAP32[((HEAP32[($0 + 28 | 0) >> 2] | 0) + 12 | 0) >> 2] | 0](HEAP32[($0 + 24 | 0) >> 2] | 0, $2, $3) | 0;
  }
  return $4 | 0;
 }
 
 function __rdl_alloc_zeroed($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   label$2 : {
    if ((dlmalloc__dlmalloc__Dlmalloc__malloc_alignment__h0d3f8a5e6e681466(1049700 | 0) | 0) >>> 0 >= $1 >>> 0) {
     break label$2
    }
    $1 = dlmalloc__dlmalloc__Dlmalloc__memalign__ha7187a0adc17c42a(1049700 | 0, $1 | 0, $0 | 0) | 0;
    break label$1;
   }
   $1 = dlmalloc__dlmalloc__Dlmalloc__malloc__h363feeec79793de2(1049700 | 0, $0 | 0) | 0;
  }
  label$3 : {
   if (!$1) {
    break label$3
   }
   if (!(dlmalloc__dlmalloc__Dlmalloc__calloc_must_clear__h10387ee288f2478c(1049700 | 0, $1 | 0) | 0)) {
    break label$3
   }
   memset($1 | 0, 0 | 0, $0 | 0) | 0;
  }
  return $1 | 0;
 }
 
 function core__panicking__panic__hb5daa85c7c72fc62($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, i64toi32_i32$0 = 0;
  $3 = global$0 - 32 | 0;
  global$0 = $3;
  i64toi32_i32$0 = 0;
  HEAP32[($3 + 16 | 0) >> 2] = 4;
  HEAP32[($3 + 20 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  HEAP32[($3 + 4 | 0) >> 2] = 1;
  HEAP32[($3 + 8 | 0) >> 2] = i64toi32_i32$0;
  HEAP32[($3 + 28 | 0) >> 2] = $1;
  HEAP32[($3 + 24 | 0) >> 2] = $0;
  HEAP32[$3 >> 2] = $3 + 24 | 0;
  core__panicking__panic_fmt__hdeb7979ab6591473($3 | 0, $2 | 0);
  abort();
 }
 
 function memcpy($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  label$1 : {
   if (!$2) {
    break label$1
   }
   $3 = $0;
   label$2 : while (1) {
    HEAP8[$3 >> 0] = HEAPU8[$1 >> 0] | 0;
    $3 = $3 + 1 | 0;
    $1 = $1 + 1 | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue label$2
    }
    break label$2;
   };
  }
  return $0 | 0;
 }
 
 function $_T_20as_20core__fmt__Debug___fmt__hcb028e1ef481b650($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $0 = HEAP32[$0 >> 2] | 0;
  label$1 : {
   if (core__fmt__Formatter__debug_lower_hex__h379147154424fedc($1 | 0) | 0) {
    break label$1
   }
   label$2 : {
    if (core__fmt__Formatter__debug_upper_hex__h6c2cecf15a52f9a0($1 | 0) | 0) {
     break label$2
    }
    return core__fmt__num__imp___impl_20core__fmt__Display_20for_20u32___fmt__hb659deebf3039af8($0 | 0, $1 | 0) | 0 | 0;
   }
   return core__fmt__num___impl_20core__fmt__UpperHex_20for_20i32___fmt__hc8aba6a768cf831c($0 | 0, $1 | 0) | 0 | 0;
  }
  return core__fmt__num___impl_20core__fmt__LowerHex_20for_20i32___fmt__h6ba9be131e4407d6($0 | 0, $1 | 0) | 0 | 0;
 }
 
 function alloc__vec__Vec_T___into_boxed_slice__h52124383838fb404($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  label$1 : {
   $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
   $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
   if (($2 | 0) == ($3 | 0)) {
    break label$1
   }
   alloc__raw_vec__RawVec_T_2cA___shrink_to_fit__hf3494e1129a55a43($1 | 0, $3 | 0);
   $2 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  }
  HEAP32[($0 + 4 | 0) >> 2] = $2;
  HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
 }
 
 function $_mut_20W_20as_20core__fmt__Write___write_str__hf1c1d3408b18ae52($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $0 = HEAP32[$0 >> 2] | 0;
  alloc__vec__Vec_T___reserve__h727cb7033b5d6430($0 | 0, $2 | 0);
  $3 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  HEAP32[($0 + 8 | 0) >> 2] = $3 + $2 | 0;
  memcpy($3 + (HEAP32[$0 >> 2] | 0) | 0 | 0, $1 | 0, $2 | 0) | 0;
  return 0 | 0;
 }
 
 function core__panicking__panic_fmt__hdeb7979ab6591473($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  HEAP32[($2 + 12 | 0) >> 2] = $1;
  HEAP32[($2 + 8 | 0) >> 2] = $0;
  HEAP32[($2 + 4 | 0) >> 2] = 1049144;
  HEAP32[$2 >> 2] = 1;
  rust_begin_unwind($2 | 0);
  abort();
 }
 
 function memset($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  label$1 : {
   if (!$2) {
    break label$1
   }
   $3 = $0;
   label$2 : while (1) {
    HEAP8[$3 >> 0] = $1;
    $3 = $3 + 1 | 0;
    $2 = $2 + -1 | 0;
    if ($2) {
     continue label$2
    }
    break label$2;
   };
  }
  return $0 | 0;
 }
 
 function core__ptr__real_drop_in_place__hbf27f7a61dec9c9e($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   if (!$1) {
    break label$1
   }
   $0 = HEAP32[($0 + 8 | 0) >> 2] | 0;
   if (!$0) {
    break label$1
   }
   __rust_dealloc($1 | 0, $0 | 0, 1 | 0);
  }
 }
 
 function rust_panic($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = global$0 - 16 | 0;
  global$0 = $2;
  HEAP32[($2 + 12 | 0) >> 2] = $1;
  HEAP32[($2 + 8 | 0) >> 2] = $0;
  __rust_start_panic($2 + 8 | 0 | 0) | 0;
  abort();
 }
 
 function wasm_bindgen__anyref__HEAP_SLAB____getit__h2f1f42bc2eeb8abf() {
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0;
  label$1 : {
   if (HEAP32[(0 + 1049656 | 0) >> 2] | 0) {
    break label$1
   }
   i64toi32_i32$1 = 0;
   i64toi32_i32$0 = 0;
   HEAP32[(i64toi32_i32$1 + 1049660 | 0) >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 1049664 | 0) >> 2] = i64toi32_i32$0;
   HEAP32[(0 + 1049656 | 0) >> 2] = 4;
   i64toi32_i32$1 = 0;
   i64toi32_i32$0 = 0;
   HEAP32[(i64toi32_i32$1 + 1049668 | 0) >> 2] = 0;
   HEAP32[(i64toi32_i32$1 + 1049672 | 0) >> 2] = i64toi32_i32$0;
  }
  return 1049656 | 0;
 }
 
 function __rdl_alloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   if ((dlmalloc__dlmalloc__Dlmalloc__malloc_alignment__h0d3f8a5e6e681466(1049700 | 0) | 0) >>> 0 >= $1 >>> 0) {
    break label$1
   }
   return dlmalloc__dlmalloc__Dlmalloc__memalign__ha7187a0adc17c42a(1049700 | 0, $1 | 0, $0 | 0) | 0 | 0;
  }
  return dlmalloc__dlmalloc__Dlmalloc__malloc__h363feeec79793de2(1049700 | 0, $0 | 0) | 0 | 0;
 }
 
 function core__panic__Location__internal_constructor__hb8113ea1cbf635a6($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  HEAP32[($0 + 12 | 0) >> 2] = $4;
  HEAP32[($0 + 8 | 0) >> 2] = $3;
  HEAP32[($0 + 4 | 0) >> 2] = $2;
  HEAP32[$0 >> 2] = $1;
 }
 
 function core__ptr__real_drop_in_place__h0bedcb801a2d087d($0) {
  $0 = $0 | 0;
  var $1 = 0;
  label$1 : {
   $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
   if (!$1) {
    break label$1
   }
   __rust_dealloc(HEAP32[$0 >> 2] | 0 | 0, $1 | 0, 1 | 0);
  }
 }
 
 function alloc__raw_vec__RawVec_T_2cA___current_layout__h329fd55a577293d4($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  HEAP32[$0 >> 2] = $1;
  HEAP32[($0 + 4 | 0) >> 2] = ($1 | 0) != (0 | 0);
 }
 
 function rust_oom($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = HEAP32[(0 + 1049684 | 0) >> 2] | 0;
  FUNCTION_TABLE[$2 ? $2 : 4]($0, $1);
  abort();
 }
 
 function core__option__Option_T___unwrap__h6b4acf39e0c4b362($0) {
  $0 = $0 | 0;
  label$1 : {
   if ($0) {
    break label$1
   }
   core__panicking__panic__hb5daa85c7c72fc62(1048972 | 0, 43 | 0, 1049036 | 0);
   abort();
  }
  return $0 | 0;
 }
 
 function core__option__Option_T___unwrap__h87b25263870e77eb($0) {
  $0 = $0 | 0;
  label$1 : {
   if ($0) {
    break label$1
   }
   core__panicking__panic__hb5daa85c7c72fc62(1048972 | 0, 43 | 0, 1049036 | 0);
   abort();
  }
  return $0 | 0;
 }
 
 function __rust_realloc($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  return __rdl_realloc($0 | 0, $1 | 0, $2 | 0, $3 | 0) | 0 | 0;
 }
 
 function __wbindgen_free($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  label$1 : {
   if (!$1) {
    break label$1
   }
   __rust_dealloc($0 | 0, $1 | 0, 4 | 0);
  }
 }
 
 function $alloc__vec__Vec_T__20as_20core__ops__deref__Deref___deref__hbb36ac8dbbbf8d2a($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 8 | 0) >> 2] | 0;
  HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
 }
 
 function $alloc__vec__Vec_T__20as_20core__ops__deref__DerefMut___deref_mut__h8ae8713760786f59($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 4 | 0) >> 2] = HEAP32[($1 + 8 | 0) >> 2] | 0;
  HEAP32[$0 >> 2] = HEAP32[$1 >> 2] | 0;
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__calloc_must_clear__h10387ee288f2478c($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return ((HEAPU8[($1 + -4 | 0) >> 0] | 0) & 3 | 0 | 0) != (0 | 0) | 0;
 }
 
 function __rust_alloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return __rdl_alloc($0 | 0, $1 | 0) | 0 | 0;
 }
 
 function __rust_alloc_zeroed($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return __rdl_alloc_zeroed($0 | 0, $1 | 0) | 0 | 0;
 }
 
 function $T_20as_20core__convert__From_T____from__ha989478891982766($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $2;
  HEAP32[$0 >> 2] = $1;
 }
 
 function core__fmt__Formatter__debug_lower_hex__h379147154424fedc($0) {
  $0 = $0 | 0;
  return ((HEAPU8[$0 >> 0] | 0) & 16 | 0) >>> 4 | 0 | 0;
 }
 
 function core__fmt__Formatter__debug_upper_hex__h6c2cecf15a52f9a0($0) {
  $0 = $0 | 0;
  return ((HEAPU8[$0 >> 0] | 0) & 32 | 0) >>> 5 | 0 | 0;
 }
 
 function __rust_dealloc($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  __rdl_dealloc($0 | 0, $1 | 0, $2 | 0);
  return;
 }
 
 function alloc__raw_vec__capacity_overflow__hb992b30ca3913146() {
  core__panicking__panic__hb5daa85c7c72fc62(1049111 | 0, 17 | 0, 1049128 | 0);
  abort();
 }
 
 function core__fmt__num__imp___impl_20core__fmt__Display_20for_20u32___fmt__hb659deebf3039af8($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$1 = 0;
  i64toi32_i32$1 = 0;
  return core__fmt__num__imp__fmt_u64__hffaa8c8825c31114(HEAP32[$0 >> 2] | 0 | 0, i64toi32_i32$1 | 0, 1 | 0, $1 | 0) | 0 | 0;
 }
 
 function core__fmt__ArgumentV1__show_usize__h2f56756168abcf9b($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$1 = 0;
  i64toi32_i32$1 = 0;
  return core__fmt__num__imp__fmt_u64__hffaa8c8825c31114(HEAP32[$0 >> 2] | 0 | 0, i64toi32_i32$1 | 0, 1 | 0, $1 | 0) | 0 | 0;
 }
 
 function alloc__alloc__handle_alloc_error__hf59328f931d332cd($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  rust_oom($0 | 0, $1 | 0);
  abort();
 }
 
 function core__panic__Location__file__h9d2861161ef3d5e0($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, $4 = 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$0 = HEAP32[i64toi32_i32$2 >> 2] | 0;
  i64toi32_i32$1 = HEAP32[(i64toi32_i32$2 + 4 | 0) >> 2] | 0;
  $4 = i64toi32_i32$0;
  i64toi32_i32$0 = $0;
  HEAP32[i64toi32_i32$0 >> 2] = $4;
  HEAP32[(i64toi32_i32$0 + 4 | 0) >> 2] = i64toi32_i32$1;
 }
 
 function sum($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $1 + $0 | 0 | 0;
 }
 
 function __rdl_dealloc($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  dlmalloc__dlmalloc__Dlmalloc__free__h57aed881a8c806e8(1049700 | 0, $0 | 0);
 }
 
 function rust_begin_unwind($0) {
  $0 = $0 | 0;
  std__panicking__continue_panic_fmt__hf8630aaa243736ee($0 | 0);
  abort();
 }
 
 function alloc__raw_vec__RawVec_T_2cA___allocate_in___7b_7bclosure_7d_7d__hc38fd248d8449d52() {
  alloc__raw_vec__capacity_overflow__hb992b30ca3913146();
  abort();
 }
 
 function core__panic__PanicInfo__message__h72194106e4ac6c62($0) {
  $0 = $0 | 0;
  return HEAP32[($0 + 8 | 0) >> 2] | 0 | 0;
 }
 
 function core__panic__PanicInfo__location__h7cabcd6b284e868e($0) {
  $0 = $0 | 0;
  return HEAP32[($0 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function core__panic__Location__line__h47c2d243affea1ef($0) {
  $0 = $0 | 0;
  return HEAP32[($0 + 8 | 0) >> 2] | 0 | 0;
 }
 
 function core__panic__Location__column__hbbfe8216b927705d($0) {
  $0 = $0 | 0;
  return HEAP32[($0 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $T_20as_20core__convert__Into_U____into__h332090228b6e4a29($0) {
  $0 = $0 | 0;
  return $0 | 0;
 }
 
 function $T_20as_20core__any__Any___type_id__h8757c758dbd9e5ff($0) {
  $0 = $0 | 0;
  i64toi32_i32$HIGH_BITS = 1840782228;
  return -1848013517 | 0;
 }
 
 function $T_20as_20core__any__Any___type_id__hc9fd1ac32439450b($0) {
  $0 = $0 | 0;
  i64toi32_i32$HIGH_BITS = -1797672317;
  return 1620456622 | 0;
 }
 
 function __rust_start_panic($0) {
  $0 = $0 | 0;
  abort();
 }
 
 function dlmalloc__dlmalloc__Dlmalloc__malloc_alignment__h0d3f8a5e6e681466($0) {
  $0 = $0 | 0;
  return 8 | 0;
 }
 
 function $T_20as_20core__any__Any___type_id__hb5877568404f30de($0) {
  $0 = $0 | 0;
  i64toi32_i32$HIGH_BITS = 1840782228;
  return -1848013517 | 0;
 }
 
 function core__ptr__real_drop_in_place__h12b0e19bc2b0aba7($0) {
  $0 = $0 | 0;
 }
 
 function $std__sys_common__thread_local__Key_20as_20core__ops__drop__Drop___drop__h10f6c27270399835($0) {
  $0 = $0 | 0;
 }
 
 function std__alloc__default_alloc_error_hook__hc355fb01858dc17f($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
 }
 
 function core__ptr__real_drop_in_place__h812c5b87254dd4a7($0) {
  $0 = $0 | 0;
 }
 
 function legalfunc$wasm2js_scratch_store_i64($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $8 = 0, $2 = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = $0$hi;
  $2 = $0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $8 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $8 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  legalimport$wasm2js_scratch_store_i64($2 | 0, $8 | 0);
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21 = 0, $22 = 0, var$6 = 0, $24 = 0, $17 = 0, $18 = 0, $23 = 0, $29 = 0, $45 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17 = Math_imul(var$4, var$5);
  $18 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23 = $17 + Math_imul($18, $21) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29 = $23 + Math_imul($22, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45 = $29 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$3 = 0, var$4 = 0, var$5 = 0, var$5$hi = 0, var$6 = 0, var$6$hi = 0, i64toi32_i32$6 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, var$8$hi = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, var$7$hi = 0, $49 = 0, $63$hi = 0, $65 = 0, $65$hi = 0, $120$hi = 0, $129$hi = 0, $134$hi = 0, var$8 = 0, $140 = 0, $140$hi = 0, $142$hi = 0, $144 = 0, $144$hi = 0, $151 = 0, $151$hi = 0, $154$hi = 0, var$7 = 0, $165$hi = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             i64toi32_i32$0 = var$0$hi;
             i64toi32_i32$2 = var$0;
             i64toi32_i32$1 = 0;
             i64toi32_i32$3 = 32;
             i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
             if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
              i64toi32_i32$1 = 0;
              $37 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
             } else {
              i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
              $37 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
             }
             var$2 = $37;
             if (var$2) {
              block : {
               i64toi32_i32$1 = var$1$hi;
               var$3 = var$1;
               if (!var$3) {
                break label$11
               }
               i64toi32_i32$1 = var$1$hi;
               i64toi32_i32$0 = var$1;
               i64toi32_i32$2 = 0;
               i64toi32_i32$3 = 32;
               i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
               if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
                i64toi32_i32$2 = 0;
                $38 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
               } else {
                i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
                $38 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
               }
               var$4 = $38;
               if (!var$4) {
                break label$9
               }
               var$2 = Math_clz32(var$4) - Math_clz32(var$2) | 0;
               if (var$2 >>> 0 <= 31 >>> 0) {
                break label$8
               }
               break label$2;
              }
             }
             i64toi32_i32$2 = var$1$hi;
             i64toi32_i32$1 = var$1;
             i64toi32_i32$0 = 1;
             i64toi32_i32$3 = 0;
             if (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
              break label$2
             }
             i64toi32_i32$1 = var$0$hi;
             var$2 = var$0;
             i64toi32_i32$1 = var$1$hi;
             var$3 = var$1;
             var$2 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
             i64toi32_i32$1 = 0;
             legalfunc$wasm2js_scratch_store_i64(var$0 - Math_imul(var$2, var$3) | 0 | 0, i64toi32_i32$1 | 0);
             i64toi32_i32$1 = 0;
             i64toi32_i32$2 = var$2;
             i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
             return i64toi32_i32$2 | 0;
            }
            i64toi32_i32$2 = var$1$hi;
            i64toi32_i32$3 = var$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$1 = 0;
             $39 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
            } else {
             i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
             $39 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
            }
            var$3 = $39;
            i64toi32_i32$1 = var$0$hi;
            if (!var$0) {
             break label$7
            }
            if (!var$3) {
             break label$6
            }
            var$4 = var$3 + -1 | 0;
            if (var$4 & var$3 | 0) {
             break label$6
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$2 = var$4 & var$2 | 0;
            i64toi32_i32$3 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
             $40 = 0;
            } else {
             i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
             $40 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
            }
            $63$hi = i64toi32_i32$3;
            i64toi32_i32$3 = var$0$hi;
            i64toi32_i32$1 = var$0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = -1;
            i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
            $65 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
            $65$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $63$hi;
            i64toi32_i32$3 = $40;
            i64toi32_i32$1 = $65$hi;
            i64toi32_i32$0 = $65;
            i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
            legalfunc$wasm2js_scratch_store_i64(i64toi32_i32$3 | i64toi32_i32$0 | 0 | 0, i64toi32_i32$1 | 0);
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = var$2 >>> ((__wasm_ctz_i32(var$3 | 0) | 0) & 31 | 0) | 0;
            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
            return i64toi32_i32$3 | 0;
           }
          }
          var$4 = var$3 + -1 | 0;
          if (!(var$4 & var$3 | 0)) {
           break label$5
          }
          var$2 = (Math_clz32(var$3) + 33 | 0) - Math_clz32(var$2) | 0;
          var$3 = 0 - var$2 | 0;
          break label$3;
         }
         var$3 = 63 - var$2 | 0;
         var$2 = var$2 + 1 | 0;
         break label$3;
        }
        var$4 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
        i64toi32_i32$3 = 0;
        i64toi32_i32$2 = var$2 - Math_imul(var$4, var$3) | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 32;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $41 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $41 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        legalfunc$wasm2js_scratch_store_i64($41 | 0, i64toi32_i32$1 | 0);
        i64toi32_i32$1 = 0;
        i64toi32_i32$2 = var$4;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
       }
       var$2 = Math_clz32(var$3) - Math_clz32(var$2) | 0;
       if (var$2 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      legalfunc$wasm2js_scratch_store_i64(var$4 & var$0 | 0 | 0, i64toi32_i32$2 | 0);
      if ((var$3 | 0) == (1 | 0)) {
       break label$1
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      $120$hi = i64toi32_i32$2;
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$3 = var$0;
      i64toi32_i32$1 = $120$hi;
      i64toi32_i32$0 = __wasm_ctz_i32(var$3 | 0) | 0;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = 0;
       $42 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
       $42 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$3 = $42;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
      return i64toi32_i32$3 | 0;
     }
     var$3 = 63 - var$2 | 0;
     var$2 = var$2 + 1 | 0;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$3 = 0;
    $129$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$2 = var$0;
    i64toi32_i32$1 = $129$hi;
    i64toi32_i32$0 = var$2 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $43 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
     $43 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    var$5 = $43;
    var$5$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$1 = 0;
    $134$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$3 = var$0;
    i64toi32_i32$2 = $134$hi;
    i64toi32_i32$0 = var$3 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
     $44 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $44 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    }
    var$0 = $44;
    var$0$hi = i64toi32_i32$2;
    label$13 : {
     if (var$2) {
      block3 : {
       i64toi32_i32$2 = var$1$hi;
       i64toi32_i32$1 = var$1;
       i64toi32_i32$3 = -1;
       i64toi32_i32$0 = -1;
       i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
       i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
       if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
        i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
       }
       var$8 = i64toi32_i32$4;
       var$8$hi = i64toi32_i32$5;
       label$15 : while (1) {
        i64toi32_i32$5 = var$5$hi;
        i64toi32_i32$2 = var$5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
         $45 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
         $45 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
        }
        $140 = $45;
        $140$hi = i64toi32_i32$1;
        i64toi32_i32$1 = var$0$hi;
        i64toi32_i32$5 = var$0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 63;
        i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = 0;
         $46 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
        } else {
         i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
         $46 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
        }
        $142$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $140$hi;
        i64toi32_i32$1 = $140;
        i64toi32_i32$5 = $142$hi;
        i64toi32_i32$0 = $46;
        i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
        var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
        var$5$hi = i64toi32_i32$5;
        $144 = var$5;
        $144$hi = i64toi32_i32$5;
        i64toi32_i32$5 = var$8$hi;
        i64toi32_i32$5 = var$5$hi;
        i64toi32_i32$5 = var$8$hi;
        i64toi32_i32$2 = var$8;
        i64toi32_i32$1 = var$5$hi;
        i64toi32_i32$0 = var$5;
        i64toi32_i32$3 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
        i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
        i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
        i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
        i64toi32_i32$5 = i64toi32_i32$3;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 63;
        i64toi32_i32$1 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = i64toi32_i32$4 >> 31 | 0;
         $47 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
        } else {
         i64toi32_i32$2 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
         $47 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
        }
        var$6 = $47;
        var$6$hi = i64toi32_i32$2;
        i64toi32_i32$2 = var$1$hi;
        i64toi32_i32$2 = var$6$hi;
        i64toi32_i32$4 = var$6;
        i64toi32_i32$5 = var$1$hi;
        i64toi32_i32$0 = var$1;
        i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
        $151 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
        $151$hi = i64toi32_i32$5;
        i64toi32_i32$5 = $144$hi;
        i64toi32_i32$2 = $144;
        i64toi32_i32$4 = $151$hi;
        i64toi32_i32$0 = $151;
        i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
        i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
        i64toi32_i32$3 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
        i64toi32_i32$3 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
        var$5 = i64toi32_i32$1;
        var$5$hi = i64toi32_i32$3;
        i64toi32_i32$3 = var$0$hi;
        i64toi32_i32$5 = var$0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
         $48 = 0;
        } else {
         i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $48 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
        }
        $154$hi = i64toi32_i32$2;
        i64toi32_i32$2 = var$7$hi;
        i64toi32_i32$2 = $154$hi;
        i64toi32_i32$3 = $48;
        i64toi32_i32$5 = var$7$hi;
        i64toi32_i32$0 = var$7;
        i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
        var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
        var$0$hi = i64toi32_i32$5;
        i64toi32_i32$5 = var$6$hi;
        i64toi32_i32$2 = var$6;
        i64toi32_i32$3 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
        var$6 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
        var$6$hi = i64toi32_i32$3;
        var$7 = var$6;
        var$7$hi = i64toi32_i32$3;
        var$2 = var$2 + -1 | 0;
        if (var$2) {
         continue label$15
        }
        break label$15;
       };
       break label$13;
      }
     }
    }
    i64toi32_i32$3 = var$5$hi;
    legalfunc$wasm2js_scratch_store_i64(var$5 | 0, i64toi32_i32$3 | 0);
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
     $49 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $49 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
    }
    $165$hi = i64toi32_i32$2;
    i64toi32_i32$2 = var$6$hi;
    i64toi32_i32$2 = $165$hi;
    i64toi32_i32$3 = $49;
    i64toi32_i32$5 = var$6$hi;
    i64toi32_i32$0 = var$6;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
    return i64toi32_i32$3 | 0;
   }
   i64toi32_i32$3 = var$0$hi;
   legalfunc$wasm2js_scratch_store_i64(var$0 | 0, i64toi32_i32$3 | 0);
   i64toi32_i32$3 = 0;
   var$0 = 0;
   var$0$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = var$0$hi;
  i64toi32_i32$5 = var$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_udiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_rotl_i32(var$0, var$1) {
  var$0 = var$0 | 0;
  var$1 = var$1 | 0;
  var var$2 = 0;
  var$2 = var$1 & 31 | 0;
  var$1 = (0 - var$1 | 0) & 31 | 0;
  return ((-1 >>> var$2 | 0) & var$0 | 0) << var$2 | 0 | (((-1 << var$1 | 0) & var$0 | 0) >>> var$1 | 0) | 0 | 0;
 }
 
 var FUNCTION_TABLE = [null, $core__fmt__Arguments_20as_20core__fmt__Display___fmt__h9a4f36598b3e452f, $_T_20as_20core__fmt__Debug___fmt__hcb028e1ef481b650, wasm_bindgen__anyref__HEAP_SLAB____getit__h2f1f42bc2eeb8abf, std__alloc__default_alloc_error_hook__hc355fb01858dc17f, $std__sys_common__thread_local__Key_20as_20core__ops__drop__Drop___drop__h10f6c27270399835, $_mut_20W_20as_20core__fmt__Write___write_str__hf1c1d3408b18ae52, $_mut_20W_20as_20core__fmt__Write___write_char__he3acca6867759ba8, $_mut_20W_20as_20core__fmt__Write___write_fmt__hd463b168c4bfff39, core__ptr__real_drop_in_place__h12b0e19bc2b0aba7, $T_20as_20core__any__Any___type_id__h8757c758dbd9e5ff, core__ptr__real_drop_in_place__hbf27f7a61dec9c9e, $std__panicking__continue_panic_fmt__PanicPayload_20as_20core__panic__BoxMeUp___box_me_up__hdcda8b811c152c45, $std__panicking__continue_panic_fmt__PanicPayload_20as_20core__panic__BoxMeUp___get__h4a93df7d428ae93b, core__ptr__real_drop_in_place__h0bedcb801a2d087d, $T_20as_20core__any__Any___type_id__hc9fd1ac32439450b, core__fmt__num__imp___impl_20core__fmt__Display_20for_20u32___fmt__hb659deebf3039af8, core__fmt__ArgumentV1__show_usize__h2f56756168abcf9b, core__ptr__real_drop_in_place__h812c5b87254dd4a7, $T_20as_20core__any__Any___type_id__hb5877568404f30de];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new global.Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = newHEAP8;
   HEAP8 = new global.Int8Array(newBuffer);
   HEAP16 = new global.Int16Array(newBuffer);
   HEAP32 = new global.Int32Array(newBuffer);
   HEAPU8 = new global.Uint8Array(newBuffer);
   HEAPU16 = new global.Uint16Array(newBuffer);
   HEAPU32 = new global.Uint32Array(newBuffer);
   HEAPF32 = new global.Float32Array(newBuffer);
   HEAPF64 = new global.Float64Array(newBuffer);
   buffer = newBuffer;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "sum": sum, 
  "hello_world": hello_world, 
  "__wbindgen_free": __wbindgen_free
 };
}

var memasmFunc = new ArrayBuffer(1114112);
var assignasmFunc = (
    function(mem) {
      var _mem = new Uint8Array(mem);
      return function(offset, s) {
        var bytes, i;
        if (typeof Buffer === 'undefined') {
          bytes = atob(s);
          for (i = 0; i < bytes.length; i++)
            _mem[offset + i] = bytes.charCodeAt(i);
        } else {
          bytes = Buffer.from(s, 'base64');
          for (i = 0; i < bytes.length; i++)
            _mem[offset + i] = bytes[i];
        }
      }
    }
  )(memasmFunc);
assignasmFunc(1048576, "aGVsbG9fd29ybGRzcmMvbGliY29yZS9zbGljZS9tb2QucnNhc3NlcnRpb24gZmFpbGVkOiBgKGxlZnQgPT0gcmlnaHQpYAogIGxlZnQ6IGBgLAogcmlnaHQ6IGBgOiAAIwAQAC0AAABQABAADAAAAFwAEAADAAAAZGVzdGluYXRpb24gYW5kIHNvdXJjZSBzbGljZXMgaGF2ZSBkaWZmZXJlbnQgbGVuZ3Roc3gAEAA0AAAACwAQABgAAACpCAAACQAAAHNyYy9saWJhbGxvYy9yYXdfdmVjLnJzaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZQDEABAAFwAAAAoCAAAnAAAAVHJpZWQgdG8gc2hyaW5rIHRvIGEgbGFyZ2VyIGNhcGFjaXR5c3JjL2xpYmFsbG9jL3Jhd192ZWMucnMAOAEQABcAAABdAgAACQAAAAMAAAAFAAAABAAAAAQAAAAGAAAABwAAAAgAAAAJAAAAAAAAAAEAAAAKAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZXNyYy9saWJjb3JlL29wdGlvbi5yc7cBEAAVAAAAegEAABUAAAALAAAAEAAAAAQAAAAMAAAADQAAAA4AAAAMAAAABAAAAA8AAABzcmMvbGliYWxsb2MvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAIQABcAAAAJAwAABQAAABIAAAAAAAAAAQAAABMAAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAASAIQACAAAABoAhAAEgAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWVzcmMvbGliY29yZS9vcHRpb24ucnO3AhAAFQAAAHoBAAAVAAAAc3JjL2xpYmNvcmUvc2xpY2UvbW9kLnJzc2xpY2UgaW5kZXggc3RhcnRzIGF0ICBidXQgZW5kcyBhdCAA9AIQABYAAAAKAxAADQAAANwCEAAYAAAAbgoAAAUAAAAweDAwMDEwMjAzMDQwNTA2MDcwODA5MTAxMTEyMTMxNDE1MTYxNzE4MTkyMDIxMjIyMzI0MjUyNjI3MjgyOTMwMzEzMjMzMzQzNTM2MzczODM5NDA0MTQyNDM0NDQ1NDY0NzQ4NDk1MDUxNTI1MzU0NTU1NjU3NTg1OTYwNjE2MjYzNjQ2NTY2Njc2ODY5NzA3MTcyNzM3NDc1NzY3Nzc4Nzk4MDgxODI4Mzg0ODU4Njg3ODg4OTkwOTE5MjkzOTQ5NTk2OTc5ODk5c3JjL2xpYmNvcmUvZm10L21vZC5ycwIEEAAWAAAAVAQAACgAAAACBBAAFgAAAGAEAAARAAAA");
assignasmFunc(1049656, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); }},memasmFunc);
export var memory = retasmFunc.memory;
export var sum = retasmFunc.sum;
export var hello_world = retasmFunc.hello_world;
export var __wbindgen_free = retasmFunc.__wbindgen_free;
