import Link from "next/link";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-4 font-bold text-xl">Threadix Admin</div>
        <ul className="p-4 space-y-3 text-gray-700">
          <li className="hover:text-black cursor-pointer"><Link href="/admin/dashboard">Dashboard</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/admin/productMang">Products</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/admin/orderMang">Orders</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/admin/usersMang">Users</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/admin/categoryMang">Categories</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/admin/contactMang">Contact</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/">Home</Link></li>
        </ul>
      </aside>
      {children}
    </div>
  )
}

export default AdminLayout;
