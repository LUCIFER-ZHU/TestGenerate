<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

  // 跳转首页回调
  const gotoIndexView = ()=>{
    router.push("/")
  }

</script>

<template>
  <div class="app-404">
    <div class="app-404__container">
        <img src="@/assets/img/404.png" />
        <div class="app-404__error-text">
            <div class="app-404__error-text1">抱歉，您访问的页面不存在！</div>
            <div class="app-404__error-text2">您要找的页面不存在，请返回<a @click="gotoIndexView">首页</a>继续浏览</div>
        </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.app-404 {
    height: 100%;
    width: 100%;
}
.app-404__container {
    height: 380px;
    width: 670px;
    position: absolute;
    top: calc((100% - 400px) / 2);
    left: calc((100% - 670px) / 2);
    display: flex;
    align-items: center;
}
.app-404__error-text {
    padding-left: 20px;
}
.app-404__error-text1 {
    font-size: 20px;
    margin-bottom: 20px;
}
.app-404__error-text2 {
    font-size: 14px;
}
</style>
