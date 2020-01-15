# Basic of TypeScript

TypeScript Setup

```
(sudo) npm i -g typescript
```

Complie Commands`

For Single Files

```
tsc filename.ts
```

For Ambients

```
cd ambients
tsc CalcThird.ts
tsc CaclTest.ts
```

For Modules

```
cd modules
tsc --module commonjs TestShape.ts
```

For Namespaces

```
tsc --outfile app.js app.ts
```

NOTE: If Directory have HTML file, open for testing.
