import Navbar from "@/app/components/Navbar";
import Link from "next/link";

export default function CountryName({params}:any) {


  const countries:{
    name: string;
    population: number;
    capital: string;
  }[] = [{
    name: "Pakistan",
    population: 216000000,
    capital: "Islamabad"
  },
  {
    name: "India",
    population: 1.429 ,
    capital: "New Delhi"
  },
  {
    name: "China",
    population: 1.411,
    capital: "Beijing"
  },
  {
    name: "Turkey",
    population:  87473805,
    capital: "Ankara"
  },
  {
    name: "Iran",
    population: 91567738,
    capital: "Tehran"
  },
];
function findCountry(name: string): any {
  return countries.find(
    (country) => name.toLowerCase() == country.name.toLowerCase()
  );
}
let result = findCountry(params.country_name);
return (
  <div>
    <div>
    {result ? (
            <>
             <h1>Country Name: {result.name}</h1>
             <h1>Capital: {result.capital}</h1>
             <h1>Population: {result.population} </h1>
            </>
          ) : (
            <h1>
              {params.country_name}Not Found in the database. 
              Please check the parameter name in the URL.
              </h1>
          )}
        </div>
        <div>
          <li className="cust_button">
            <Link className="" href="/">
            Back
            </Link>
          </li>
        </div>
    </div>
 )
  };
  

 