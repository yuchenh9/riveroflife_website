#!/bin/bash
# 部署脚本：本地 build -> 服务器备份旧 build -> rsync 新 build
# 用法：
#   ./deploy.sh          只部署 build/（前端改动足够）
#   ./deploy.sh --full   同时部署 public/ server/ app.js 并重启 PM2
#
# 回退方法（在服务器上）：
#   cd /root/riveroflife_website/riveroflife_website
#   ls -d build.backup.*                # 找到要恢复的备份
#   rm -rf build && mv build.backup.XXX build
#   pm2 restart riveroflifecu.org

set -euo pipefail

SERVER="root@143.198.102.6"
REMOTE_DIR="/root/riveroflife_website/riveroflife_website"
PM2_APP="riveroflifecu.org"
KEEP_BACKUPS=5

cd "$(dirname "$0")"

echo "==> 1/4 本地构建"
npm run build

echo "==> 2/4 服务器备份当前 build"
STAMP=$(date +%Y%m%d-%H%M%S)
ssh "$SERVER" "
  set -e
  cd '$REMOTE_DIR'
  if [ -d build ]; then
    cp -a build 'build.backup.$STAMP'
    echo '已备份为 build.backup.$STAMP'
  else
    echo '服务器上没有 build 目录，跳过备份'
  fi
  # 只保留最近 $KEEP_BACKUPS 份备份
  ls -dt build.backup.* 2>/dev/null | tail -n +$((KEEP_BACKUPS + 1)) | xargs -r rm -rf
"

echo "==> 3/4 同步 build/ 到服务器"
rsync -avz --delete build/ "$SERVER:$REMOTE_DIR/build/"

if [ "${1:-}" = "--full" ]; then
  echo "==> 3b 同步 public/ server/ app.js"
  rsync -avz public/ "$SERVER:$REMOTE_DIR/public/"
  rsync -avz server/ "$SERVER:$REMOTE_DIR/server/"
  rsync -avz app.js "$SERVER:$REMOTE_DIR/app.js"
  echo "==> 重启 PM2 ($PM2_APP)"
  ssh "$SERVER" "pm2 restart '$PM2_APP'"
fi

echo "==> 4/4 验证"
curl -sk -o /dev/null -w "https://riveroflifecu.org/ -> %{http_code}\n" "https://riveroflifecu.org/"

echo "部署完成。备份：$REMOTE_DIR/build.backup.$STAMP"
