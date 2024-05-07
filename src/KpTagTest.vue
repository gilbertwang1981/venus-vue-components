<template>
    <div id="app">
      <kp-tag :tags="tags"/>
    </div>
</template>
  
<script>
  import KpTag from './components/KpTag.vue'
  
  export default {
    components: {
        KpTag
    },
    data() {
      document.title = 'Tag测试页面'

      return {
        tags: [
            {tagName: '秋季', tagColor: "red"},
            {tagName: '韩粉', tagColor: "green"},
            {tagName: '服饰', tagColor: "gray"},
            {tagName: '欧美', tagColor: "orange"}
        ]
      }
    }
  }
</script>
  