"use server";

import { redirect, RedirectType } from "next/navigation";
import { cookies } from "next/headers";

const AGE_CONSENT_COOKIE = "age_consent";
const AGE_CONSENT_REMEMBER_COOKIE = "age_consent_remember";

/**
 * Set age consent cookie
 * @param rememberMe - If true, sets a persistent cookie for 30 days. Otherwise, session cookie.
 */
export async function setAgeConsentAction(rememberMe: boolean) {
  const cookieStore = await cookies();

  if (rememberMe) {
    // Set persistent cookie for 30 days
    cookieStore.set(AGE_CONSENT_COOKIE, "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/"
    });
    cookieStore.set(AGE_CONSENT_REMEMBER_COOKIE, "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/"
    });
  } else {
    // Set session cookie (expires when browser closes)
    cookieStore.set(AGE_CONSENT_COOKIE, "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/"
    });
  }
}

/**
 * Check if user has age consent
 * Also checks for crawler/bot user agents to allow Lighthouse and other tools
 */
export async function hasAgeConsentAction(userAgent?: string | null) {
  // Allow crawlers and bots to bypass age gate
  if (userAgent) {
    const botPatterns = [
      "Lighthouse",
      "PageSpeed",
      "Googlebot",
      "bingbot",
      "Slurp",
      "DuckDuckBot",
      "Baiduspider",
      "YandexBot",
      "facebookexternalhit",
      "LinkedInBot",
      "Twitterbot",
      "Slackbot",
      "WhatsApp",
      "TelegramBot"
    ];

    const isBot = botPatterns.some((pattern) =>
      userAgent.toLowerCase().includes(pattern.toLowerCase())
    );

    if (isBot) {
      return true;
    }
  }

  const cookieStore = await cookies();
  const consent = cookieStore.get(AGE_CONSENT_COOKIE);

  return consent?.value === "true";
}

export async function clearAgeConsent() {
  const cookieStore = await cookies();
  cookieStore.set(AGE_CONSENT_REMEMBER_COOKIE, "");
  cookieStore.set(AGE_CONSENT_COOKIE, "");
  redirect("/", RedirectType.replace);
}
