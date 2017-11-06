<template>
  <div>
    切换主题
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
    },
    mounted () {
      this.changeTheme()
    },
    methods: {
      changeTheme (themeValue) {
        // console.log('切换主题颜色值：',themeValue,that.staticPath,JSON.stringify(themeArray) );
        // 需要移到单独的文件存放
        const staticPath = process.env.NODE_ENV === 'development' ? '/static/' : './' // 静态资源路径
        /* for (let i = 0, len = cssArray.length; i < len; i++) {
          var itemPath = staticPath + '/theme/' + cssArray[i].toLowerCase() + '.css'
          loadCss(itemPath)
        }*/
        loadCss(staticPath + '/theme/index.css')

        localStorage.setItem('themeValue', themeValue)

        function loadCss (path) {
          var head = document.getElementsByTagName('head')[0]
          var link = document.createElement('link')
          link.href = path
          link.rel = 'stylesheet'
          link.type = 'text/css'
          head.appendChild(link)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
