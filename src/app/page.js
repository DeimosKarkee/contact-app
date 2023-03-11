import SearchContacts from "./components/SearchContacts";

async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div className="py-10">
      <SearchContacts users={users} />
    </div>
  );
}

export default Home;
