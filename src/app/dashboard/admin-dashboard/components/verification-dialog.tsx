import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { usePathname } from "next/navigation"

export function DialogDemo() {

const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
            Verify {pathname.includes("com-list") ? "Company" : "Organization"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Input necessary documents</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Upload Validity</Label>
            <Input id="picture" type="file" />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Checker Name
            </Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit Information</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
