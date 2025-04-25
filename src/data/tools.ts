export interface Tool {
  name: string;
  description: string;
  icon: string;
  url: string;
  category: string;
  tags?: string[];
}

export const tools: Tool[] = [
  {
    name: "ChatGPT",
    description: "OpenAI 开发的 AI 聊天助手",
    icon: "🤖",
    url: "https://chat.openai.com",
    category: "AI 工具",
    tags: ["AI", "问答", "创作"]
  },
  {
    name: "Midjourney",
    description: "AI 图像生成工具",
    icon: "🎨",
    url: "https://www.midjourney.com",
    category: "AI 工具",
    tags: ["图像生成", "艺术", "设计"]
  },
  {
    name: "Claude",
    description: "Anthropic 开发的 AI 助手",
    icon: "🧠",
    url: "https://claude.ai",
    category: "AI 工具",
    tags: ["AI", "问答", "创作"]
  },
  {
    name: "Leonardo AI",
    description: "专业的 AI 艺术创作平台",
    icon: "🎭",
    url: "https://leonardo.ai",
    category: "AI 工具",
    tags: ["图像生成", "艺术", "设计"]
  },
  {
    name: "trace.moe",
    description: "以图搜番，快速定位动画场景出处",
    icon: "🔍",
    url: "https://trace.moe",
    category: "搜索工具",
    tags: ["以图搜图", "动画", "视频"]
  },
  {
    name: "SauceNAO",
    description: "强大的动漫插画以图搜图引擎",
    icon: "🖼️",
    url: "https://saucenao.com",
    category: "搜索工具",
    tags: ["以图搜图", "插画", "动漫"]
  },
  {
    name: "AV Kensaku",
    description: "基于图像识别的AV女优信息搜索工具",
    icon: "🔎",
    url: "https://av.kensaku.online",
    category: "搜索工具",
    tags: ["以图搜图", "视频"]
  },
  {
    name: "Cobalt",
    description: "在线视频下载工具，支持多个平台",
    icon: "⬇️",
    url: "https://cobalt.tools/",
    category: "下载工具",
    tags: ["视频下载", "在线工具", "下载"]
  },
  {
    name: "Motrix",
    description: "开源的全能下载工具",
    icon: "📥",
    url: "https://motrix.app",
    category: "下载工具",
    tags: ["下载", "开源"]
  },
  {
    name: "B站",
    description: "哔哩哔哩，二次元视频分享平台",
    icon: "🎬",
    url: "https://www.bilibili.com",
    category: "视频平台",
    tags: ["视频", "二次元", "弹幕"]
  },
  {
    name: "Ahrefs",
    description: "专业的 SEO 工具和网站分析平台",
    icon: "📈",
    url: "https://ahrefs.com/zh",
    category: "SEO 工具",
    tags: ["SEO", "网站分析", "关键词"]
  },
  {
    name: "Figma",
    description: "专业的在线设计工具",
    icon: "✏️",
    url: "https://www.figma.com",
    category: "设计资源",
    tags: ["设计", "UI", "UX"]
  },
  {
    name: "Dribbble",
    description: "设计师作品分享平台",
    icon: "🎨",
    url: "https://dribbble.com",
    category: "设计资源",
    tags: ["设计", "灵感", "UI"]
  },
  {
    name: "MDN",
    description: "Web 开发者文档",
    icon: "📚",
    url: "https://developer.mozilla.org",
    category: "前端资源",
    tags: ["Web", "开发", "文档"]
  },
  {
    name: "Can I Use",
    description: "浏览器特性支持查询",
    icon: "🌐",
    url: "https://caniuse.com",
    category: "前端资源",
    tags: ["Web", "兼容性", "CSS"]
  },
  {
    name: "识典古籍",
    description: "AI 驱动的古籍智能识别平台",
    icon: "📜",
    url: "https://shidian.art",
    category: "书籍资源",
    tags: ["古籍", "AI", "文化"]
  },
  {
    name: "书伴",
    description: "电子书伴侣，Kindle 资源与使用技巧分享",
    icon: "📖",
    url: "https://bookfere.com",
    category: "书籍资源",
    tags: ["电子书", "Kindle", "阅读"]
  },
  {
    name: "Readest",
    description: "跨平台阅读工具",
    icon: "📱",
    url: "https://readest.com",
    category: "优质软件",
    tags: ["阅读", "跨平台"]
  },
  {
    name: "Cobalt",
    description: "高性能的视频下载和处理工具",
    icon: "⚡",
    url: "https://github.com/wallace5303/cobalt",
    category: "开源项目",
    tags: ["视频下载", "开源", "GitHub"]
  },
  {
    name: "trzsz-ssh",
    description: "支持 tmux 的现代化 SSH 客户端",
    icon: "🔑",
    url: "https://github.com/trzsz/trzsz-ssh",
    category: "开源项目",
    tags: ["SSH", "终端", "开源"]
  },
  {
    name: "bili-hardcore",
    description: "哔哩哔哩视频下载增强工具",
    icon: "🎥",
    url: "https://github.com/bili-hardcore/bili-hardcore",
    category: "开源项目",
    tags: ["视频下载", "B站", "开源"]
  },
  {
    name: "social-auto-upload",
    description: "社交媒体自动发布工具",
    icon: "📢",
    url: "https://github.com/social-auto-upload/social-auto-upload",
    category: "开源项目",
    tags: ["社交媒体", "自动化", "开源"]
  },
  {
    name: "serverless-qrcode-hub",
    description: "生成永久二维码的工具，不需要服务器",
    icon: "📱",
    url: "https://github.com/serverless-qrcode-hub/serverless-qrcode-hub",
    category: "开源项目",
    tags: ["二维码", "无服务器", "开源"]
  },
  {
    name: "DouyinLiveRecorder",
    description: "直播录制和下载工具",
    icon: "🎥",
    url: "https://github.com/DouyinLiveRecorder/DouyinLiveRecorder",
    category: "开源项目",
    tags: ["直播", "录制", "开源"]
  }
];

export const categories = Array.from(new Set(tools.map(tool => tool.category))); 