

import { useState } from "react";
import { useTranslations } from "next-intl";
import { z } from "zod";

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(2, t("errors.name"))
      .max(100),

    phone: z
      .string()
      .trim()
      .min(6, t("errors.phone"))
      .max(30),

    email: z
      .string()
      .trim()
      .email(t("errors.email"))
      .max(255),

    subject: z
      .string()
      .trim()
      .min(2, t("errors.subject"))
      .max(150),

    message: z
      .string()
      .trim()
      .min(10, t("errors.message"))
      .max(1000),
  });

  const fields = [
    {
      name: "name",
      label: t("name"),
      type: "text",
    },
    {
      name: "phone",
      label: t("phone"),
      type: "tel",
    },
    {
      name: "email",
      label: t("email"),
      type: "email",
    },
    {
      name: "subject",
      label: t("subject"),
      type: "text",
    },
  ] as const;

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        const result = schema.safeParse(data);

        if (!result.success) {
          const next: Record<string, string> = {};

          for (const issue of result.error.issues) {
            next[String(issue.path[0])] = issue.message;
          }

          setErrors(next);
        //   toast.error(t("validationError"));

          return;
        }

        setErrors({});

        // toast.success(t("success"));

        form.reset();
      }}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground"
            >
              {field.label}
            </label>

            <input
              id={field.name}
              name={field.name}
              type={field.type}
              className="mt-2 w-full border-b border-primary bg-transparent py-3 text-sm focus:border-primary focus:outline-none"
            />

            {errors[field.name] && (
              <p className="mt-1.5 text-xs text-destructive">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground"
        >
          {t("message")}
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full resize-none border-b border-primary bg-transparent py-3 text-sm focus:border-primary focus:outline-none"
        />

        {errors.message && (
          <p className="mt-1.5 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-primary px-9 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-[color:var(--primary-deep)]"
      >
        {t("submit")}
      </button>
    </form>
  );
}