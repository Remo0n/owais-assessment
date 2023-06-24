import Container from "@/app/components/UI/Container";
import FormHeader from "@/app/components/Form/FormHeader";
import Blob from "@/app/components/Blob/Blob";
import TabPane from "@/app/components/Tabs/TabPane";
import Tabs from "@/app/components/Tabs/Tabs";

import CheckMark from "@/public/assets/icons/CheckMark";
import UserIcon from "@/public/assets/icons/UserIcon";
import ExclamationMark from "@/public/assets/icons/ExclamationMark";
import CustodianForm from "@/app/components/UI/CustodianForm";
import InfoForm from "@/app/components/UI/InfoForm";
import CertificationForm from "@/app/components/UI/CertificationForm";
const FormClient = ({ params }) => {
  return (
    <Container>
      <FormHeader />
      <Tabs>
        <TabPane title="Custodian Details" icon={<UserIcon />}>
          <CustodianForm params={params} />
        </TabPane>
        <TabPane title="Other Information" icon={<ExclamationMark />}>
          <InfoForm />
        </TabPane>
        <TabPane title="Certification" icon={<CheckMark />}>
          <CertificationForm />
        </TabPane>
      </Tabs>
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
    </Container>
  );
};

export default FormClient;
