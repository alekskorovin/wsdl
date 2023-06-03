import type { NextApiRequest, NextApiResponse } from 'next';

const soap = require('strong-soap').soap;

// URL for API Endpoit was taken from POSTMAN collection:
// https://documenter.getpostman.com/view/8854915/Szf26WHn?version=latest#c9b8614d-2f25-4eb5-9b39-3715b0d04992
// check value in the .env.local file
const url = process.env.SOAP_WSDL_SERVICE_URL;
const options = {};

// Documentation regarding the strong-soap package:
// https://github.com/loopbackio/strong-soap#install
const fetch = async (currency: string) => {
  var promiseResolve: any, promiseReject;

  var result = new Promise(function(resolve, reject){
    promiseResolve = resolve;
    promiseReject = reject;
  });

  async function getData(_: any, client: any) {
    var method = client['CountryInfoService']['CountryInfoServiceSoap12']['CountriesUsingCurrency'];
    return method({ sISOCurrencyCode: currency }, function(_: any, result: any, envelope: any) {
      const list = result.CountriesUsingCurrencyResult.tCountryCodeAndName;
      const resultList = list.map(({ sISOCode, sName }: any) => ({
        isoCode: sISOCode,
        name: sName
      }))
      promiseResolve(resultList);
    });
  };

  soap.createClient(url, options, getData);

  return result;
};

const GetCountriesUsingCurrencyAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { currency },
  } = req;

  try {
    const result = await fetch(currency as string);

    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(result);
  } catch (e) {
    console.log('Error, something went wrong.', e);
    res.setHeader('Cache-Control', 'no-store');
    res.status(400).json({ error: 'Unexpected error', code: 400 });
  }
};

export default GetCountriesUsingCurrencyAPI;
