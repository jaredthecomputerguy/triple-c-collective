import React, { Fragment, ReactNode, useEffect, useState } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import { TextNode } from "@payloadcms/richtext-slate";
import { cn, formatDate } from "@/app/lib/utils";

export const serialize = (
  children: TextNode[],
  createdAt?: string,
): ReactNode[] =>
  children.map((node: TextNode, i: number) => {
    if (Text.isText(node)) {
      let text: ReactNode = node.text;

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

    const typedNode = node as {
      type: string;
      children: any;
      url?: string;
      textAlign: string;
    };

    switch (typedNode.type) {
      case "h1":
        return (
          <Fragment key={i}>
            <span className="text-gray-600">{formatDate(createdAt!)}</span>
            <h1 className="text-4xl text-pretty pb-4 pt-2 font-semibold">
              {serialize(typedNode.children)}
            </h1>
            <hr className="pb-4" />
          </Fragment>
        );
      case "h2":
        return (
          <h2 className="text-3xl text-pretty py-2 font-semibold" key={i}>
            {serialize(typedNode.children)}
          </h2>
        );
      case "h3":
        return (
          <h3 className="text-2xl text-pretty py-2 font-semibold" key={i}>
            {serialize(typedNode.children)}
          </h3>
        );
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
        return (
          <p
            key={i}
            className={cn([
              typedNode.textAlign === "right" && "text-right",
              typedNode.textAlign === "left" && "text-left",
              typedNode.textAlign === "center" && "text-center",
            ])}
          >
            {serialize(typedNode.children)}
          </p>
        );
    }
  });

export const BlogContent = ({
  blogContent,
  createdAt,
}: {
  blogContent: TextNode[];
  createdAt: string;
}) => {
  return <>{serialize(blogContent, createdAt)}</>;
};
