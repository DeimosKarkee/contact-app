import Contact from "../components/Contact";

async function ContactId({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.contactId}`
  );
  const user = await res.json();

  return (
    <div
      key={user.id}
      className="bg-[#363e4c]  flex justify-center items-center w-full h-full"
    >
      <Contact user={user} />
    </div>
  );
}
export default ContactId;
