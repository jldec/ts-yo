# experiments with typescript

- `yo.ts` - module
- `yo_test.ts` - deno test for yo
- `main.ts` - imports and calls yo

# differences between deno and tsc and node-ts

### deno
- deno imports use `.ts` extensions (tsc does not - rename .vscode/settings.json to see this).
- `deno run` invokes .ts code very quickly, without typechecking by default
- `deno test` defaults to typechecking on

### ts-node
- ts-node has typechecking on by default


### TODO
- 
- try to make things interop nicely with import maps
- try using es-build and swc

