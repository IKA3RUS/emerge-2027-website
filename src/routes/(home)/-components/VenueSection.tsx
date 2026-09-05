import { Button } from "@/components/primitives/Button";

function VenueSection() {
  return (
    <div
      id="venue"
      className="relative mx-auto mt-40 flex max-w-150 scroll-mt-25 flex-col items-start gap-8"
    >
      <img src="/images/home/iit-map.jpg" className="" />
      <div className="absolute top-4 left-4 z-1 flex max-w-80 flex-col bg-white p-4">
        <h2 className="mb-2 text-sm text-emerge-blue select-none">VENUE</h2>
        <p>
          <strong>PC Saxena Auditorium</strong>
        </p>
        <p>Academic Section, IIT Area, Powai, Mumbai, Maharashtra 400076</p>
        <Button
          className="mt-4"
          nativeButton={false}
          render={
            <a
              href="https://maps.google.com/maps?ll=19.132438,72.915636&z=17&t=m&hl=en-GB&gl=US&mapclient=embed&q=19%C2%B007%2756.4%22N%2072%C2%B054%2757.0%22E%2019.132321%2C%2072.915835@19.132321,72.915835"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          Open In Maps
        </Button>
      </div>
    </div>
  );
}

export { VenueSection };
