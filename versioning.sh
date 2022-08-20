#!/usr/bin/env sh

BI_VER=$(npm view bootstrap-icons version)

pnpm dlx json -I -f package.json -e "this.version+='-$BI_VER'" -e "this.devDependencies['bootstrap-icons']='$BI_VER'"
