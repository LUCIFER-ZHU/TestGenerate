<template>
  <div class="app-lock">
    <img src="@/assets/img/lock_login.png" class="app-lock__img" />
    <div class="app-lock__content">
      <h3 class="title">{{ username }}</h3>
      <a-space :size="0">
        <a-input v-model:value="curPassword" type="password" placeholder="请输入解锁密码" />
        <a-button class="lock-button" @click="handleLogin"><unlock-outlined /></a-button>
        <a-button class="logout-button" @click="handleLogout"><poweroff-outlined /></a-button>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { UnlockOutlined, PoweroffOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username: Ref<string> = ref('');
const lockPassword: Ref<string> = ref('');
const lockPath: Ref<string> = ref('');
let curPassword: Ref<string> = ref('');

const handleLogin = () => {
  if (unref(curPassword) == unref(lockPassword)) {
    sessionStorage.removeItem('lockPassword');
    sessionStorage.removeItem('lockState');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('lockPath');
    router.push({ path: unref(lockPath) });
  } else {
    App.getNotificationService().error({ message: '解锁失败', description: '解锁密码错误,请重新输入' });
  }
}

const handleLogout = async () => {
  const result: any = await App.getAppAuthService().logout();
  const { status, data } = result;
  if (status == 200) {
    router.push({ path: '/login' });
  } else {
    App.getNotificationService().error({ message: '登出失败', description: data?.message || '' });
  }
}

onMounted(() => {
  username.value = sessionStorage.getItem('userName') || '';
  lockPassword.value = sessionStorage.getItem('lockPassword') || '';
  lockPath.value = window.atob(sessionStorage.getItem('lockPath') || '');
});
</script>
