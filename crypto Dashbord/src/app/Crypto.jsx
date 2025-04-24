import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCrypto,
  selectCrypto,
  selectError,
  selectLoading,
} from "../features/cryptoReducer";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const CryptoTable = () => {
  const dispatch = useDispatch();
  const coins = useSelector(selectCrypto);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("market_cap");
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  const smooth = (data) =>
    data.map((val, i, arr) => {
      const prev = arr[i - 1] ?? val;
      const next = arr[i + 1] ?? val;
      return (prev + val + next) / 3;
    });

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const filteredCoins = coins
    .filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aVal = a[sortKey] ?? 0;
      const bVal = b[sortKey] ?? 0;
      return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
    });

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4 font-nunito">
      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or symbol..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full max-w-md"
        />
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[1000px] w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-100 text-xs uppercase">
            <tr className="leading-12">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Logo</th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("name")}>
                Name {sortKey === "name" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("current_price")}>
                Price {sortKey === "current_price" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("price_change_percentage_1h_in_currency")}>
                1h % {sortKey === "price_change_percentage_1h_in_currency" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("price_change_percentage_24h_in_currency")}>
                24h % {sortKey === "price_change_percentage_24h_in_currency" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("price_change_percentage_7d_in_currency")}>
                7d % {sortKey === "price_change_percentage_7d_in_currency" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("market_cap")}>
                Market Cap {sortKey === "market_cap" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("total_volume")}>
                24h Volume {sortKey === "total_volume" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-4 py-2">Circulating Supply</th>
              <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("market_cap")}>
                Max supply {sortKey === "market_cap" && (sortDirection === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-4 py-2">7D Chart</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin, index) => (
              <tr
                key={coin.id}
                className="bg-white border-t hover:bg-gray-50 leading-10"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                </td>
                <td className="px-4 py-2">
                  {coin.name}{" "}
                  <span className="text-gray-500 font-semibold">
                    {coin.symbol.toUpperCase()}
                  </span>
                </td>
                <td className="px-4 py-2">
                  ${coin.current_price.toLocaleString()}
                </td>
                <td
                  className={`px-4 py-2 ${
                    coin.price_change_percentage_1h_in_currency >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
                </td>
                <td
                  className={`px-4 py-2 ${
                    coin.price_change_percentage_24h_in_currency >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin.price_change_percentage_24h_in_currency?.toFixed(2)}%
                </td>
                <td
                  className={`px-4 py-2 ${
                    coin.price_change_percentage_7d_in_currency >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
                </td>
                <td className="px-4 py-2">
                  ${coin.market_cap.toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  ${coin.total_volume.toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  {coin.circulating_supply?.toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  {coin.max_supply?.toLocaleString() || '-'}
                </td>
                <td className="px-4 py-2">
                  <Sparklines
                    data={smooth(coin.sparkline_in_7d?.price || [])}
                    style={{ width: "250px", height: "60px" }}
                  >
                    <SparklinesLine color="#56b45d" />
                    <SparklinesSpots style={{ fill: "#56b45d" }} />
                  </Sparklines>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
