import { marbleImages } from "@/config/images";

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: readonly string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  readingMinutes: number;
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    role: string;
  };
  keywords: readonly string[];
  content: readonly BlogContentBlock[];
};

const defaultAuthor = {
  name: "فريق فيو",
  role: "استشاري الرخام والتشطيبات",
} as const;

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "how-to-choose-marble-for-villa",
    title: "كيف تختار الرخام المناسب لفيلتك",
    excerpt:
      "دليل مختصر لاختيار نوع الرخام المناسب للفيلا حسب الفراغ والذوق والاستخدام مع نصائح عملية من خبراء فيو.",
    cover: marbleImages.services.supply,
    category: "اختيار الخامة",
    readingMinutes: 6,
    publishedAt: "2025-01-05",
    updatedAt: "2025-01-05",
    author: defaultAuthor,
    keywords: [
      "اختيار الرخام",
      "رخام فلل",
      "أفضل أنواع الرخام",
    ],
    content: [
      {
        type: "paragraph",
        text: "اختيار الرخام المناسب للفيلا قرار يؤثر في مظهر المساحة وقيمتها لسنوات قادمة، لذلك يجب دراسته بعناية من عدة جوانب.",
      },
      { type: "heading", text: "حدد الاستخدام أولاً" },
      {
        type: "paragraph",
        text: "رخام المدخل يختلف عن رخام المطبخ، والحمامات تحتاج خامة مقاومة للرطوبة، لذلك تحديد الاستخدام هو الخطوة الأولى.",
      },
      { type: "heading", text: "اختر اللون المناسب" },
      {
        type: "list",
        items: [
          "الألوان الفاتحة توسع المساحة وتعطي إحساساً بالفخامة الهادئة",
          "الألوان الداكنة تعطي دفئاً وحضوراً للمساحة",
          "التعروق الطبيعي يزيد جمال الرخام لكن يحتاج تنسيقاً دقيقاً",
        ],
      },
      { type: "heading", text: "اهتم بجودة التركيب" },
      {
        type: "paragraph",
        text: "خامة ممتازة مع تركيب ضعيف يفقدها أثرها، لذلك التعامل مع فريق خبير مثل فيو يضمن النتيجة التي تليق بمساحتك.",
      },
    ],
  },
  {
    slug: "marble-basins-guide",
    title: "دليل اختيار مغاسل الرخام الفاخرة",
    excerpt:
      "ما يجب معرفته قبل طلب مغسلة رخام تفصيل، من الخامة حتى التركيب النهائي، مع نصائح عملية للحصول على أفضل نتيجة.",
    cover: marbleImages.services.basin,
    category: "مغاسل",
    readingMinutes: 5,
    publishedAt: "2025-01-12",
    updatedAt: "2025-01-12",
    author: defaultAuthor,
    keywords: [
      "مغاسل رخام",
      "تفصيل مغسلة",
      "مغسلة حمام",
    ],
    content: [
      {
        type: "paragraph",
        text: "مغاسل الرخام المفصلة تجمع بين الجمال والوظيفة، واختيارها الصحيح يرفع مستوى ديكور الحمام بشكل ملحوظ.",
      },
      { type: "heading", text: "أنواع الخامات المناسبة" },
      {
        type: "list",
        items: [
          "الرخام الطبيعي للفخامة القصوى",
          "الرخام الصناعي لمقاومة أعلى للبقع",
          "خامات خفيفة الوزن لتطبيقات محددة",
        ],
      },
      { type: "heading", text: "أشكال المغسلة" },
      {
        type: "paragraph",
        text: "يمكن تفصيل المغسلة بشكل مدمج مع الديكور أو كقطعة مستقلة، حسب مساحة الحمام والطابع المطلوب.",
      },
    ],
  },
  {
    slug: "marble-maintenance-tips",
    title: "نصائح للحفاظ على لمعة الرخام",
    excerpt:
      "خطوات بسيطة وفعالة للحفاظ على لمعة وجمال الرخام في منزلك لأطول فترة، من نصائح خبراء فيو للصيانة.",
    cover: marbleImages.services.polish,
    category: "صيانة",
    readingMinutes: 4,
    publishedAt: "2025-01-18",
    updatedAt: "2025-01-18",
    author: defaultAuthor,
    keywords: [
      "صيانة رخام",
      "تلميع رخام",
      "نظافة الرخام",
    ],
    content: [
      {
        type: "paragraph",
        text: "الرخام خامة حساسة تحتاج للعناية الدورية لتحافظ على لمعتها ومظهرها الفاخر، وأي إهمال قد يلحق بها أضراراً دائمة.",
      },
      { type: "heading", text: "نصائح يومية" },
      {
        type: "list",
        items: [
          "تجنب المنظفات الحمضية مثل الليمون والخل",
          "امسح البقع فوراً قبل تغلغلها في السطح",
          "استخدم قطعة قماش ناعمة للتنظيف اليومي",
          "اطلب تلميعاً احترافياً مرة كل 6 أشهر",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2) {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
}