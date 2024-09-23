import RootContainer from "@/components/Shared/RootContainer";
import SectionSpacer from "@/components/Shared/SectionSpacer";
import SectionStarter from "@/components/Shared/SectionStarter";
import ClinicCard from "./ClinicCard";

const clinics = [
  {
    clinic_name: "Sunrise Health Clinic",
    contact_number: "+1 (123) 456-7890",
    email: "info@sunriseclinic.com",
    location: "123 Main St, Los Angeles, CA",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    clinic_name: "Green Valley Medical Center",
    contact_number: "+1 (987) 654-3210",
    email: "contact@greenvalley.com",
    location: "456 Elm St, New York, NY",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    clinic_name: "Downtown Family Clinic",
    contact_number: "+1 (555) 789-1234",
    email: "support@downtownfamily.com",
    location: "789 Pine Ave, Chicago, IL",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    clinic_name: "Lakeside Health Care",
    contact_number: "+1 (333) 123-4567",
    email: "hello@lakesidecare.com",
    location: "321 Lakeview Blvd, Miami, FL",
    image: "https://picsum.photos/400/300?random=4",
  },
  {
    clinic_name: "Healthy Life Clinic",
    contact_number: "+1 (777) 654-9870",
    email: "contact@healthylife.com",
    location: "987 Oak St, San Francisco, CA",
    image: "https://picsum.photos/400/300?random=5",
  },
  {
    clinic_name: "City Wellness Clinic",
    contact_number: "+1 (444) 321-7654",
    email: "info@citywellness.com",
    location: "654 Maple Dr, Houston, TX",
    image: "https://picsum.photos/400/300?random=6",
  },
];

const ClinicSection = () => {
  return (
    <SectionSpacer>
      <SectionStarter
        title="Our Clinic"
        description="Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed."
      />
      <RootContainer>
        <div className="grid grid-cols-2 gap-x-24 gap-y-6">
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.clinic_name} clinic={clinic} />
          ))}
        </div>
      </RootContainer>
    </SectionSpacer>
  );
};

export default ClinicSection;
