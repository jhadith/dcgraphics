import { useEffect } from "react";

function setMetaContent(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

export function Seo({ title, description }) {
  useEffect(() => {
    document.title = title;
    setMetaContent("description", description);
  }, [description, title]);

  return null;
}
