<template>
  <div class="login">
    <img src="@/assets/img/background.png" />
    <div class="login-con" v-if="!isEmbedThridPlatForm">
      <card :bordered="false">
        <p slot="title" style="text-align: center">&nbsp;&nbsp;</p>
        <div class="form-con">
          <a-form ref="loginForm" :rules="rules" :model="loginState">
            <a-form-item name="loginname">
              <a-input
                size="large"
                v-model:value="loginState.loginname"
                placeholder="请输入用户名"
                @pressEnter="handleSubmit">
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
                @pressEnter="handleSubmit">
								<template #prefix>
									<lock-outlined />
								</template>
							</a-input-password>
            </a-form-item>
            <a-form-item>
              <a-button @click="handleSubmit" type="primary" class="login_btn">
                登录
              </a-button>
              <a-button @click="goReset" type="success" class="login_reset">
								重置
              </a-button>
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
          <p class="login-tip">
            
          </p>
        </div>
      </card>
      <div class="log_footer">
        <div class="copyright">
          <a href="https://www.ibizlab.cn/" target="_blank"> is based on ibizlab .</a>
        </div>
      </div>
    </div>
    <div class="login-loadding-container" v-if="isEmbedThridPlatForm">
      <div class="content-loadding">
        <span>第三方登录跳转中</span>
        <div class="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { clearCookie, setCookie } from 'qx-util';
import { Environment } from '@/environments/environment';
import { Http } from '@core';
/**
 * 表单对象
 *
 * @type {*}
 * @memberof Login
 */
const loginState = reactive<LoginState>({
	loginname: '',
	password: ''
});

/**
 *　登录提示语
 *
 * @type {string}
 * @memberof Login
 */
const loginTip: Ref<string> = ref('');

/**
 * 运行平台
 *
 * @type {*}
 * @memberof Login
 */
const platform: Ref<any> = ref({});

/**
 * 是否嵌入第三方平台
 *
 * @type {boolean}
 * @memberof Login
 */
const isEmbedThridPlatForm: Ref<boolean> = ref(false);

/**
 *　按钮可点击
 *
 * @type {boolean}
 * @memberof Login
 */
const canClick: Ref<boolean> = ref(true);

/**
 * 应用名称
 *
 * @type {string}
 * @memberof Login
 */
const appTitle: string = Environment.AppTitle;

interface LoginState {
	loginname: string,
	password: ''
}

/**
 * 值规则
 *
 * @type {*}
 * @memberof Login
 */
const rules: Ref<any> = ref({});

const loginForm: Ref<any> = ref(null);

const setRules = () => {
  rules.value = {
    loginname: [{ required: true, message: '用户名不能为空', trigger: 'change' }],
    password: [{ required: true, message: '密码不能为空', trigger: 'change' }],
  };
};

const afterCreated = () => {
  setRules();
  platform.value = window.navigator.userAgent.toUpperCase();
  if (platform.value.indexOf('DINGTALK') !== -1) {
    // this.DingDingLogin();
    isEmbedThridPlatForm.value = true;
  } else if (platform.value.indexOf('WXWORK') !== -1) {
    // this.WXWorkLogin();
    isEmbedThridPlatForm.value = true;
  }
};

onMounted(() => {
  setTimeout(() => {
    const el = document.getElementById('app-loading-x');
    if (el) {
      el.style.display = 'none';
    }
  }, 300);
});

const goReset = () => {
  loginForm.value = { loginname: '', password: '' };
};

const handleSubmit = (): void => {
  // clearAppData();
  const _form = unref(loginForm);
  let validatestate: boolean = true;
  _form.validate((valid: boolean) => {
    validatestate = valid ? true : false;
  });
  if (!validatestate) {
    return;
  }
  const loginname: string = loginState.loginname;
	console.log("登录用户名", loginState)
  //  TODO 使用AppAuthService
  Http.getInstance()
    .post('/v7/login', loginState, true)
    .then((post: any) => {
      const { status, data } = post;
      if (status == 200) {
        if (data && data.token) {
          setCookie('ibzuaa-token', data.token, 7, true);
        }
        if (data && data.user) {
          setCookie('ibzuaa-user', JSON.stringify(data.user), 7, true);
        }
        // 设置cookie,保存账号密码7天
        setCookie('loginname', loginname, 7, true);
        //  TODO 从路由中获取
        const route = useRoute();
        const url: any = route.query?.redirecrt ? route.query.redirecrt : '*';
        const router = useRouter();
        router.push({ path: url });
      }
    })
    .catch((error: any) => {
      console.log('登录失败', error);
      const data = error.data;
      if (data && data.message) {
        loginTip.value = data.message;
        // this.$throw((this.$t('components.login.loginfailed') as string) + ' ' + data.message,'handleSubmit');
      } else {
        // this.$throw(this.$t('components.login.loginfailed') as string,'handleSubmit');
      }
    });
};

