import React, { useState } from "react";

import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function HookCurrecyConverter() {
  const [currency, setCurrency] = useState({
    currencyMX: 0,
    currencyUSD: 0,
  });

  const handleCurrency = ({ target: { name, value } }) => {
    console.log(name, value);
    let mxn = 0;
    let usd = 0;

    if (name == "currencyMX") {
      mxn = value;
      usd = value / 22.42;
    } else {
      mxn = value;
      usd = value * 22.24;
    }

    setCurrency({
      currencyMX: mxn,
      currencyUSD: usd,
    });
  };

  return (
    <>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <input
        type="number"
        value={currency}
        name="currencyMX"
        onChange={handleCurrency}
      />
      <input
        type="number"
        value={currency}
        name="currencyUSD"
        onChange={handleCurrency}
      />
    </>
  );
}

export default HookCurrecyConverter;
