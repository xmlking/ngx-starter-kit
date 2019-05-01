# Tools

Workspace tools


### Build

```bash
yarn workspace @ngx-starter-kit/tools build
```

## Command

### Usage

```bash
ng add @ngx-starter-kit/tools
# or add following to devDependencies in /package.json 
# "@ngx-starter-kit/tools": "file:./dist/tools"
```

> add command `architect`

```json
      ...
      "architect": {
        "touch": {
          "builder": "./dist/tools:command",
           /* "builder": "@ngx-starter-kit/tools:command", */
          "options": {
            "command": "touch",
            "args": [
              "test.ts"
            ]
          }
        }
      ...
```

### Run
```bash
ng run api:touch
```

## Store

#### Usage

```bash
ng add @ngx-starter-kit/tools
ng generate @ngx-starter-kit/tools:store --project=auth   -d
```
