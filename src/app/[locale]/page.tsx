'use client'
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const t = useTranslations();
  const router = useRouter()
  const translate = () => {
    let selectLang = document.getElementById("language");
    let selectValue = (selectLang as HTMLSelectElement).value;
    if (selectValue === "vietnamese") {
    router.push('/vi')
    } else if (selectValue === "english") {
    router.push("/en");
    }
  };
  return (
    <div>
      <select id="language" onChange={translate}>
        <option value="vietnamese">Tiếng Việt</option>
        <option value="english">English</option>
      </select>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
      <h1>{t("product")}</h1>
      <h2>{t("check")}</h2>
    </div>
  );
}
