"use client";

import "./style.css";

import { useState } from "react";

import TextInput from "@/components/form/TextInput";
import LoaderElement from '@/components/loader/LoaderElement';

import { GiEating } from "react-icons/gi";

import { createShortLink } from "./actions";
import { retrieveShortLink } from '@/utils/shortLinks';

export default function ShortLForm() {
  const [submitState, setSubmitState] = useState(null);
  const [shortLinkId, setShortLinkId] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const link = formData.get("from_email");

    setSubmitState("loading");

    try {
        const { shortId } = await createShortLink(formData);
        setSubmitState("success");
        setShortLinkId(shortId);
    } catch (error) {
        setSubmitState("error");
        console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl w-full flex flex-col gap-6 mx-auto"
    >
      <TextInput
        type="link"
        name="url"
        label="lien à manger"
        placeholder="https://..."
        disabled={!!submitState}
      />

      <TextInput
        type="link"
        name="shortcut"
        label="raccourci (optionnel)"
        required={false}
        placeholder="mon-pti-lien"
        disabled={!!submitState}
      />

      <div className="flex items-center justify-between">
        {submitState === "loading" ? (
          <LoaderElement size={40} />
        ) : submitState === "success" ? (
          <span className="text-green-500">
            :) C’est parfait, lien est devenu tout petit !
          </span>
        ) : submitState === "error" ? (
          <span className="text-red-600">
            :( Il y a eu un problème avec la digestion du lien...
          </span>
        ) : (
          <button type="submit" className="btn btn-primary">
            <GiEating className="inline" /> Manger
          </button>
        )}
      </div>
      <div>{shortLinkId && (
        <p className="text-sm text-muted-foreground">
          Votre lien raccourci : <a href={retrieveShortLink(shortLinkId)} className="underline">{retrieveShortLink(shortLinkId)}</a>
        </p>
      )}</div>
    </form>
  );
}