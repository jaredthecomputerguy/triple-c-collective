import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";

// TODO: Add styles to ALL element possible with Slate Rich Text Editor

export const serialize = (children) =>
  children.map((node, i) => {
    if (Text.isText(node)) {
      let text = escapeHTML(node.text);

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case "h1":
        return (
          <h1 className="text-5xl" key={i}>
            {serialize(node.children)}
          </h1>
        );
      // TODO: Iterate through all headings here...
      case "blockquote":
        return <blockquote key={i}>{serialize(node.children)}</blockquote>;
      case "ul":
        return (
          <ul className="list-disc" key={i}>
            {serialize(node.children)}
          </ul>
        );
      case "ol":
        return (
          <ol className="list-decimal" key={i}>
            {serialize(node.children)}
          </ol>
        );
      case "li":
        return (
          <li className="ml-8" key={i}>
            {serialize(node.children)}
          </li>
        );
      case "link":
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        );

      default:
        return <p key={i}>{serialize(node.children)}</p>;
    }
  });
