import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/contact.jpg"
                alt="About us"
                width={800}
                height={600}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Contacts
              </h1>
              <p className="text-gray-700 mb-6">
                Hi there! Welcome to Contacts app where you can view contacts
                and individual contact. You can see their username, name, phone
                number, email etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
