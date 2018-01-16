<template>
  <div class='tabs-view-container'>
    <router-link class="tabs-view" v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.path">
      <el-tag
        :closable="true"  size="small"
        :type="isActive(tag.path)?'primary':'info'"
        @close='closeViewTabs(tag,$event)'>
        {{tag.name}}
      </el-tag>
    </router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      visitedViews () {
        return this.$store.state.visitedViews.slice(-6)
      }
    },
    methods: {
      closeViewTabs (view, $event) {
        this.$store.dispatch('DelVisitedViews', view).then((views) => {
          if (this.isActive(view.path)) {
            const latestView = views.slice(-1)[0]
            if (latestView) {
              this.$router.push(latestView.path)
            } else {
              this.$router.push('/')
            }
          }
        })
        $event.preventDefault()
      },
      generateRoute () {
        if (this.$route.name) {
          return this.$route
        }
        return false
      },
      addViewTabs () {
        const route = this.generateRoute()
        if (!route) {
          return false
        }
        this.$store.dispatch('AddVisitedViews', this.generateRoute())
      },
      isActive (path) {
        return path === this.$route.path
      }
    },
    watch: {
      $route () {
        this.addViewTabs()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tabs-view-container
    margin-left 10px
    .tabs-view
      margin-left 10px
</style>
