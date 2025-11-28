import { Brain, Video, Image as ImageIcon, Music, Mic, Layers, Wand2 } from 'lucide-react';

export const AUTHOR_TELEGRAM = "https://t.me/dmitriy_ferixdi";
export const PAYMENT_IMAGE_URL = "https://i.postimg.cc/SxQW2tH5/photo-2025-11-28-09-09-12.jpg";

export const AI_MODELS = [
  "Google Nano Banana Pro", "ByteDance Seedance 1.0 Pro Fast", "Grok Grok Imagine", "Hailuo 2.3",
  "Sora 2 Pro Storyboard", "Veo 3.1", "Sora 2 Pro", "Sora 2 Watermark Remove API", "Veo 3",
  "Seedance V1", "Kling V2.1", "Wan V2.2 A14B", "Hailuo 02", "Wan 2.2 Animate", "Kling 2.5 Turbo",
  "Wan 2.5", "Topaz Video Upscaler", "Wan 2.2 A14B Speech to Video Turbo", "Runway Video Generation",
  "Ideogram V3", "Imagen 4", "Midjourney API", "Seedream", "NanoBanana‑Gemini 2.5 Flash Image Preview",
  "Qwen Image", "Qwen Image Edit", "Ideogram Character", "4o Image", "Flux Kontext", "Topaz Image Upscale",
  "Seedream 4.0", "Recraft Remove Background", "Recraft Crisp Upscale", "Ideogram V3 Reframe Image",
  "Sora 2 (доп. режим)", "Suno API", "ElevenLabs Audio Isolation", "ElevenLabs Sound Effect",
  "ElevenLabs Speech to Text", "ElevenLabs Text to Speech", "Kling AI Avatar", "Infinitalk API‑AI Lip‑Sync Generator"
];

export const FEATURES = [
  {
    icon: Video,
    title: "Генерация видео",
    desc: "Sora, Veo, Kling, Runway — топовые модели для создания видеоконтента."
  },
  {
    icon: ImageIcon,
    title: "Создание изображений",
    desc: "Midjourney, Ideogram, Flux — шедевры в один клик."
  },
  {
    icon: Layers,
    title: "Улучшение и обработка",
    desc: "Upscale, удаление фона, рефрейминг изображений."
  },
  {
    icon: Music,
    title: "Музыка и звук",
    desc: "Suno для музыки, ElevenLabs для эффектов и обработки."
  },
  {
    icon: Mic,
    title: "Голос и синтез",
    desc: "Text-to-Speech, клонирование голоса, Speech-to-Text."
  },
  {
    icon: Wand2,
    title: "Лип-синк и аватары",
    desc: "Оживление лиц под голос, создание говорящих аватаров."
  },
];

export const CURRICULUM = [
  {
    day: "Старт",
    title: "Установка основы",
    desc: "Разворачиваем бота на твоем сервере. Вставляем ключи в готовый шаблон."
  },
  {
    day: "Настройка",
    title: "Подключение нейросетей",
    desc: "Активируем нужные из 42 моделей. Выбираем режимы под твою нишу."
  },
  {
    day: "Бизнес",
    title: "Монетизация и трафик",
    desc: "Настраиваем тарифы. Разбираем, где брать клиентов и как продавать."
  },
  {
    day: "Финал",
    title: "Первые деньги",
    desc: "Готовый продукт, который можно показывать клиентам и принимать оплату."
  }
];