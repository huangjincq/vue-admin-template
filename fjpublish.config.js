
// 前端自动化
module.exports = {
  modules: [{
    name: '测试环境',
    env: 'sit',
    ssh: {
      host: '11.11.111.11',
      port: 22,
      user: 'root',
      userName: 'root',
      password: 'XXXXXXXXXX'
    },
    buildCommand: 'build:sit',
    localPath: 'dist',
    remotePath: '/home/app/client/report/dist',
    postCommands: ['chmod -R 777 /home/app/client/report/dist']   // 远程fjpublish内部命令执行后即远程项目文件替换后执行的linux命令
  }]
}

