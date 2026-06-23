import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { appConfig } from "@/lib/app-config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${appConfig.publicName} | Private writing clarity editor`,
    template: `%s | ${appConfig.publicName}`
  },
  description: appConfig.description,
  applicationName: appConfig.publicName,
  icons: {
    icon: appConfig.faviconPath,
    apple: appConfig.iconPath
  },
  openGraph: {
    title: `${appConfig.publicName} | Private writing clarity editor`,
    description: appConfig.description
  }
};

export const viewport: Viewport = {
  themeColor: appConfig.primaryColor
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
