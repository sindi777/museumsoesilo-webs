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
  const idString = formData.get("id"); // 1. Ambil id sebagai string
  const nama = formData.get("nama");
  const deskripsi = formData.get("deskripsi");
  const gambarFile = formData.get("gambar");

  let gambar = formData.get("gambarLama");

  if (gambarFile && gambarFile.size > 0) {
    gambar = await convertToBase64(gambarFile);
  }

  try {
    if (idString) {
      // 2. Jika sedang mode edit (idString ada)
      const id = parseInt(idString, 10); // 3. UBAH STRING MENJADI ANGKA

      // Logic untuk Edit
      await prisma.koleksi.update({
        where: { id: id }, // 4. Gunakan id yang sudah menjadi angka
        data: { nama, deskripsi, gambar },
      });
    } else {
      // Logic untuk Tambah
      await prisma.koleksi.create({
        data: { nama, deskripsi, gambar },
      });
    }
  } catch (error) {
    console.error("DETAIL ERROR PRISMA:", error);
    if (error.code === "P2025") {
      throw new Error(
        `Gagal memperbarui: Koleksi dengan ID yang diberikan tidak ditemukan.`
      );
    }
    throw new Error(
      `Terjadi kesalahan pada database saat mencoba menyimpan koleksi.`
    );
  }

  revalidatePath("/dashboard/koleksi"); // Pastikan path ini sesuai dengan URL Anda
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
