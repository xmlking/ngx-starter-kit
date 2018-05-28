# Context Menu

### Usage

1.  Add `ContextMenuModule` module to your module `imports`

2.  Define Template

```html
<ng-template #myContextMenu>
  <context-menu>
    <button mat-button>Select all</button>
    <button mat-button>Edit Row</button>
    <button mat-button>Quick tag</button>
    <button mat-button>Copy selected column</button>
    <button mat-button>Copy selected row</button>
    <button mat-button>Delete</button>
  </context-menu>
</ng-template>
```

3.  Apply `[contextMenu]` directive

```html
  <div [contextMenu]="myContextMenu">
    Right click me to see the menu
  </div>
```
