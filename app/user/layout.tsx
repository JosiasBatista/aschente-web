import Header from "@/components/header"
import Sidebar from "@/components/sidebar"

export default function LoggedLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />

      <section className="w-screen px-[15%] flex flex-row mx-auto">
        <Sidebar />

        {children}
      </section>
    </div>
  )
}