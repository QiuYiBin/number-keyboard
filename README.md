# 根据Vant Vue端数字键盘封装微信小程序版
# 使用方法
# 在需要使用的页面引入该组件
"usingComponents": {
    "number-keyboard": "/Components/number-keyboard/index"
 }
# 页面上调用
<number-keyboard show="{{ showNumberKeyboard }}" value="{{ value }}" bind:confirm="onConfirm" />
