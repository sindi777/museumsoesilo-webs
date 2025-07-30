"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { addOrEditKoleksi } from "./actions";

function SubmitButton({ isEditing }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[#3B2C24] text-white px-6 py-2 rounded hover:bg-[#4b3830] disabled:bg-gray-400"
    >
      {pending
        ? "Menyimpan..."
        : isEditing
        ? "Simpan Perubahan"
        : "Simpan Koleksi"}
    </button>
  );
}

export default function FormKoleksi({ initialData = null, onFinish }) {
  const formRef = useRef(null);

  const formAction = async (formData) => {
    await addOrEditKoleksi(formData);
    onFinish();

    if (!initialData) {
      formRef.current?.reset();
    }
  };

  return (
    <form
      ref={formRef}
      action={formAction}
      className="space-y-4 bg-white p-6 rounded-xl shadow"
    >
      {initialData && <input type="hidden" name="id" value={initialData.id} />}
      {initialData && (
        <input type="hidden" name="gambarLama" value={initialData.gambar} />
      )}

      <input
        type="text"
        name="nama"
        placeholder="Nama Koleksi"
        defaultValue={initialData?.nama}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        type="file"
        name="gambar"
        accept="image/*"
        className="w-full border px-4 py-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#33231A] file:text-white hover:file:bg-[#4b3830]"
        {...(initialData ? {} : { required: true })}
      />
      <textarea
        name="deskripsi"
        placeholder="Deskripsi Koleksi"
        defaultValue={initialData?.deskripsi}
        className="w-full border px-4 py-2 rounded"
        rows={4}
        required
      />
      <SubmitButton isEditing={!!initialData} />
    </form>
  );
}
