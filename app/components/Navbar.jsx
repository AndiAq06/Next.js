import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <h1>Dojo Helpdesk</h1>
      {/* <Image src={Logo} alt="Dojo Helpdesk logo" width={70} placeholder="blur" quality={100} /> */}
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Ticket</Link>
    </nav>
  );
}
