## 配置提交的用户信息
git config --global user.name "sjh"
git config --global user.email "277479420@qq.com"

## 配置GitHub key
- 生成Key
    ssh-keygen -t rsa -C "277479420@qq.com"
- 生成Key的位置
    .ssh下
- 将公钥id_rsa.pub的内容粘贴到Key处的位置