# miniprogram-rust-wasm-example

An example code for embeding rust code into WeChat MiniProgram

## Instruction

Required tools:

* [latest rust toolchain](https://rustup.rs/)
* [wasm-pack](https://github.com/rustwasm/wasm-pack)
* wasm2js tool from [binaryen](https://github.com/WebAssembly/binaryen/releases) , should be available in PATH.

Compilation:

1. The `rust-mod` dir is a rust project. Compile it with `wasm-pack build` . The compiled code is in `rust-mod/pkg` .
1. Put Compile the wasm code `rust-mod/pkg/rust_mod_bg.wasm` into js code with `wasm2js` : `wasm2js -o pkg/rust_mod_bg.wasm.js pkg/rust_mod_bg.wasm`
1. Inject polyfill: prepend `import { TextDecoder, TextEncoder } from '../../polyfill';` to `pkg/rust_mod.js`
1. Inject polyfill: prepend `import { atob } from '../../polyfill';` to `pkg/rust_mod_bg.wasm.js`
1. Run in WeChat developer tools now!
