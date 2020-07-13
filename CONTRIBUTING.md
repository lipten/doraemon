## 开发

安装依赖

```bash
npm ci
```

文档预览

```bash
npm start
```

构建项目

```bash
npm run build
```

项目发布

```bash
npm run release
```

## 贡献

1. 新增方法在src内新增ts文件，在test新增test.ts文件，并写入单测，争取百分百通过率🤪。
2. 从master切换分支开发后推送至远程仓库并提交pull request，需得项目成员评论后即可merge至master。
3. 若是新增了一些utils方法，记得更新docs里的文档，review时记得检查。
4. 每一个方法都要`export default`。

## 须知

- docs文档撰写参照[dumi](https://github.com/umijs/dumi)。