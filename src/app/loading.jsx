import Image from "next/image";
import spinner from "../../public/spinner.svg";

function Loading() {
  return (
    <div className="flex justify-center">
      <Image
        src={spinner}
        alt="Loading......."
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}

export default Loading;
