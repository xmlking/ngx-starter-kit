# Chat-Box

### Goals

- hybrid conversations with bots, users and groups.
- multiple active conversations
- save and retrieve active conversations

### Install

```bash
npm i @ngx-starter-kit/chat-box
```

### Usage

### Publish

```bash
# build deps first
ng build utils
ng build ngx-utils
# build
ng build chat-box
# replace your npm key
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
# publish
npm publish dist/libs/chat-box --access public
```

### TODO

Implement as `dialogBox` and use this [show/hide](https://github.com/angular/components/blob/master/src/dev-app/dialog/dialog-demo.ts#L131) trick

multiple conversations inspired by [weave.works](https://www.weave.works/)

> implement polymorphic user supplied complements to render variety `messages`

```html
<Message data="messageObject"></Message> <ChoiceMessage data="messageObject"></ChoiceMessage>
```
