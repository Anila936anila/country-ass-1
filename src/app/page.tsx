import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
   <h1>Country List</h1>

   <Link href="/country/pakistan" style={{margin: "10px", borderRadius:"10px", border: "2px solid black", padding:"10px" }}>
   Pakistan</Link>
   <Link href="/country/india" style={{margin: "10px", borderRadius:"10px", border: "2px solid black", padding:"10px" }}>
   India</Link>
   <Link href="/country/china" style={{margin: "10px", borderRadius:"10px", border: "2px solid black", padding:"10px" }}>
   China</Link>
   <Link href="/country/turkey" style={{margin: "10px", borderRadius:"10px", border: "2px solid black", padding:"10px" }}>
   Turkey</Link>
   <Link href="/country/iran" style={{margin: "10px", borderRadius:"10px", border: "2px solid black", padding:"10px" }}>
   Iran</Link>
    </div>
  );
}
