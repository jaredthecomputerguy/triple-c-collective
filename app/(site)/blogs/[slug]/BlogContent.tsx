import React, { Fragment, ReactNode } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import { TextNode } from "@payloadcms/richtext-slate";
import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";

export const serialize = (children: TextNode[], createdAt?: string): ReactNode[] =>
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
      value?: {
        alt: string;
        width: number;
        height: number;
        url: string;
      };
    };

    switch (typedNode.type) {
      case "h1":
        return (
          <Fragment key={i}>
            <span>{formatDate(createdAt!)}</span>
            <h1 className="-mb-4">{serialize(typedNode.children)}</h1>
            <hr className="my-8" />
          </Fragment>
        );
      case "h2":
        return <h2 key={i}>{serialize(typedNode.children)}</h2>;
      case "h3":
        return <h3 key={i}>{serialize(typedNode.children)}</h3>;
      case "ul":
        return <ul key={i}>{serialize(typedNode.children)}</ul>;
      case "ol":
        return <ol key={i}>{serialize(typedNode.children)}</ol>;
      case "li":
        return <li key={i}>{serialize(typedNode.children)}</li>;
      case "link":
        return (
          <a href={escapeHTML(typedNode.url)} key={i}>
            {serialize(typedNode.children)}
          </a>
        );
      case "upload":
        return (
          <Image
            key={i}
            src={typedNode.value!.url}
            alt={typedNode.value?.alt!}
            width={typedNode.value?.width}
            height={typedNode.value?.height}
          />
        );

      default:
        return (
          <p
            key={i}
            className={cn(
              typedNode.textAlign === "center" && "text-center",
              typedNode.textAlign === "right" && "text-right",
              typedNode.textAlign === "left" && "text-left"
            )}>
            {serialize(typedNode.children)}
          </p>
        );
    }
  });

export const BlogContent = ({ blogContent, createdAt }: { blogContent: TextNode[]; createdAt: string }) => {
  return <>{serialize(blogContent, createdAt)}</>;
};
