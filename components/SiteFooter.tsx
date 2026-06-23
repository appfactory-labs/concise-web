import Link from "next/link";
import { appConfig } from "@/lib/app-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-brand-block">
          <Link className="footer-brand" href="/">
            <img className="footer-icon" src={appConfig.iconPath} alt="" />
            <span>{appConfig.publicName}</span>
          </Link>
          <p>Private writing clarity checks, fully on device.</p>
        </div>
        <nav aria-label="Footer">
          <Link href={appConfig.privacyPath}>Privacy</Link>
          <Link href={appConfig.termsPath}>Terms</Link>
          <Link href={appConfig.supportPath}>Support</Link>
        </nav>
        <p className="copyright">Copyright 2026 {appConfig.company}. All rights reserved.</p>
      </div>
    </footer>
  );
}
