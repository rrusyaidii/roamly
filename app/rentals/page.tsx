import EmptyList from "@/components/home/EmptyList";
import { fetchRentals, deleteRentalAction } from "@/utils/actions";
import Link from "next/link";

import { formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";

async function RentalsPage() {
  const rentals = await fetchRentals();

  if (rentals.length === 0) {
    return <EmptyList heading="No rentals to display" />;
  }
  return (
    <div className="mt-16">
      <h4>Active Properties : {rentals.length}</h4>
      <Table>
        <TableCaption>A list of all your properties.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Property Name</TableHead>
            <TableHead>Nightly Rate</TableHead>
            <TableHead>Nights Booked</TableHead>
            <TableHead>Total Income</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
}
export default RentalsPage;
