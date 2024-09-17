import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, Input, Select, Button } from "antd";
import { PaymentsService } from "@/services";
import { PageHeader, TableBuilder } from "@/components/shared";

const statusOption = ["paid", "unpaid"].map((status) => ({ label: status.toUpperCase(), value: status }));

const PaymongoReferenceManagePage: React.FC = () => {
  const { isLoading, refetch } = useQuery({
    queryKey: ["payment-paymongo-references"],
    queryFn: async () => PaymentsService.getPaymongoPaymentsList(),
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
      <PageHeader
        title="Paymongo References"
        subtitle="Manage payments paymongo references"
        breadcrumbs={["Manage Paymongo References"]}
      ></PageHeader>

      <div className="px-5">
        <Card className="w-full min-h-[100px] flex flex-col gap-7">
          <div className="flex flex-row justify-between">
            <div className="w-full">
              <h1 className="font-bold">Paymongo References List</h1>
              <div className="flex flex-row gap-2 mt-3">
                <Input placeholder="Search" />
                <Select options={statusOption} placeholder="Filter by status" />
              </div>
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

export default PaymongoReferenceManagePage;
