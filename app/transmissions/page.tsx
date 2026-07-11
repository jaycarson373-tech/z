import { Nav } from "@/components/Nav";
import { TransmissionFilter } from "@/components/TransmissionFilter";
import { getTransmissions } from "@/lib/transmissions";

export const dynamic = "force-dynamic";

export default async function TransmissionsPage() {
  const transmissions = await getTransmissions();

  return (
    <main className="min-h-screen">
      <Nav />
      <TransmissionFilter transmissions={transmissions} />
    </main>
  );
}
