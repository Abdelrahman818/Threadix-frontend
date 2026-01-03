'use client';

import { useState, useEffect } from "react";
import { END_POINT } from "@/config";
import Link from "next/link";

const AdminLink = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await fetch(END_POINT.GET_ROLE, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const json = await res.json();
        setIsAdmin(!!(json.successful && json.isAdmin));
      } catch (error) {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, []);

  if (!isAdmin) return null;

  return (
    <>
      {isAdmin && <Link href="/admin/dashboard">Admin</Link>}
    </>
  )
}

export default AdminLink;
