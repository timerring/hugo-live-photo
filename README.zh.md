# hugo-live-photo

<div align="center">
  <picture>
    <img src="./public/example.gif" alt="hugo-live-photo"  width="500" height="500"/>
  </picture>

为 Hugo 添加 Live Photo 效果（Hugo live photo 短代码）

Add Live Photo Effect to Hugo (Hugo live photo shortcodes)

[English Version](./README.md) |
中文版本 |
[分享你的想法](https://github.com/timerring/hugo-live-photo/issues/new) | 
[在线示例](https://blog.timerring.com/posts/0516-add-live-photo-effect-to-hugo/#%e6%95%88%e6%9e%9c%e5%b1%95%e7%a4%ba)
</div>

## 简介

这是一个 Hugo 短代码，用于在 Hugo 网站中实现类似 iOS Live Photo 的效果。当用户鼠标悬停在图片上时，会显示动态效果，移走则只会显示静态图片。

了解更多原理，欢迎阅读我的博客 [Add Live Photo Effect to Hugo](https://blog.timerring.com/posts/0516-add-live-photo-effect-to-hugo)。

## 接入方法

1. 将 `src/live-photo.html` 模版文件复制到你的 Hugo 主题目录的路径 `layouts/shortcodes/live-photo.html` (可根据个人需求更改，例如你想要 Live photo 播放声音，只需将 video 标签 muted 属性去除即可)。
2. 将 `src/live-photo.js` 脚本文件复制到你的 Hugo 主题目录的路径 `assets/live-photo.js`。
3. 追加 `src/html-head.html` 文件中的内容，到你的主题资源目录下的 `layouts/partials/html-head.html` 文件中（也可根据实际情况修改），只需确保构建页面时会引入 script 文件即可。
4. 按照 `src/_shortcodes.scss` 在你的主题目录下 `assets/_shortcodes.scss` 文件中定义样式即可，仅基本参考，可以按照自己需求自定义样式。

## 使用示例

> 通常绝大多数图床不支持显示 HEIC 的后缀，因此推荐用 `magick` 等工具将图片转为 webp，jpg 等格式方便访问。
> 
> 同样多数图床超过 20 MB 的内容 cdn 无法加速，因此也推荐使用 `ffmpeg` 等工具，将 mov 视频降低码率使用 h.264 编码为 mp4 等 html 下支持的视频格式。

在你的 Markdown 文件中使用以下短代码即可：

```html
{{< live-photo 
    image="path/to/your/image.jpg"
    video="path/to/your/video.mp4"
    desc="The image description"
>}}
```

## 贡献

欢迎提交 Pull Request 或创建 Issue 来帮助改进这个项目，欢迎交流您有关于 Live Photo 的想法。

## 许可证

MIT License 