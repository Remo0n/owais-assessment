import prisma from "@/app/libs/prismadb";

export default async function geForms(params) {
  try {
    const { status } = params;
    let query = {};

    if (status) {
      console.log(status, "status");
      query.status = { in: status };
    } else {
      query.status = "approved";
    }
    const forms = await prisma.forms.findMany({
      where: query,
    });

    const safeForms = forms.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    }));

    return safeForms;
  } catch (err) {
    throw new Error(err);
  }
}
