# 根据Vant Vue端数字键盘封装微信小程序版
## 使用方法
```json
"usingComponents": {
    "number-keyboard": "/Components/number-keyboard/index"
 }
```
```html
<number-keyboard show="{{ showNumberKeyboard }}" value="{{ value }}" bind:confirm="onConfirm" />
```
