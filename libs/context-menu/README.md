# Context Menu

### Install

```bash
npm i @ngx-starter-kit/context-menu
```

### Usage

1.  Add `ContextMenuModule` module to your module `imports`

2.  Define Template

```html
<ng-template #myContextMenu>
  <context-menu>
    <button mat-button>Select all</button> <button mat-button>Edit Row</button> <button mat-button>Quick tag</button>
    <button mat-button>Copy selected column</button> <button mat-button>Copy selected row</button>
    <button mat-button>Delete</button>
  </context-menu>
</ng-template>
```

3.  Apply `[contextMenu]` directive

```html
<div [contextMenu]="myContextMenu">Right click me to see the menu</div>
```

### Publish

```bash
# build
ng build context-menu
# replace your npm key
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
# publish
npm publish dist/libs/context-menu --access public
```
