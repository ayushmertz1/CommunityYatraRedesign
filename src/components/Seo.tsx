import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
}

/** Per-route document head management (SPA-friendly). */
export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);

  return null;
}
