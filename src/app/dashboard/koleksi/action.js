"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Fungsi untuk konversi gambar tetap dibutuhkan di server
const convertToBase64 = (file) => {
  return new Promise(async (resolve, reject) => {
    try {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;
      resolve(base64);
    } catch (error) {
      reject(error);
    }
  });
};

export async function addOrEditKoleksi(formData) {
  const id = formData.get("id");
  const nama = formData.get("nama");
  const deskripsi = formData.get("deskripsi");
  const gambarFile = formData.get("gambar");

  let gambar = formData.get("gambarLama"); // Ambil gambar lama jika ada

  // Jika ada file gambar baru yang di-upload, konversi ke base64
  if (gambarFile && gambarFile.size > 0) {
    gambar = await convertToBase64(gambarFile);
  }

  try {
    if (id) {
      // Logic untuk Edit
      await prisma.koleksi.update({
        where: { id },
        data: { nama, deskripsi, gambar },
      });
    } else {
      // Logic untuk Tambah
      await prisma.koleksi.create({
        data: { nama, deskripsi, gambar },
      });
    }
  } catch (error) {
    console.error("Gagal menyimpan koleksi:", error);
    // Anda bisa melempar error di sini untuk ditangani di UI jika perlu
    throw new Error("Gagal menyimpan data koleksi.");
  }

  revalidatePath("/koleksi"); // Ini akan me-refresh data di halaman /koleksi
  // redirect('/koleksi') // Opsional, jika Anda ingin redirect setelah submit
}

export async function deleteKoleksi(id) {
  try {
    await prisma.koleksi.delete({
      where: { id },
    });
    revalidatePath("/koleksi"); // Refresh data setelah hapus
  } catch (error) {
    console.error("Gagal menghapus koleksi:", error);
    throw new Error("Gagal menghapus data koleksi.");
  }
}
