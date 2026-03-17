"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download } from "lucide-react";
import type { App } from "@/data/apps";

interface AppCardProps {
  app: App;
  variant?: "default" | "featured" | "compact";
}

export default function AppCard({ app, variant = "default" }: AppCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // محاكاة عملية التحميل
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  // تنسيق التقييم
  const formatRating = (rating: number): string => {
    return rating.toFixed(1);
  };

  // عرض النجوم
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const isFilled = i < fullStars || (i === fullStars && hasHalfStar);
      stars.push(
        <Star
          key={i}
          className={`h-3 w-3 ${
            isFilled
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      );
    }
    return stars;
  };

  if (variant === "featured") {
    return (
      <Card
        className="group relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/10 border-2 border-emerald-500/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* أيقونة التطبيق */}
            <div className="relative flex-shrink-0">
              <div className="h-24 w-24 md:h-32 md:w-32 rounded-2xl overflow-hidden shadow-lg ring-2 ring-background">
                <Image
                  src={app.icon}
                  alt={app.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <Badge className="absolute -top-2 -left-2 bg-emerald-500">
                مميز
              </Badge>
            </div>

            {/* معلومات التطبيق */}
            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">{app.name}</h2>
                <p className="text-muted-foreground">{app.developer}</p>
              </div>

              <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                {app.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  {renderStars(app.rating)}
                  <span className="text-sm font-medium mr-1">
                    {formatRating(app.rating)}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Download className="h-4 w-4" />
                  <span className="text-sm">{app.downloads}</span>
                </div>
                <Badge variant="secondary">{app.category}</Badge>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Button
                  size="lg"
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  {isDownloading ? (
                    <>
                      <span className="animate-spin ml-2">⏳</span>
                      جاري التحميل...
                    </>
                  ) : app.isFree ? (
                    <>
                      <Download className="h-4 w-4 ml-2" />
                      تحميل مجاني
                    </>
                  ) : (
                    app.price
                  )}
                </Button>
                {!app.isFree && (
                  <span className="text-sm text-muted-foreground">
                    {app.price}
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === "compact") {
    return (
      <div
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-12 w-12 rounded-xl overflow-hidden flex-shrink-0 shadow">
          <Image
            src={app.icon}
            alt={app.name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm truncate">{app.name}</h4>
          <p className="text-xs text-muted-foreground truncate">
            {app.category}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{formatRating(app.rating)}</span>
        </div>
      </div>
    );
  }

  // البطاقة الافتراضية
  return (
    <Card
      className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          {/* أيقونة التطبيق */}
          <div className="h-16 w-16 rounded-xl overflow-hidden flex-shrink-0 shadow ring-1 ring-black/5">
            <Image
              src={app.icon}
              alt={app.name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>

          {/* معلومات التطبيق */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base truncate">{app.name}</h3>
            <p className="text-xs text-muted-foreground truncate">
              {app.developer}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium mr-1">
                  {formatRating(app.rating)}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                ({app.downloads})
              </span>
            </div>
          </div>
        </div>

        {/* زر التحميل */}
        <div className="mt-4">
          <Button
            className="w-full"
            variant={app.isFree ? "default" : "secondary"}
            onClick={handleDownload}
            disabled={isDownloading}
            size="sm"
          >
            {isDownloading ? (
              <span className="animate-spin">⏳</span>
            ) : app.isFree ? (
              "تحميل"
            ) : (
              app.price
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
