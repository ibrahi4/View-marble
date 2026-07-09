"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, MessageCircle, PhoneCall, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/config/site";
import {
  areaOptions,
  quoteSchema,
  serviceOptions,
  type QuoteFormValues,
} from "@/lib/quote-schema";
import { buildQuoteWhatsappUrl } from "@/lib/whatsapp";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const areaValue = watch("area");
  const serviceValue = watch("service");

  const onSubmit = (values: QuoteFormValues) => {
    const url = buildQuoteWhatsappUrl(values);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-[24px] border border-border/70 bg-background/80 p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </div>

        <h3 className="mt-5 text-xl font-semibold">
          {"\u062A\u0645 \u062A\u062D\u0648\u064A\u0644 \u0637\u0644\u0628\u0643 \u0625\u0644\u0649 \u0648\u0627\u062A\u0633\u0627\u0628"}
        </h3>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {"\u0625\u0630\u0627 \u0644\u0645 \u064A\u0641\u062A\u062D \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B\u060C \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0627\u0644\u0623\u0632\u0631\u0627\u0631 \u0628\u0627\u0644\u0623\u0633\u0641\u0644."}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{"\u0648\u0627\u062A\u0633\u0627\u0628"}</span>
            </Link>
          </Button>

          <Button asChild variant="outline">
            <Link href={`tel:${siteConfig.phone}`}>
              <PhoneCall className="h-4 w-4" />
              <span>{"\u0627\u062A\u0635\u0627\u0644"}</span>
            </Link>
          </Button>

          <Button variant="ghost" onClick={() => setSubmitted(false)}>
            <span>{"\u0637\u0644\u0628 \u062C\u062F\u064A\u062F"}</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{"\u0627\u0644\u0627\u0633\u0645"}</Label>
          <Input
            id="name"
            placeholder={"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644"}
            {...register("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name ? (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{"\u0627\u0644\u062C\u0648\u0627\u0644"}</Label>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            dir="ltr"
            placeholder="05xxxxxxxx"
            {...register("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone ? (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>{"\u0627\u0644\u0645\u0646\u0637\u0642\u0629"}</Label>
          <Select
            value={areaValue}
            onValueChange={(value) =>
              setValue("area", value as QuoteFormValues["area"], { shouldValidate: true })
            }
          >
            <SelectTrigger className="w-full" aria-invalid={!!errors.area}>
              <SelectValue placeholder={"\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u0637\u0642\u0629"} />
            </SelectTrigger>
            <SelectContent>
              {areaOptions.map((area) => (
                <SelectItem key={area} value={area}>
                  {area}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.area ? (
            <p className="text-xs text-destructive">{errors.area.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label>{"\u0627\u0644\u062E\u062F\u0645\u0629"}</Label>
          <Select
            value={serviceValue}
            onValueChange={(value) =>
              setValue("service", value as QuoteFormValues["service"], { shouldValidate: true })
            }
          >
            <SelectTrigger className="w-full" aria-invalid={!!errors.service}>
              <SelectValue placeholder={"\u0627\u062E\u062A\u0631 \u0627\u0644\u062E\u062F\u0645\u0629"} />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service ? (
            <p className="text-xs text-destructive">{errors.service.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          {"\u062A\u0641\u0627\u0635\u064A\u0644 \u0625\u0636\u0627\u0641\u064A\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)"}
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder={"\u0648\u0635\u0641 \u0645\u062E\u062A\u0635\u0631 \u0644\u0644\u0645\u0634\u0631\u0648\u0639 \u0623\u0648 \u0627\u0644\u0645\u0633\u0627\u062D\u0629"}
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          <Send className="h-4 w-4" />
          <span>
            {isSubmitting
              ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0631\u0633\u0627\u0644..."
              : "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628"}
          </span>
        </Button>

        <Button asChild variant="outline" size="lg">
          <Link href={`tel:${siteConfig.phone}`}>
            <PhoneCall className="h-4 w-4" />
            <span>{siteConfig.phoneDisplay}</span>
          </Link>
        </Button>
      </div>

      <p className="text-xs leading-6 text-muted-foreground">
        {"\u0628\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628 \u0623\u0646\u062A \u062A\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0644\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u062A\u062D\u062F\u064A\u062F \u0645\u0648\u0639\u062F \u0627\u0644\u0645\u0639\u0627\u064A\u0646\u0629."}
      </p>
    </form>
  );
}