const clearAppData = () => {
  // 清除user、token
  clearCookie('ibzuaa-token', true);
  clearCookie('ibzuaa-expired', true);
  clearCookie('ibzuaa-user', true);
  // 清除应用级数据
  localStorage.removeItem('localdata');
  // this.$store.commit('addAppData', {});
  // this.$store.dispatch('authresource/commitAuthData', {});
  // 清除租户相关信息
  // removeSessionStorage("activeOrgData");
  // removeSessionStorage("srfdynaorgid");
  // removeSessionStorage("dcsystem");
  // removeSessionStorage("orgsData");
};

/**
 * 第三方登录(网页扫码方式)
 *
 * @memberof Login
 */
const handleThridLogin = (type: string) => {
  if (!type) return;
  switch (type) {
    case 'DINGDING':
      dingtalkHandleClick();
      break;
    case 'WXWORK':
      wxWorkHandleClick();
      break;
    default:
      // LogUtil.log(`暂不支持${type}登录`);
      break;
  }
};

/**
 * 钉钉授权登录
 *
 * @memberof Login
 */
const dingtalkHandleClick = async () => {
  // let result: any = await this.appThirdService.dingtalkLogin(Environment);
  // if (result?.state && Object.is(result?.state, 'SUCCESS')) {
  //     const data = result.data;
  //     // 截取地址，拼接需要部分组成新地址
  //     const baseUrl = this.getNeedLocation();
  //     // 1.钉钉开放平台提供的appId
  //     const appId = data.appid;
  //     // 2.钉钉扫码后回调地址,需要UrlEncode转码
  //     const redirect_uri = baseUrl + 'assets/third/dingdingRedirect.html?id=' + data.appid;
  //     const redirect_uri_encode = encodeURIComponent(redirect_uri);
  //     // 3.钉钉扫码url
  //     const url =
  //         'https://oapi.dingtalk.com/connect/qrconnect?response_type=code' +
  //         '&appid=' +
  //         appId +
  //         '&redirect_uri=' +
  //         redirect_uri_encode +
  //         '&scope=snsapi_login' +
  //         '&state=STATE';
  //     // 4.跳转钉钉扫码
  //     window.location.href = url;
  // } else {
  //     this.$throw(result?.message,'dingtalkHandleClick');
  // }
};

/**
 * 企业微信授权登录
 *
 * @memberof Login
 */
const wxWorkHandleClick = async () => {
  // let result: any = await this.appThirdService.wxWorkLogin(Environment);
  // if (result?.state && Object.is(result?.state, 'SUCCESS')) {
  //     const data = result.data;
  //     // 截取地址，拼接需要部分组成新地址
  //     const baseUrl = this.getNeedLocation();
  //     // 1.钉钉开放平台提供的appId
  //     const appId = data.corp_id;
  //     const agentId = data.agentid;
  //     // 2.钉钉扫码后回调地址,需要UrlEncode转码
  //     const redirect_uri = baseUrl + 'assets/third/wxWorkRedirect.html?id=' + data.appid;
  //     const redirect_uri_encode = encodeURIComponent(redirect_uri);
  //     // 3.钉钉扫码url
  //     const url =
  //         'https://open.work.weixin.qq.com/wwopen/sso/qrConnect?state=STATE' +
  //         '&appid=' +
  //         appId +
  //         '&agentid=' +
  //         agentId +
  //         '&redirect_uri=' +
  //         redirect_uri_encode;
  //     // 4.跳转钉钉扫码
  //     window.location.href = url;
  // } else {
  //     // this.$throw(result?.message,'wxWorkHandleClick');
  // }
};

/**
 * 钉钉免登
 *
 * @memberof Login
 */
const DingDingLogin = async () => {
  // let result: any = await this.appThirdService.embedDingTalkLogin(Environment);
  // if (result?.state && Object.is(result?.state, 'SUCCESS')) {
  //     if (result.data.token && result.data.user) {
  //         setCookie('ibzuaa-token', result.data.token, 7,true);
  //         if (this.$route.query.redirect) {
  //             window.location.href = decodeURIComponent(this.$route.query.redirect as any);
  //         } else {
  //             this.$router.push({ path: '/' });
  //         }
  //     }
  // } else {
  //     this.$throw(result?.message,'DingDingLogin');
  // }
};

