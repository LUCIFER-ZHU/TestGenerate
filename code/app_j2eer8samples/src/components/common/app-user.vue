<script setup lang="ts">
import { IParam, toggleFullScreen } from '@core';
import { FullscreenOutlined, FullscreenExitOutlined, LockOutlined, PoweroffOutlined } from '@ant-design/icons-vue';
import type { FormInstance } from 'ant-design-vue';
import { Ref } from 'vue';
import { getCookie } from 'qx-util';
import { useRoute, useRouter } from 'vue-router';

/**
 * 路由对象
 *
 * @type {*}
 * @memberof Login
 */
const route = useRoute();

/**
 * 路由器对象
 *
 * @type {*}
 * @memberof Login
 */
const router = useRouter();

let isFullScreen: Ref<boolean> = ref(false);
let isLockScreen: Ref<boolean> = ref(false);
const formRef = ref<FormInstance>();
const lockFormState = reactive<IParam>({
  lockPassword: '',
});

const dropdownClick = (value: any) => {
  const { key } = value;
  switch (key) {
    case 'fullScreen':
      isFullScreen.value = toggleFullScreen();
      break;
    case 'screenLock':
      isLockScreen.value = !isLockScreen.value;
      break;
    case 'logout':
      handleLogout();
      break;
  }
};

const handleLogout = async () => {
  const result: any = await App.getAppAuthService().logout();
  const { status, data } = result;
  if (status == 200) {
    router.push({ path: '/login' });
  } else {
    App.getNotificationService().error({ message: '登出失败', description: data?.message || '' });
  }
}

const handleLock = async () => {
  try {
    if (formRef && formRef.value) {
      await formRef.value.validateFields();
      const username = getCookie('username') || 'visitor';
      const lockPath = window.btoa(route.path);
      sessionStorage.setItem('lockPassword',lockFormState.lockPassword);
      sessionStorage.setItem('lockState','true');
      sessionStorage.setItem('userName',username);
      sessionStorage.setItem('lockPath',lockPath);
      router.push({ path: "/lock" });
    }
  } catch (errorInfo) {
  }
};

/**
 * 用户数据
 *
 * @type {*}
 * @memberof IbizUser
 */
const user: any = {
  name: '管理员',
  avatar: '',
};

onMounted(() => {
  // initUser todo
});
</script>

<template>
  <div class="app-user">
    <a-dropdown>
      <div class="user-info">
        <span class="user-name">{{ user.name }}</span>
        <a-avatar size="large" :src="user.avatar" @click.prevent>
          <template #icon><AppIconText iconClass="fa fa-user-o"></AppIconText></template>
        </a-avatar>
      </div>
      <template #overlay>
        <a-menu @click="dropdownClick">
          <a-menu-item value="fullScreen" key="fullScreen">
            <fullscreen-outlined v-show="!isFullScreen" class="app-user-icon" />
            <fullscreen-exit-outlined v-show="isFullScreen" class="app-user-icon" />
            应用全屏
          </a-menu-item>
          <a-menu-item value="screenLock" key="screenLock">
            <lock-outlined class="app-user-icon" />
            应用屏锁
            <a-modal v-model:visible="isLockScreen" title="请输入锁屏密码" class="app-lock">
              <a-form :model="lockFormState" ref="formRef">
                <a-form-item name="lockPassword" :rules="[{ required: true, message: '请输入锁屏密码' }]">
                  <a-input-password v-model:value="lockFormState.lockPassword" placeholder="请输入锁屏密码" />
                </a-form-item>
              </a-form>
              <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
              <template #footer>
                <a-button type="primary" @click="handleLock">确认</a-button>
              </template>
            </a-modal>
          </a-menu-item>
          <a-menu-item value="logout" key="logout">
            <poweroff-outlined class="app-user-icon" />
            退出登录
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
