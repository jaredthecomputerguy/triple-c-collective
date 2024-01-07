import React, { Fragment, ReactNode } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import { TextNode } from "@payloadcms/richtext-slate";

// TODO: Add styles to ALL element possible with Slate Rich Text Editor
export const serialize = (children: TextNode[]): ReactNode[] =>
  children.map((node: TextNode, i: number) => {
    if (Text.isText(node)) {
      let text: ReactNode = escapeHTML(node.text);

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      if (node.strikethrough) {
        text = <s key={i}>{text}</s>;
      }

      if (node.underline) {
        text = <u key={i}>{text}</u>;
      }

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    const typedNode = node as { type: string; children: any; url?: string };

    switch (typedNode.type) {
      case "h1":
        return (
          <h1 className="text-5xl" key={i}>
            {serialize(typedNode.children)}
          </h1>
        );
      // TODO: Iterate through all headings here...
      case "blockquote":
        return <blockquote key={i}>{serialize(typedNode.children)}</blockquote>;
      case "ul":
        return (
          <ul className="list-disc" key={i}>
            {serialize(typedNode.children)}
          </ul>
        );
      case "ol":
        return (
          <ol className="list-decimal" key={i}>
            {serialize(typedNode.children)}
          </ol>
        );
      case "li":
        return (
          <li className="ml-8" key={i}>
            {serialize(typedNode.children)}
          </li>
        );
      case "link":
        return (
          <a href={escapeHTML(typedNode.url)} key={i}>
            {serialize(typedNode.children)}
          </a>
        );

      default:
        return <p key={i}>{serialize(typedNode.children)}</p>;
    }
  });

export const BlogContent = ({ blogContent }: { blogContent: TextNode[] }) => {
  return <article>{serialize(blogContent)}</article>;
};