const WXWorkLogin = async () => {
  // let result: any = await this.appThirdService.embedwxWorkLogin(Environment);
  // if (result?.state && Object.is(result?.state, 'SUCCESS')) {
  //     // 截取地址，拼接需要部分组成新地址
  //     const baseUrl = this.getNeedLocation();
  //     // 1.企业微信提供的corp_id
  //     const appId = result.data.corp_id;
  //     // 2.认证成功后回调地址,需要UrlEncode转码
  //     const redirect_uri = baseUrl + 'assets/third/wxWorkRedirect.html?id=' + result.data.appid;
  //     const redirect_uri_encode = encodeURIComponent(redirect_uri);
  //     // 3.微信认证url
  //     const url =
  //         'https://open.weixin.qq.com/connect/oauth2/authorize?response_type=code&scope=snsapi_base&#wechat_redirect' +
  //         '&appid=' +
  //         appId +
  //         '&redirect_uri=' +
  //         redirect_uri_encode +
  //         '&scope=snsapi_base' +
  //         '&state=STATE';
  //     // 4.跳转到微信认证地址
  //     window.location.href = url;
  // } else {
  //     this.$throw(result?.message,'WXWorkLogin');
  // }
};

const getNeedLocation = () => {
  // 截取地址，拼接需要部分组成新地址
  const scheme = window.location.protocol;
  const host = window.location.host;
  let baseUrl: any = scheme + '//' + host;
  const port = window.location.port;
  if (port) {
    if (port == '80' || port == '443') {
      baseUrl += '/';
    } else {
      baseUrl += ':' + port + '/';
    }
  } else {
    baseUrl += '/';
  }
  return baseUrl;
};
</script>

<style lang='scss'>
.login {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100%;
  background: #108cee;
  > img {
    width: 100vw;
    height: 100vh;
  }

  &-con {
    position: absolute;
    left: 0;
    right: 0;
    top: 20%;
    margin: auto;
    width: 450px;
    .ivu-card-head {
      padding: 30px 0px 20px 0px;
      border-bottom: 0px;
      > p {
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        color: #666666;
        font-weight: 600;
      }
    }
    &-header {
      font-size: 16px;
      font-weight: 300;
      text-align: center;
      padding: 30px 0;
    }
    .form-con {
      padding: 0px 20px 0px 20px;
      > i-button {
        width: 170px;
        height: 40px;
      }
    }
    .login-tip {
      font-size: 10px;
      text-align: center;
      color: red;
      height: 30px;
    }
  }
  &-loadding-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 70%;
    margin: auto;
    width: 450px;
  }
}

.login_btn {
  width: 175px;
  height: 40px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
}
.login_reset {
  width: 175px;
  height: 40px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  float: right;
}

.form_tipinfo {
  font-family: MicrosoftYaHei-Bold;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 24px;
  letter-spacing: 0px;
  color: #666666;
}

.form_tipinfo_more {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #666666;
}
.log_footer {
  display: block;
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;
  color: #212529;
}

.log_footer a {
  color: white;
  text-decoration: none;
}

.sign-btn {
  display: inline-block;
  cursor: pointer;
  margin-left: 10px;
}

.third-svg-container {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding-top: 1px;
  border-radius: 4px;
  margin-bottom: -20px;
  margin-top: 10px;
}
.content-loadding {
  display: flex;
  > span {
    font-size: 24px;
    color: #fff;
  }
}
.loading {
  width: 150px;
  height: 15px;
  margin: 0 auto;
  margin-top: 12px;
  padding-left: 12px;
  > span {
    display: inline-block;
    width: 15px;
    height: 100%;
    margin-right: 5px;
    border-radius: 50%;
    background: #fff;
    -webkit-animation: load 1.04s ease infinite;
  }
  > span:last-child {
    margin-right: 0px;
  }
  > span:nth-child(1) {
    -webkit-animation-delay: 0.13s;
  }
  > span:nth-child(2) {
    -webkit-animation-delay: 0.26s;
  }
  > span:nth-child(3) {
    -webkit-animation-delay: 0.39s;
  }
  > span:nth-child(4) {
    -webkit-animation-delay: 0.52s;
  }
  > span:nth-child(5) {
    -webkit-animation-delay: 0.65s;
  }
}
@-webkit-keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>