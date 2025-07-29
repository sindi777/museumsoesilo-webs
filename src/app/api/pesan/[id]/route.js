export async function DELETE(req, context) {
  try {
    const { params } = context 
    const id = Number(params.id)

    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 })
    }

    await prisma.pesan.delete({ where: { id } })

    return NextResponse.json({ message: 'Pesan berhasil dihapus' })
  } catch (error) {
    return NextResponse.json({ error: 'Gagal menghapus pesan' }, { status: 500 })
  }
}
