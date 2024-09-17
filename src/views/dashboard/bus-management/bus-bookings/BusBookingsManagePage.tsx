import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, Button } from "antd";
import { BusConductorsService } from "@/services";
import { PageHeader, TableBuilder } from "@/components/shared";

const BusBookingsManagePage: React.FC = () => {
  const { isLoading, refetch } = useQuery({
    queryKey: ["bus-bookings"],
    queryFn: async () => BusConductorsService.getConductorsList(),
  });

  const columns = [
    {
      name: "#",
      sortable: true,
      selector: (row: any) => row.id,
    },
    {
      name: "Actions",
      right: true,
      cell: () => {
        return (
          <div className="flex flex-row gap-6">
            <button className="font-medium">View</button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <PageHeader title="Bus Bookings" subtitle="Manage travellers bus bookings details" breadcrumbs={["Manage Bus Bookings"]}></PageHeader>

      <div className="px-5">
        <Card className="w-full min-h-[100px] flex flex-col gap-7">
          <div className="flex flex-row justify-between">
            <div className="w-full">
              <h1 className="font-bold">Bookings List</h1>
            </div>
            <div className="w-full flex flex-row justify-end gap-2">
              <Button className="text-xs">Export to CSV</Button>
              <Button className="text-xs" onClick={() => refetch()}>
                Refresh List
              </Button>
            </div>
          </div>

          {isLoading ? "Fetching data" : <TableBuilder data={[]} columns={columns} />}
        </Card>
      </div>
    </>
  );
};

export default BusBookingsManagePage;
