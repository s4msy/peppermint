const { prisma } = require("../../../../prisma/prisma");

export default async function handler(req, res) {
  try {
    await prisma.notes.delete({
      where: { id: Number(req.params.id) },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
