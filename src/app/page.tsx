'use client';

import { useRef, useState } from "react"
import useAxios from 'axios-hooks';

type Country = {
  isoCode: string;
  name: string;
}

let mock: Array<Country> = [
  // {
  //   isoCode: 'AD',
  //   name: 'Andorra'
  // },
  // {
  //   isoCode: 'AE',
  //   name: 'United Arab Emirates'
  // }
];

export default function Home() {
  const [countries, setCounties] = useState(mock);
  const currencyRef = useRef(null);
  const [createCountriestate, sendGetCountriesUsingCurrency] = useAxios<any>(
    {
      url: `/api/get-countries-using-currency`,
      method: 'POST',
    },
    {
      manual: true,
    }
  );

  const handleSearch = async () => {
    const currency = (currencyRef.current as any)?.value;

    const result = await sendGetCountriesUsingCurrency({
      params: {
        currency
      },
    });

    if (result.status === 200) {
      setCounties(result.data);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl">POC - SOAP client</h1>
      <h2 className="text-3xl mt-6">Countries using currency</h2>
      <label className="mt-10">
        Enter country code:&nbsp;
        <input ref={currencyRef} type="text" className="text-black w-16 p-2" placeholder="USD" />
        <button className="ml-4 p-2 px-4 border-2 rounded-lg" onClick={handleSearch}>Search</button>
      </label>
      <article className="p-6">
        {countries && (
          <table className="table-auto min-w-[400px]">
            <thead>
              <tr>
                <th className="text-left p-4">ISO code</th>
                <th className="text-left p-4">Country</th>
              </tr>
            </thead>
            <tbody>
              {countries?.map((country: Country) => (
                <tr key={country.isoCode} className="border-2 border-x-0">
                  <td className="p-4">{country.isoCode}</td>
                  <td className="p-4">{country.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </article>
    </main>
  )
}
