import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as i,c as l,a,b as e,d as r,e as s}from"./app-bf262ea6.js";const d={},h={href:"http://qttabbar.wikidot.com/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/indiff/qttabbar",target:"_blank",rel:"noopener noreferrer"},b=s('<p>目前两个版本都存在相同问题，菜单栏是灰色的选不了 QTTabBar，IE 管理加载项里是空的，第三方扩展也启用了。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>安装完成后，资源管理器地址栏-&gt;输入「控制面板」-&gt;按下 ALT-&gt;查看-&gt;工具栏-&gt;勾选「QTTabBar」，即可开启 QTTabBar。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>有时选项里找不到 QTTabBar，这可能是因为你的 IE 浏览器禁止了第三方插件导致的。</p><p>解决办法：打开 IE 浏览器，点击「设置」&gt;「Internet 选项」&gt;「高级」，勾选「启用第三方浏览器扩展」，重启后生效。如果重启之后还是没有找到 QTTabBar，则打开 IE 浏览器，选择「设置」&gt;「管理加载项」，点击启用再确认一次。</p><p>启用 QTTabBar 后，IE 浏览器可能变得怪怪的，别担心，把两片白色区域 x 掉，再次启动 IE 再 x 一次然后就恢复正常了。</p><h3 id="qttabbar-失效" tabindex="-1"><a class="header-anchor" href="#qttabbar-失效" aria-hidden="true">#</a> QTTabBar 失效</h3><p>2022.05 补丁 KB5012643 KB5012159 导致 QTTabBar 失效。</p><p>管理员方式运行命令提示符 <code>dism /online /enable-feature /featurename:netfx3 /all</code>，执行完成重启电脑。</p><h2 id="常用设置" tabindex="-1"><a class="header-anchor" href="#常用设置" aria-hidden="true">#</a> 常用设置</h2><p>QTTabBar 的选项非常强大，有空可以慢慢研究、打造自己趁手的多标签资源管理器。以下为常用的设置项，√ 表示启用，× 表示禁用。</p><h3 id="汉化" tabindex="-1"><a class="header-anchor" href="#汉化" aria-hidden="true">#</a> 汉化</h3><p>对准多标签栏的空白处右键单击 <code>QTTabBar Options</code>，点击右侧带下载图标的 <code>Download Language File</code> 按钮。建议下载 Author 为 MCRy 的中文语言包，然后回到 <code>QTTabBar Options</code>，选择刚才下载的翻译文件，保存选项。再重新打开这个界面时，就是中文的了。</p><h3 id="选项卡-标签设置" tabindex="-1"><a class="header-anchor" href="#选项卡-标签设置" aria-hidden="true">#</a> 选项卡/标签设置</h3><ul><li>× 添加“+”按钮到 选项卡栏（嫌丑。我们可以通过鼠标滚轮点击文件夹或左侧盘符来新建标签页</li><li>× 在选项卡上显示关闭按钮（嫌丑 x2。熟悉 Chrome 的都知道 Ctrl+W 关闭当前标签、滚轮点击标签也可关闭。这两种快捷方式在这里同样适用</li><li>√ 已锁定选项卡的行为 - 禁止关闭窗口（Ctrl+L 锁定标签，被锁定的标签无法被关闭。开启此项后整个窗口也无法被关闭，防止误操作</li><li>√ 按 Ctrl+Tab 显示选项卡切换器（挺好用</li></ul><h3 id="窗口" tabindex="-1"><a class="header-anchor" href="#窗口" aria-hidden="true">#</a> 窗口</h3><ul><li>√ 捕获窗口 - 通过 ShellExecuteHooks 捕获窗口（听说不开它 Win+E 就不显示 QTTabBar。</li></ul><h3 id="鼠标事件" tabindex="-1"><a class="header-anchor" href="#鼠标事件" aria-hidden="true">#</a> 鼠标事件</h3><ul><li>互动 - 点击标签栏的 + 按钮，打开桌面。</li><li>窗口和任务栏 - 窗口的关闭按钮 - 关闭窗口（这是 Clover 的遗留习惯吧。看个人爱好。</li></ul><h3 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h3><ul><li>× 扩展、字体和颜色 - 删除掉一些视频文件格式（默认开启的视频预览没啥卵用，还会导致鼠标移动顿卡。</li></ul><h3 id="群组" tabindex="-1"><a class="header-anchor" href="#群组" aria-hidden="true">#</a> 群组</h3><ul><li>建立群组，并将其设为启动群组。打开 expoloer 会自动启动。</li></ul><hr class="footnotes-sep">',24),f={class:"footnotes"},p={class:"footnotes-list"},T={id:"footnote1",class:"footnote-item"},u={href:"https://github.com/indiff/qttabbar/wiki/Windows11%E5%AE%89%E8%A3%85qttabbar",target:"_blank",rel:"noopener noreferrer"},_=a("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function B(x,Q){const t=n("ExternalLinkIcon");return i(),l("div",null,[a("p",null,[e("QTTabBar 让你在 Windows 资源管理器中使用 Tab 多标签功能。这款应用存在两个版本，一个是日本作者 @Quizo 的"),a("a",h,[e("原版 QTTabBar"),r(t)]),e("（闭源，更新慢），另一个是国内反编译出的"),a("a",c,[e("开源 QTTabBar"),r(t)]),e("。")]),b,a("section",f,[a("ol",p,[a("li",T,[a("p",null,[a("a",u,[e("Windows11 安装 qttabbar"),r(t)]),e(),_])])])])])}const E=o(d,[["render",B],["__file","QTTabBar.html.vue"]]);export{E as default};
