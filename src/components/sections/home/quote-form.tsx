"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  areaOptions,
  quoteSchema,
  serviceOptions,
  type QuoteFormValues,
} from "@/lib/quote-schema";
import { buildQuoteWhatsappUrl } from "@/lib/whatsapp";
import { t } from "@/content/ar";

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    mode: "onBlur",
  });

  const onSubmit = (values: QuoteFormValues) => {
    setIsSubmitting(true);
    const url = buildQuoteWhatsappUrl(values);
    window.open(url, "_blank");
    setTimeout(() => setIsSubmitting(false), 800);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">{t.quote.labels.name}</Label>
        <Input
          id="name"
          type="text"
          autoComplete="name"
          placeholder={t.quote.placeholders.name}
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name")}
        />
        {errors.name ? (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">{t.quote.labels.phone}</Label>
        <Input
          id="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder={t.quote.placeholders.phone}
          dir="ltr"
          aria-invalid={errors.phone ? "true" : "false"}
          {...register("phone")}
        />
        {errors.phone ? (
          <p className="text-xs text-destructive">{errors.phone.message}</p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="area">{t.quote.labels.area}</Label>
          <select
            id="area"
            aria-invalid={errors.area ? "true" : "false"}
            className="flex h-11 w-full rounded-2xl border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            {...register("area")}
          >
            <option value="">{t.quote.placeholders.selectArea}</option>
            {areaOptions.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          {errors.area ? (
            <p className="text-xs text-destructive">{errors.area.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">{t.quote.labels.service}</Label>
          <select
            id="service"
            aria-invalid={errors.service ? "true" : "false"}
            className="flex h-11 w-full rounded-2xl border border-input bg-background px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            {...register("service")}
          >
            <option value="">{t.quote.placeholders.selectService}</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p className="text-xs text-destructive">{errors.service.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.quote.labels.message}</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder={t.quote.placeholders.message}
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full shadow-sm"
      >
        {isSubmitting ? (
          <>
            <Send className="h-4 w-4" aria-hidden />
            <span>{t.quote.submitting}</span>
          </>
        ) : (
          <>
            <MessageCircle className="h-4 w-4" aria-hidden />
            <span>{t.quote.submit}</span>
          </>
        )}
      </Button>
    </form>
  );
}