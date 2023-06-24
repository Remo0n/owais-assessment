import prisma from "@/app/libs/prismadb";

export default async function getFormById(params) {
  try {
    const { formId } = params;

    const listing = await prisma.forms.findUnique({
      where: {
        id: formId,
      },
    });

    if (!listing) {
      return null;
    }

    return {
      ...listing,
      createdAt: listing.createdAt.toString(),
    };
  } catch (error) {
    throw new Error(error);
  }
}
