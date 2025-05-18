# hugo-live-photo

<div align="center">
  <picture>
    <img src="./public/example.gif" alt="hugo-live-photo"  width="500" height="500"/>
  </picture>

Add Live Photo Effect to Hugo (Hugo live photo shortcodes) 

在 hugo 中实现 live photo 功能（Hugo live photo 短代码）

English Version |
[中文版本](./README.zh.md) |
[Share your idea](https://github.com/timerring/hugo-live-photo/issues/new) ｜
[Live demo](https://blog.timerring.com/posts/0516-add-live-photo-effect-to-hugo/#%e6%95%88%e6%9e%9c%e5%b1%95%e7%a4%ba)

</div>

## Introduction

This is a Hugo shortcode that implements iOS-like Live Photo functionality in your Hugo website. When users hover over an image, it displays a dynamic effect, and when the mouse moves away, it returns to the static image.

To learn more about the implementation details, please read my blog post [Add Live Photo Effect to Hugo](https://blog.timerring.com/posts/0516-add-live-photo-effect-to-hugo).

## Installation

1. Copy the `src/live-photo.html` template file to your Hugo theme directory at `layouts/shortcodes/live-photo.html` (You can modify it according to your needs, for example, if you want the Live Photo to play sound, just remove the `muted` attribute from the video tag).
2. Copy the `src/live-photo.js` script file to your Hugo theme directory at `assets/live-photo.js`.
3. Append the content from `src/html-head.html` to your theme's `layouts/partials/html-head.html` file (you can modify it according to your needs), just make sure the script `live-photo.js` file is included when building the page.
4. Define styles in your theme's `assets/_shortcodes.scss` file following the `src/_shortcodes.scss` as a basic reference. You can customize the styles according to your needs.

## Usage Example

> Most image hosting services don't support HEIC format, so it's recommended to convert images to `webp`, `jpg`, etc. using tools like `magick`.
>
> Similarly, most CDNs cannot accelerate content larger than 20 MB, so it's recommended to use tools like `ffmpeg` to reduce the bitrate of mov videos and encode them as `mp4` or other HTML-supported video formats using h.264.

Use the following shortcode in your Markdown files:

```html
{{< live-photo 
    image="path/to/your/image.jpg"
    video="path/to/your/video.mp4"
    desc="The image description"
>}}
```

## Contributing

Feel free to submit Pull Requests or create Issues to help improve this project. Welcome your ideas about Live Photo functionality.

## License

MIT License