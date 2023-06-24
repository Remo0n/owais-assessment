import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function PATCH(request) {
  const body = await request.json();
  const { name, address, accountName, accountNumber, formId } = body;
  if (!name || !address || !accountName || !accountNumber || !formId) {
    return NextResponse.error();
  }
  console.log(body, "paramsparams");
  const form = await prisma.forms.update({
    where: {
      id: formId,
    },
    data: {
      title: name,
      address,
      accountName,
      accountNumber,
    },
  });
  return NextResponse.json(form);
}
