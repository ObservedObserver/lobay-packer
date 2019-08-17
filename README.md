# lobay-packer
![](https://img.shields.io/badge/license-MIT-000000.svg)
![](https://www.travis-ci.org/ObservedObserver/lobay-packer.svg?branch=master)

lobay packer is a boring and light module bundler for using .lobay component file.

## `.lobay` component
lobay component is made of four parts, templates, components, script and style. It helps use components to develop apps with regular javascript without advanced frameworks or lib knowledge.

+ template: html code.
+ components: define what components are used in this file.
+ script: js code.
+ style: css

You can still use jquery within lobay components if you like.

```js
// html template
<template>
  <div>
    <h1 class="test-header">hello</h1>
    <p>test</p>
    <div>
      <foo />
      <bar></bar>
    </div>
    <button onclick="test()"></button>
  </div>
</template>

// components used
<components>
  foo
  bar
</components>

<script>
  function test() {
    console.log('click')
  }
</script>

<style>
.test-header{
  color: red;
}
</style>
```