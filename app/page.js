export const dynamic = "force-dynamic";

import Blob from "./components/Blob/Blob";
import getForms from "./actions/getForms";
import FormHeader from "./components/Form/FormHeader";
import FormTable from "./components/Form/FormTable";
import StatusFilter from "./components/Form/StatusFilter";
import Container from "./components/UI/Container";
import FormActions from "./components/Form/FormActions";

export default async function Home({ searchParams }) {
  let formsData = await getForms(searchParams);

  const allData = formsData.map((listing) => ({
    ...listing,
    action: <FormActions id={listing.id} />,
  }));
  const columns = [
    { field: "id", header: "ID" },
    { field: "title", header: "Form Title" },
    { field: "createdAt", header: "Date" },
    { field: "status", header: "Status" },
    { field: "action", header: "Actions" },
  ];

  return (
    <>
      <Container>
        <FormHeader />
        {formsData && <StatusFilter />}
        <FormTable data={allData} columns={columns} />
      </Container>
      <Blob
        EOneColor="#DCAC00"
        ETwoColor="#2A2522"
        EThreeColor="#DCAC00"
        style={{ left: "calc(50% - 14rem)", top: 0 }}
      />
      <Blob
        EOneColor="#004A91"
        ETwoColor="#2A2522"
        EThreeColor="#004A91"
        style={{ left: -120, bottom: 0 }}
      />
      <Blob
        EOneColor="#004A91"
        ETwoColor="#2A2522"
        EThreeColor="#004A91"
        style={{ right: 0, bottom: 0 }}
      />
    </>
  );
}
