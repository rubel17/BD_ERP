import React, { useEffect, useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Link } from "react-router-dom";

const Address = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    document.getElementById("copy").onclick = function () {
      document.getElementById("ship_name").value =
        document.getElementById("bill_name").value;

      document.getElementById("ship_country").value =
        document.getElementById("bill_country").value;

      document.getElementById("ship_region").value =
        document.getElementById("bill_region").value;

      document.getElementById("ship_district").value =
        document.getElementById("bill_district").value;

      document.getElementById("ship_city").value =
        document.getElementById("bill_city").value;

      document.getElementById("ship_union").value =
        document.getElementById("bill_union").value;

      document.getElementById("ship_zipCode").value =
        document.getElementById("bill_zipCode").value;

      document.getElementById("ship_village").value =
        document.getElementById("bill_village").value;

      document.getElementById("ship_house").value =
        document.getElementById("bill_house").value;

      document.getElementById("ship_phone").value =
        document.getElementById("bill_phone").value;

      document.getElementById("ship_fax").value =
        document.getElementById("bill_fax").value;
    };
  }, []);

  var [companies, setCompanies] = useState([
    { name: "Dhaka Sador", jobs: ["Dhanmondi", "Gulsan", "Bonani"] },
    { name: "Khulna Sador", jobs: ["Jessor", "Shatkhira", "Bagerhat"] },
    { name: "Barisal Sador", jobs: ["Agailzhara", "Babuganj", "Uzirpur"] },
  ]);

  var [selectedCompany, setSC] = useState("Dhaka Sador");

  function handleChange(e) {
    setSC(e.target.value);
  }

  function render() {
    let company = companies.filter((company) => {
      return company.name === selectedCompany;
    });
    return (
      <div>
        <label htmlFor="exampleDataList" className="form-label">
          District
        </label>
        <br />
        <select
          id="bill_district"
          className="form-control form-control-sm"
          value={selectedCompany}
          onChange={handleChange}
        >
          {companies.map((company, i) => {
            return <option key={i}>{company.name}</option>;
          })}
        </select>
        <label htmlFor="exampleDataList" className="form-label">
          City/Sub District/Thana
        </label>
        <select id="bill_city" className="form-control form-control-sm">
          {company[0].jobs.map((job, i) => {
            return <option key={i}>{job}</option>;
          })}
        </select>
      </div>
    );
  }
  return (
    <>
      <div
        className="d-flex py-3 pe-3"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div style={{ width: "50%" }} className="ms-4">
          <h5 className="mb-3">BILLING ADDRESS</h5>
          <h5>Attention</h5>
          <input
            id="bill_name"
            className="form-control form-control-sm"
            type="text"
            placeholder="Enter Person/Site Name"
          />
          <div>
            <label htmlFor="exampleDataList" className="form-label">
              Country
            </label>
            <br />
            <CountryDropdown
              id="bill_country"
              className="form-control form-control-sm"
              value={country}
              onChange={(val) => setCountry(val)}
            />

            <label htmlFor="exampleDataLists" className="form-label">
              Division/Province/State
            </label>
            <br />
            <RegionDropdown
              id="bill_region"
              className="form-control form-control-sm"
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
            />
          </div>
          {render()}

          <label className="form-label">Union/Area</label>
          <input
            className="form-control form-control-sm"
            placeholder="Type Union"
            id="bill_union"
          />

          <label className="form-label">Zip Code</label>
          <input
            className="form-control form-control-sm"
            id="bill_zipCode"
            placeholder="Type Zip Code"
          />
          <label className="form-label">Street Address/Village</label>
          <input
            className="form-control form-control-sm"
            id="bill_village"
            placeholder="Type Street Address"
          />
          <label className="form-label">House/Sulte/Apartment No</label>
          <input
            className="form-control form-control-sm"
            id="bill_house"
            placeholder="House"
          />
          <label className="form-label">Phone</label>
          <input
            className="form-control form-control-sm"
            id="bill_phone"
            placeholder="Type Phone"
          />
          <label className="form-label">Fax</label>
          <input
            className="form-control form-control-sm"
            id="bill_fax"
            placeholder="Type Fax"
          />
        </div>

        {/* right side */}

        <div className="ms-4" style={{ width: "50%" }}>
          <div className="d-flex">
            <h5>SHIPPING ADDRESS</h5>

            <Link className="fw-semibold">
              <p id="copy" className="text-primary ms-3">
                <ArrowDownIcon style={{ width: "20px" }} className="ms-2" />
                Copy Billing Address
              </p>
            </Link>
          </div>

          <h5>Attention</h5>
          <input id="ship_name" className="form-control form-control-sm" />

          <label className="form-label">Country</label>
          <input className="form-control form-control-sm" id="ship_country" />

          <label className="form-label">Devision/Province/State</label>
          <input className="form-control form-control-sm" id="ship_region" />

          <label className="form-label">District</label>
          <input className="form-control form-control-sm" id="ship_district" />

          <label className="form-label">City/Sub District/Thana</label>
          <input className="form-control form-control-sm" id="ship_city" />

          <label className="form-label">Union/Area</label>
          <input className="form-control form-control-sm" id="ship_union" />

          <label className="form-label">Zip Code</label>
          <input className="form-control form-control-sm" id="ship_zipCode" />

          <label className="form-label">Street Address/Village</label>
          <input className="form-control form-control-sm" id="ship_village" />

          <label className="form-label">House/Sulte/Apartment No</label>
          <input className="form-control form-control-sm" id="ship_house" />

          <label className="form-label">Phone</label>
          <input className="form-control form-control-sm" id="ship_phone" />

          <label className="form-label">Fax</label>
          <input className="form-control form-control-sm" id="ship_fax" />
        </div>
      </div>
    </>
  );
};

export default Address;
