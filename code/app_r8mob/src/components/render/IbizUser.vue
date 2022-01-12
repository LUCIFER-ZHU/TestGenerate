<script setup lang="ts">
/**
 *
 *
 * @param {*} name
 * @param {*} value
 * @param {*} bb
 * @memberof IbizUser
 */
const dropdownClick = (value: any) => {
  const { key } = value;

  // todo
  switch (key) {
    case 'fullScreen':
      break;
    case 'screenLock':
      break;
    case 'changeTheme':
      break;
    case 'updatePwd':
      break;
    case 'logout':
      break;

    default:
      break;
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

/**
 * 用户下拉列表
 *
 * @memberof IbizUser
 */
const dropdownList = [
  {
    tag: 'fullScreen',
    label: '应用全屏',
  },
  {
    tag: 'screenLock',
    label: '应用屏锁',
  },
  {
    tag: 'changeTheme',
    label: '修改主题',
  },
  {
    tag: 'updatePwd',
    label: '修改密码',
  },
  {
    tag: 'logout',
    label: '退出登录',
  },
];
</script>

<template>
  <div class="ibiz-user">
    <span class="user-name">{{ user.name }}</span>
    <a-dropdown>
      <a-avatar size="large" :src="user.avatar" @click.prevent>
        <template #icon><IbizIconText iconClass="fa fa-user-o"></IbizIconText></template>
        <DownOutlined />
      </a-avatar>
      <template #overlay>
        <a-menu @click="dropdownClick">
          <a-menu-item :value="item.tag" v-for="item in dropdownList" :key="item.tag">
            {{ item.label }}
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<style lang='scss'>
.ibiz-user {
  .user-name {
    padding-right: 10px;
  }
  .ibiz-icon-text {
    text-align: center;
    width: 100%;
    height: 100%;
    i {
      width: 100%;
      text-align: center;
      font-size: 20px;
      line-height: 16px;
    }
  }
}
</style>
