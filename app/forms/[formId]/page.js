import getFormById from "@/app/actions/getFormById";
import FormClient from "./FormClient";

const FormPage = async ({ params }) => {
  const form = await getFormById(params);
  if (!form) {
    return <p>something went wrong!!</p>;
  }

  return <FormClient form={form} params={params} />;
};

export default FormPage;
