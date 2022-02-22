export const Environment = {
    // 系统名称
    SysName: '',
    // 应用名称
    AppName: 'R8Mob',
    // 应用 title
    AppTitle: '移动端应用示例',
    // 应用基础路径
    BaseUrl: '/api',
    // 文件导出
    ExportFile: '/ibizutil/download',
    // 文件上传
    UploadFile: '/ibizutil/upload',
    // 是否为pc端应用
    isAppMode: true,
    // 是否为开发模式
    devMode: true,
    // 是否启用AppData
    enableAppData: true,
    // 是否开启权限认证
    enablePermissionValid: false,
    // 菜单权限模式，可选值：RT(RT模式),RESOURCE(资源模式),MINIX(混合模式),RESOURCE
    menuPermissionMode: 'RESOURCE',
    // 是否开启工作流
    workflow: false,
    // 是否预览模式
    isPreviewMode: false,
    // SaaS模式
    SaaSMode: false,
    // 仿真mockDcSystemId
    mockDcSystemId: '',
    // 登录地址
    loginUrl: '',
    enableIssue: false,
};
// 挂载外部配置文件
if ((window as any).Environment) {
    Object.assign(Environment, (window as any).Environment);
}