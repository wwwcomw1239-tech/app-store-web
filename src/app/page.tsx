import Navbar from "@/components/Navbar";
import AppCard from "@/components/AppCard";
import {
  apps,
  featuredApp,
  getPopularApps,
  getRecentGames,
  getEducationApps,
} from "@/data/apps";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronLeft, TrendingUp, Gamepad2, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const popularApps = getPopularApps();
  const recentGames = getRecentGames();
  const educationApps = getEducationApps();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* قسم البطل - التطبيق المميز */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-emerald-500" />
            <h2 className="text-xl font-bold">تطبيق مميز</h2>
          </div>
          <AppCard app={featuredApp} variant="featured" />
        </section>

        {/* قسم التطبيقات الشائعة */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-500" />
              <h2 className="text-xl font-bold">تطبيقات شائعة</h2>
            </div>
            <Link href="/?category=popular">
              <Button variant="ghost" size="sm" className="text-emerald-600">
                عرض الكل
                <ChevronLeft className="h-4 w-4 mr-1" />
              </Button>
            </Link>
          </div>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-4 pb-4">
              {popularApps.map((app) => (
                <div key={app.id} className="w-[200px] flex-shrink-0">
                  <AppCard app={app} />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* قسم الألعاب الحديثة */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-purple-500" />
              <h2 className="text-xl font-bold">ألعاب حديثة</h2>
            </div>
            <Link href="/?category=games">
              <Button variant="ghost" size="sm" className="text-purple-600">
                عرض الكل
                <ChevronLeft className="h-4 w-4 mr-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recentGames.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>

        {/* قسم التطبيقات التعليمية */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-blue-500" />
              <h2 className="text-xl font-bold">تطبيقات تعليمية</h2>
            </div>
            <Link href="/?category=education">
              <Button variant="ghost" size="sm" className="text-blue-600">
                عرض الكل
                <ChevronLeft className="h-4 w-4 mr-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {educationApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>

        {/* جميع التطبيقات */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-bold">جميع التطبيقات</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>
      </main>

      {/* التذييل */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* معلومات المتجر */}
            <div>
              <h3 className="font-bold text-lg mb-4">متجر التطبيقات</h3>
              <p className="text-sm text-muted-foreground">
                اكتشف أفضل التطبيقات والألعاب العربية والعالمية.
                متجرك الأول للتحميلات الآمنة والموثوقة.
              </p>
            </div>

            {/* روابط سريعة */}
            <div>
              <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/?category=games" className="hover:text-foreground transition-colors">
                    الألعاب
                  </Link>
                </li>
                <li>
                  <Link href="/?category=apps" className="hover:text-foreground transition-colors">
                    التطبيقات
                  </Link>
                </li>
                <li>
                  <Link href="/?category=education" className="hover:text-foreground transition-colors">
                    تعليمية
                  </Link>
                </li>
              </ul>
            </div>

            {/* تواصل معنا */}
            <div>
              <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>الدعم الفني: support@appstore.com</li>
                <li>الشروط والأحكام</li>
                <li>سياسة الخصوصية</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 متجر التطبيقات. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
