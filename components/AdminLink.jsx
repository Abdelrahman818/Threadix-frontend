'use client';

import { useState, useEffect } from "react";
import { END_POINT } from "@/config";
import Link from "next/link";

const AdminLink = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(END_POINT.GET_ROLE, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.successful && json.isAdmin) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      })
      .catch(error => console.log(error.message));
  }, []);

  if (!isAdmin) return null;

  return (
    <>
      {isAdmin && <Link href="/admin/dashboard">Admin</Link>}
    </>
  )
}

export default AdminLink;
