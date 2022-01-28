<template>
  <div class="login">
    <img src="@/assets/img/background.png" class="login-background" />
    <div class="login-con">
      <card :bordered="false" class="login-card">
        <div slot="title" class="login-header">
          <p class="login-caption" style="text-align: center">桌面端应用示例</p>
        </div>
        <div class="login-content">
          <div class="form-con">
            <a-form ref="loginForm" :rules="rules" :model="loginState">
              <a-form-item name="loginname">
                <a-input
                  size="large"
                  v-model:value="loginState.loginname"
                  placeholder="请输入用户名"
                  @pressEnter="handleSubmit"
                >
                  <template #prefix>
                    <user-outlined />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item name="password">
                <a-input-password
                  size="large"
                  v-model:value="loginState.password"
                  type="password"
                  placeholder="请输入密码"
                  @pressEnter="handleSubmit"
                >
                  <template #prefix>
                    <lock-outlined />
                  </template>
                </a-input-password>
              </a-form-item>
              <a-form-item>
                <a-button @click="handleSubmit" type="primary" class="login_btn">登录</a-button>
                <a-button @click="goReset" type="success" class="login_reset">重置</a-button>
              </a-form-item>
              <a-form-item>
                <div style="text-align: center">
                  <span class="form_tipinfo">其他登录方式</span>
                </div>
                <div style="text-align: center">
                  <div class="sign-btn" @click="handleThridLogin('DINGDING')">
                    <img src="@/assets/img/dingding.svg" class="third-svg-container" draggable="false" />
                  </div>
                  <div class="sign-btn" @click="handleThridLogin('WXWORK')">
                    <img src="@/assets/img/qiyeweixin.svg" class="third-svg-container" draggable="false" />
                  </div>
                </div>
              </a-form-item>
            </a-form>
            <p class="login-tip">{{ loginTip }}</p>
          </div>
        </div>
      </card>
      <div class="log_footer">
        <div class="copyright">
          <a href="https://www.ibizlab.cn/" target="_blank">is based on ibizlab .</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, unref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { setCookie } from 'qx-util';
import { Http } from '@core';

interface LoginState {
  loginname: string;
  password: '';
}

/**
 * 表单对象
 *
 * @type {*}
 * @memberof Login
 */
const loginState = reactive<LoginState>({
  loginname: '',
  password: '',
});

/**
 *　登录提示语
 *
 * @type {string}
 * @memberof Login
 */
const loginTip: Ref<string> = ref('');

/**
 * 值规则
 *
 * @type {*}
 * @memberof Login
 */
const rules: Ref<any> = ref({
  loginname: [{ required: true, message: '用户名不能为空', trigger: 'change' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'change' }],
});

/**
 * 登录表单
 *
 * @type {*}
 * @memberof Login
 */
const loginForm: Ref<any> = ref(null);

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

/**
 * 重置
 *
 * @type {*}
 * @memberof Login
 */
const goReset = () => {
  loginForm.value = { loginname: '', password: '' };
};

/**
 * 提交表单数据
 *
 * @type {*}
 * @memberof Login
 */
const handleSubmit = async (): Promise<void> => {
  const form = unref(loginForm);
  let validatestate: boolean = true;
  form.validate((valid: boolean) => {
    validatestate = valid ? true : false;
  });
  if (!validatestate) {
    return;
  }
  const result: any = await App.getAppAuthService().login(loginState);
  const { status, data } = result;
  if (status == 200) {
    const url: any = unref(route).query?.redirecrt ? unref(route).query.redirecrt : '/';
    router.push({ path: url });
  } else {
    App.getNotificationService().error({ message: '登录失败', description: data?.message || '' });
  }
};

/**
 * 第三方登录(网页扫码方式)
 *
 * @memberof Login
 */
const handleThridLogin = (type: string) => {
  console.log(`暂不支持${type}登录`);
};
</script>
